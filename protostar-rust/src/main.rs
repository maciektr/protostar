use std::{collections::HashMap, env::set_var};

use anyhow::{anyhow, Result};
use cairo_lang_runner::ProtostarTestConfig;
use camino::Utf8PathBuf;
use clap::Parser;
use scarb_metadata::{Metadata, MetadataCommand, PackageId};

use cairo_lang_protostar::test_collector::LinkedLibrary;
use rust_test_runner::pretty_printing;
use rust_test_runner::run_test_runner;

use serde::Deserialize;

#[derive(Deserialize, Debug)]
pub struct ProtostarTestConfigForDeserialization {
    #[serde(default)]
    #[warn(dead_code)]
    exit_first: bool,
}

#[derive(Parser, Debug)]
struct Args {
    test_filter: Option<String>,
}

fn protostar_config_for_package(
    metadata: &Metadata,
    package: &PackageId,
) -> Result<ProtostarTestConfigForDeserialization> {
    let raw_metadata = metadata
        .get_package(package)
        .ok_or_else(|| anyhow!("Failed to find metadata for package = {package}"))?
        .tool_metadata("protostar")
        .ok_or_else(|| anyhow!("Failed to find protostar config for package = {package}"))?
        .clone();
    let protostar_config: ProtostarTestConfigForDeserialization =
        serde_json::from_value(raw_metadata)?;

    Ok(protostar_config)
}

fn dependencies_for_package(
    metadata: &Metadata,
    package: &PackageId,
) -> Result<(Utf8PathBuf, Vec<LinkedLibrary>)> {
    let compilation_unit = metadata
        .compilation_units
        .iter()
        .filter(|unit| unit.package == *package)
        .min_by_key(|unit| match unit.target.name.as_str() {
            name @ "starknet-contract" => (0, name),
            name @ "lib" => (1, name),
            name => (2, name),
        })
        .ok_or_else(|| anyhow!("Failed to find metadata for package = {package}"))?;

    let base_path = metadata
        .get_package(package)
        .ok_or_else(|| anyhow!("Failed to find metadata for package = {package}"))?
        .root
        .clone();

    let dependencies = compilation_unit
        .components
        .iter()
        .filter(|du| !du.source_path.to_string().contains("core/src"))
        .map(|cu| LinkedLibrary {
            name: cu.name.clone(),
            path: cu.source_root().to_owned().into_std_path_buf(),
        })
        .collect();

    Ok((base_path, dependencies))
}

fn main_execution() -> Result<()> {
    let _args = Args::parse();

    let project_root_path = project_root::get_project_root()?
        .to_str()
        .expect("error reading project root path")
        .to_owned();
    // TODO #1997
    set_var(
        "CARGO_MANIFEST_DIR",
        format!("{}/../cairo/Cargo.toml", project_root_path),
    );

    let scarb_metadata = MetadataCommand::new().inherit_stderr().exec()?;

    let mut protostar_test_config = ProtostarTestConfig {
        contracts_paths: HashMap::new(),
    };
    for package in &scarb_metadata.packages {
        for target in &package.targets {
            if target.kind == "starknet-contract" {
                // TODO consider multiple targets of this kind
                protostar_test_config
                    .contracts_paths
                    .insert(target.name.clone(), target.source_path.to_string());
            }
        }
    }

    for package in &scarb_metadata.workspace.members {
        // This is left here so its shown how to use it
        let _protostar_config = protostar_config_for_package(&scarb_metadata, package)?;
        let (base_path, dependencies) = dependencies_for_package(&scarb_metadata, package)?;

        run_test_runner(&base_path, Some(&dependencies), &protostar_test_config)?;
    }
    Ok(())
}

fn main() {
    match main_execution() {
        Ok(()) => std::process::exit(0),
        Err(error) => {
            pretty_printing::print_error_message(&error);
            std::process::exit(1);
        }
    };
}
