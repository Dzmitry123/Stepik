inputs = [];
// inputs.push({input : [ '12', 'add 911 police', 'add 76213 Mom', 'add 17239 Bob', 'find 76213', 'find 910', 'find 911',
//         'del 910', 'del 911', 'find 911', 'find 76213', 'add 76213 daddy', 'find 76213' ],
// output : ['Mom', 'not found', 'police', 'not found', 'Mom', 'daddy'] });
inputs.push({input : [ '8', 'find 3839442', 'add 123456 me', 'add 0 granny', 'find 0', 'find 123456', 'del 0', 'del 0',
       'find 0' ],
output : ['not found', 'granny', 'me', 'not found'] });




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

