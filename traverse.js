inputs = [];

inputs.push({
    input: ['5', '4 1 2', '2 3 4', '5 -1 -1', '1 -1 -1', '3 -1 -1'],
    output: ['1 2 3 4 5', '4 2 1 3 5', '1 3 2 5 4']
});

function myAlgorithm(input) {
    let n = +input[0];
    let tree = [];
    let rootOfTree = 0;
    for (let i = 1; i < n + 1; i++) {
        let root = input[i].toString().split(' ').map(item => +item);
        tree.push(root);
    }
    let result2 = [];
    console.log(inOrderRes(tree, 0, result2));
    result2 = [];
    console.log(preOrderRes(tree, 0, result2));
    result2 = [];
    console.log(postOrderRes(tree, 0, result2));
}

debugger

function inOrderRes(arr, index, result) {
    inOrder(arr, index, result);
    return result.join(' ');
}
function preOrderRes(arr, index, result) {
    preOrder(arr, index, result);
    return result.join(' ');
}
function postOrderRes(arr, index, result) {
    postOrder(arr, index, result);
    return result.join(' ');
}

function inOrder(arr, index, result) {
    if (arr[index][1] > 0) {
        inOrder(arr, arr[index][1], result);
    }
    result.push(arr[index][0]);
    if (arr[index][2] > 0) {
        inOrder(arr, arr[index][2], result);
    }

}

function preOrder(arr, index, result) {
    result.push(arr[index][0]);
    if (arr[index][1] > 0) {
        preOrder(arr, arr[index][1], result);
    }
    if (arr[index][2] > 0) {
        preOrder(arr, arr[index][2], result);
    }
    return result;
}

function postOrder(arr, index, result) {
    if (arr[index][1] > 0) {
        postOrder(arr, arr[index][1], result);
    }
    if (arr[index][2] > 0) {
        postOrder(arr, arr[index][2], result);
    }
    result.push(arr[index][0]);
    return result;
}

for (let i = 0; i < inputs.length; i++) {
    // console.log('test number ' + i);
    myAlgorithm(inputs[i].input);
    console.log('\n');
}
