use array::ArrayTrait;
use protostar_print::PrintTrait;

#[test]
fn test_print() {
    123.print();
    'aaa'.print();

    let mut arr = ArrayTrait::new();
    arr.append(12);
    arr.append(17);
    arr.append(21);
    arr.print();

    (1 == 5).print();
    assert(1 == 1, 'simple check');
}
