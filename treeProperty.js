inputs = [];

// inputs.push({ input: [ '3', '2 1 2', '1 -1 -1', '3 -1 -1' ],
//     output: ['CORRECT']});
// inputs.push({ input: [ '3', '1 1 2', '2 -1 -1', '3 -1 -1' ],
//     output: ['INCORRECT']});
// inputs.push({ input: [ '5', '1 -1 1', '2 -1 2', '3 -1 3', '4 -1 4', '5 -1 -1' ],
//     output: ['CORRECT']});
// inputs.push({ input: [ '7', '4 1 2', '2 3 4', '6 5 6', '1 -1 -1', '3 -1 -1', '5 -1 -1', '7 -1 -1' ],
//     output: ['CORRECT']});
// inputs.push({ input: [ '0' ],
//     output: ['CORRECT']});
// inputs.push({ input: [ '4', '4 1 -1', '2 2 3', '1 -1 -1', '5 -1 -1' ],
//     output: ['INCORRECT']});
inputs.push({ input: [ '4', '2 -1 1', '5 2 -1', '3 -1 3', '5 -1 -1' ],
    output: ['INCORRECT']});


function myAlgorithm(input) {
    let n = +input[0];
    let tree = [];

    for (let i = 1; i < n + 1; i++) {
        let root = input[i].toString().split(' ').map(item => +item);
        tree.push(root);
    }
    if(tree.length == 0) {
        console.log('CORRECT');
        return
    }
    let top = tree[0][0];
    let res = inOrder(tree, 0, top);
    console.log(res);
    if (!res) {
      console.log('INCORRECT');
    }
    else {
     console.log('CORRECT')
    }
}

debugger
function inOrder(arr, index, root) {
    let arrOfRoot = [];

    if (arr[index][1] > 0 ) {
        let indexLeftChild = arr[index][1];
        let indexRightChild = arr[index][2];
        if (arr[indexLeftChild][0] > root || arr[indexRightChild][0] <= root) {
            return false;
        }
        inOrder(arr, arr[index][1], arr[index][1]);
    }
    arrOfRoot.push(arr[index][0]);

        if (arr[index][2] > 0 ) {
        inOrder(arr, arr[index][2], arr[index][2]);
    }
    return arrOfRoot;

}

for (let i = 0; i < inputs.length; i++) {
    // console.log('test number ' + i);
    myAlgorithm(inputs[i].input);
    console.log('\n');
}
