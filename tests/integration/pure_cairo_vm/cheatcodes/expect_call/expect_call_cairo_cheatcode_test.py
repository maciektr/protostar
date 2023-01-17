from pathlib import Path

import pytest

from tests.integration.conftest import (
    CreateProtostarProjectFixture,
    assert_cairo_test_cases,
)
from tests.integration._conftest import ProtostarFixture
from tests.integration.pure_cairo_vm.conftest import RunCairoTestRunnerFixture

CONTRACTS_PATH = Path(__file__).parent.parent / "contracts"
TEST_PATH = Path(__file__).parent


@pytest.fixture(autouse=True, name="protostar")
def protostar_fixture(create_protostar_project: CreateProtostarProjectFixture):
    with create_protostar_project() as protostar:
        yield protostar


async def test_expect_call(
    protostar: ProtostarFixture, run_cairo_test_runner: RunCairoTestRunnerFixture
):
    protostar.create_files(
        {
            "src/basic.cairo": CONTRACTS_PATH / "basic_contract.cairo",
            "src/proxy.cairo": CONTRACTS_PATH / "proxy_for_basic_contract.cairo",
        }
    )

    testing_summary = await run_cairo_test_runner(
        TEST_PATH / "expect_call_test.cairo",
    )

    assert_cairo_test_cases(
        testing_summary,
        expected_passed_test_cases_names=[
            "test_expect_call_success",
            "test_expect_call_before_stop_success",
            "test_expect_call_with_proxy_simple",
            "test_expect_call_with_proxy_deeper",
        ],
        expected_failed_test_cases_names=[
            "test_expect_call_wrong_arg_fail",
            "test_expect_call_after_stop_fail",
            "test_expect_call_wrong_function_fail",
            "test_expect_call_invalid_function_name_fail",
        ],
    )
