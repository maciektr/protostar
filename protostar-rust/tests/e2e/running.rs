use crate::common::runner::{corelib_path, runner};
use assert_fs::fixture::PathCopy;
use indoc::indoc;

#[test]
fn running_tests() {
    let temp = assert_fs::TempDir::new().unwrap();
    temp.copy_from("tests/data/example_package", &["**/*"])
        .unwrap();

    let snapbox = runner();
    let corelib = corelib_path();

    snapbox
        .current_dir(&temp)
        .args(&["--corelib-path", corelib])
        .assert()
        .success()
        .stdout_matches(indoc! {r#"Collected 7 test(s) and 4 test file(s)
            Running 1 test(s) from tests/without_prefix.cairo
            [PASS] without_prefix::without_prefix::five
            Running 3 test(s) from tests/test_2.cairo
            [PASS] test_2::test_2::test_two
            [FAIL] test_2::test_2::test_two_failing 2 == 3
            [PASS] test_2::test_2::test_three
            Running 2 test(s) from tests/test_my_test.cairo
            [PASS] test_my_test::test_my_test::test_my_test
            [PASS] test_my_test::test_my_test::test_four
            Running 1 test(s) from src/lib.cairo
            [PASS] [..]::test_fib
            Tests: 6 passed, 1 failed
        "#});
}

#[test]
fn running_tests_with_filter() {
    let temp = assert_fs::TempDir::new().unwrap();
    temp.copy_from("tests/data/example_package", &["**/*"])
        .unwrap();

    let snapbox = runner();
    let corelib = corelib_path();

    snapbox
        .current_dir(&temp)
        .arg("two")
        .args(["--corelib-path", corelib])
        .assert()
        .success()
        .stdout_matches(indoc! {r#"Collected 2 test(s) and 4 test file(s)
            Running 0 test(s) from tests/without_prefix.cairo
            Running 2 test(s) from tests/test_2.cairo
            [PASS] test_2::test_2::test_two
            [FAIL] test_2::test_2::test_two_failing 2 == 3
            Running 0 test(s) from tests/test_my_test.cairo
            Running 0 test(s) from src/lib.cairo
            Tests: 1 passed, 1 failed
        "#});
}

#[test]
fn running_tests_with_non_matching_filter() {
    let temp = assert_fs::TempDir::new().unwrap();
    temp.copy_from("tests/data/example_package", &["**/*"])
        .unwrap();

    let snapbox = runner();
    let corelib = corelib_path();

    snapbox
        .current_dir(&temp)
        .arg("qwerty")
        .args(["--corelib-path", corelib])
        .assert()
        .success()
        .stdout_matches(indoc! {r#"Collected 0 test(s) and 4 test file(s)
            Running 0 test(s) from tests/without_prefix.cairo
            Running 0 test(s) from tests/test_2.cairo
            Running 0 test(s) from tests/test_my_test.cairo
            Running 0 test(s) from src/lib.cairo
            Tests: 0 passed, 0 failed
        "#});
}
