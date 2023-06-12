use anyhow::{Context, Result};
use cairo_lang_protostar::test_collector::{collect_tests, LinkedLibrary};
use cairo_lang_runner::{ProtostarTestConfig, SierraCasmRunner, StarknetState};
use std::collections::HashMap;

use camino::{Utf8Path, Utf8PathBuf};
use walkdir::WalkDir;

use blockifier::transaction::transaction_utils_for_protostar::create_state_with_trivial_validation_account;
use cairo_lang_protostar::casm_generator::TestConfig;
use cairo_lang_sierra::program::Program;
use cairo_lang_sierra_to_casm::metadata::MetadataComputationConfig;

use crate::test_stats::TestsStats;

pub mod pretty_printing;
mod test_stats;

pub struct TestsFromFile {
    pub sierra_program: Program,
    pub tests_configs: Vec<TestConfig>,
    pub relative_path: Utf8PathBuf,
}

fn collect_tests_from_directory(
    input_path: &Utf8PathBuf,
    linked_libraries: Option<&Vec<LinkedLibrary>>,
) -> Result<Vec<TestsFromFile>> {
    let mut test_files: Vec<Utf8PathBuf> = vec![];

    for entry in WalkDir::new(input_path) {
        let entry =
            entry.with_context(|| format!("Failed to read directory at path = {}", input_path))?;
        let path = entry.path();

        if path.is_file() && path.extension().unwrap_or_default() == "cairo" {
            test_files.push(
                Utf8Path::from_path(path)
                    .with_context(|| format!("Failed to convert path = {:?} to utf-8", path))?
                    .to_path_buf(),
            );
        }
    }

    internal_collect_tests(input_path, linked_libraries, test_files)
}

fn internal_collect_tests(
    input_path: &Utf8PathBuf,
    linked_libraries: Option<&Vec<LinkedLibrary>>,
    test_files: Vec<Utf8PathBuf>,
) -> Result<Vec<TestsFromFile>> {
    let builtins = vec!["GasBuiltin", "Pedersen", "RangeCheck", "bitwise", "ec_op"];
    let linked_libraries = linked_libraries.map(std::clone::Clone::clone);

    let mut tests = vec![];
    for ref test_file in test_files {
        let (sierra_program, tests_configs) = collect_tests(
            test_file.as_str(),
            None,
            linked_libraries.clone(),
            Some(builtins.clone()),
            None,
        )?;
        let relative_path = test_file.strip_prefix(input_path)?.to_path_buf();
        tests.push(TestsFromFile {
            sierra_program,
            tests_configs,
            relative_path,
        });
    }

    Ok(tests)
}

pub fn run_test_runner(
    input_path: &Utf8PathBuf,
    linked_libraries: Option<&Vec<LinkedLibrary>>,
    protostar_test_config: &ProtostarTestConfig,
) -> Result<()> {
    let tests = collect_tests_from_directory(input_path, linked_libraries)?;

    pretty_printing::print_collected_tests_count(
        tests.iter().map(|tests| tests.tests_configs.len()).sum(),
        tests.len(),
    );

    let mut tests_stats = TestsStats::default();
    for tests_from_file in tests {
        run_tests(tests_from_file, &mut tests_stats, protostar_test_config)?;
    }
    pretty_printing::print_test_summary(tests_stats);

    Ok(())
}

pub fn run_tests(
    tests: TestsFromFile,
    tests_stats: &mut TestsStats,
    protostar_test_config: &ProtostarTestConfig,
) -> Result<()> {
    let runner = SierraCasmRunner::new(
        tests.sierra_program,
        Some(MetadataComputationConfig::default()),
        HashMap::default(),
    )
    .context("Failed setting up runner.")?;

    pretty_printing::print_running_tests(&tests.relative_path, tests.tests_configs.len());
    for config in tests.tests_configs {
        let blockifier_state = create_state_with_trivial_validation_account();
        let result = runner
            .run_function(
                runner.find_function(config.name.as_str())?,
                &[],
                if let Some(available_gas) = &config.available_gas {
                    Some(*available_gas)
                } else {
                    Some(usize::MAX)
                },
                StarknetState::default(),
                Some(protostar_test_config.clone()),
                Some(blockifier_state),
            )
            .with_context(|| format!("Failed to run the function `{}`.", config.name.as_str()))?;

        tests_stats.update(&result.value);
        pretty_printing::print_test_result(&config.name.clone(), &result.value);
    }
    Ok(())
}
