use anyhow::{Context, Result};
use cairo_lang_protostar::test_collector::{collect_tests, LinkedLibrary};
use cairo_lang_runner::{RunResultValue, SierraCasmRunner, ProtostarTestConfig};
use camino::{Utf8Path, Utf8PathBuf};
use walkdir::WalkDir;

use blockifier::transaction::transaction_utils_for_protostar::create_state_with_trivial_validation_account;

fn run_result_value_to_string(run_result: RunResultValue) -> String {
    return match run_result {
        RunResultValue::Success(data) => format!("PASS {:?}", data),
        RunResultValue::Panic(data) => format!("FAIL {:?}", data),
    };
}

fn collect_tests_in_directory(input_path: &Utf8PathBuf) -> Result<Vec<Utf8PathBuf>> {
    let mut test_directories: Vec<Utf8PathBuf> = vec![];

    for entry in WalkDir::new(input_path) {
        let entry =
            entry.with_context(|| format!("Failed to read directory at path = {}", input_path))?;
        let path = entry.path();

        let xxx = path.file_name().unwrap().to_str().unwrap().to_owned();
        if path.is_file() && path.extension().unwrap_or_default() == "cairo" {
            test_directories.push(
                Utf8Path::from_path(path)
                    .with_context(|| format!("Failed to convert path = {:?} to utf-8", path))?
                    .to_path_buf(),
            );
        }
    }

    Ok(test_directories)
}

pub fn run_tests(
    input_path: Utf8PathBuf,
    linked_libraries: Option<Vec<LinkedLibrary>>,
    protostar_test_config: &ProtostarTestConfig,
) -> Result<()> {
    let test_directories = collect_tests_in_directory(&input_path)?;
    for test in test_directories {
        run_tests_in_file(test, linked_libraries.clone(), protostar_test_config)?;
    }
    Ok(())
}

fn run_tests_in_file(
    input_path: Utf8PathBuf,
    linked_libraries: Option<Vec<LinkedLibrary>>,
    protostar_test_config: &ProtostarTestConfig,
) -> Result<()> {
    let builtins = vec!["GasBuiltin", "Pedersen", "RangeCheck", "bitwise", "ec_op"];

    let (sierra_program, test_configs) =
        collect_tests(input_path.as_str(), None, linked_libraries, Some(builtins), None)?;

    let runner =
        SierraCasmRunner::new(sierra_program, Some(Default::default()), Default::default())
            .context("Failed setting up runner.")?;

    for config in &test_configs {
        let blockifier_state = create_state_with_trivial_validation_account();
        let result = runner
            .run_function(
                runner.find_function(&config.name.as_str())?,
                &[],
                if let Some(available_gas) = &config.available_gas {
                    Some(available_gas.clone())
                } else {
                    Some(usize::MAX)
                },
                Default::default(),
                Some(protostar_test_config.clone()),
                Some(blockifier_state),
            )
            .with_context(|| format!("Failed to run the function `{}`.", config.name.as_str()))?;
        let name = config.name.clone();
        let result_str = run_result_value_to_string(result.value);
        println!("{}: {}", name, result_str);
    }
    Ok(())
}
