use result::ResultTrait;
use protostar_print::PrintTrait;

#[test]
fn test_declare_simple() {
    let result = declare('simple_contract').unwrap();
    //'asd'.print(); // print needs to be implemented!! in rust
    assert(1 == 1, 'simple check');
}
