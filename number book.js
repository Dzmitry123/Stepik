inputs = [];
inputs.push({input : [ '5', '12', 'add world', 'add HellO', 'check 4', 'find World', 'find world', 'del world', 'check 4',
    'del HellO', 'add luck', 'add GooD', 'check 2', 'del good' ],
output : [ 'HellO world', 'no', 'yes', 'HellO', 'GooD luck' ] });
inputs.push({input : [ '4', '8', 'add test', 'add test', 'find test', 'del test', 'find test', 'find Test', 'add Test',
        'find Test' ],
output : [ 'yes', 'no', 'no', 'yes' ] });
inputs.push({input : [ '3', '12', 'check 0', 'find help', 'add help', '', 'find Test', 'add Test',
        'find Test' ],
    output : [  ] });
3
12
check 0
find help
add help
add del
add add
find add
find del
del del
find del
check 0
check 1
check 2
Выход:
    no
yes
yes
no
add help

function myAlgorithm(input) {
    const params = input[0].toString().split(' ');
    let n = +params[0];
    let arrBook = []; // number book

    for (let i = 1; i < n + 1; i++) {
        let string = input[i].toString().split(' ');
        // add numbers to book
        if (string[0] === 'add') {
            arrBook[+string[1]] = string[2];
        }
        // find numbers in book
        if (string[0] === 'find') {
            if (arrBook[string[1]]) {
            console.log(arrBook[string[1]]);
            }else {
                console.log('not found');
            }
        }
        // delete number from book
        if (string[0] === 'del') {
            arrBook[+string[1]] = 0;
        }
    }

}
for (let i = 0; i < inputs.length; i++) {
    console.log('test number ' + i);
    myAlgorithm(inputs[i].input);
    console.log('\n');
}

