use result::ResultTrait;
use protostar_print::PrintTrait;

#[test]
fn test_declare_simple() {
    let result = declare('simple_contract').unwrap();
    assert(class_hash == 273, 'proper class hash');
}
