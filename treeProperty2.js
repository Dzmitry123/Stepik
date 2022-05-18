inputs = [];

// inputs.push({ input: [ '3', '1 1 2', '2 -1 -1', '3 -1 -1' ],
//     output: ['CORRECT']});
// inputs.push({ input: [ '3', '1 1 2', '2 -1 -1', '3 -1 -1' ],
//     output: ['INCORRECT']});
// inputs.push({ input: [ '5', '1 -1 1', '2 -1 2', '3 -1 3', '4 -1 4', '5 -1 -1' ],
//     output: ['CORRECT']});
// inputs.push({ input: [ '7', '4 1 2', '2 3 4', '6 5 6', '1 -1 -1', '3 -1 -1', '5 -1 -1', '7 -1 -1' ],
//     output: ['CORRECT']});
// inputs.push({ input: [ '1', '2147483647' ],
//     output: ['CORRECT']});
inputs.push({ input: ['4', '4 1 -1', '2 2 3', '1 -1 -1', '5 -1 -1'],
    output: ['INCORRECT']});
// inputs.push({ input: [ '4', '2 -1 1', '5 2 -1', '3 -1 3', '5 -1 -1' ],
//     output: ['CORRECT']});


function myAlgorithm(input) {
    let n = +input[0];
    let tree = [];

    for (let i = 1; i < n + 1; i++) {
        let root = input[i].toString().split(' ').map(item => +item);
        tree.push(root);
    }
    if (tree.length == 0) {
        console.log('CORRECT');
        return
    }
    inOrder(tree, 0);
    console.log('CORRECT');

}

let previousValue;

function inOrder(arr, index) {
    if (arr[index][1] > 0) {
        inOrder(arr, arr[index][1]);
    }

    if (previousValue !== undefined) {
        if (previousValue > arr[index][0]) {
            console.log('INCORRECT');
            process.exit();
        }
    }

    previousValue = arr[index][0];

    if (arr[index][2] > 0) {
        inOrder(arr, arr[index][2]);
    }
}

for (let i = 0; i < inputs.length; i++) {
    // console.log('test number ' + i);
    myAlgorithm(inputs[i].input);
    console.log('\n');
}
