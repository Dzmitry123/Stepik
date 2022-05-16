inputs = [];
// inputs.push({input: [ '10', '0 7 2', '10 -1 -1', '20 -1 6', '30 8 9', '40 3 -1', '50 -1 -1', '60 1 -1', '70 5 4',
//         '80 -1 -1', '90 -1 -1' ],
// output: ['50 70 80 30 90 40 0 20 10 60', '0 70 50 40 30 80 90 20 60 10', '50 80 90 30 40 70 10 60 20 0'] });

inputs.push({
    input: ['5', '4 1 2', '2 3 4', '5 -1 -1', '1 -1 -1', '3 -1 -1'],
    output: ['1 2 3 4 5', '4 2 1 3 5', '1 3 2 5 4']
});

function myAlgorithm(input) {
    let n = +input[0];
    let tree = [];
    let rootOfTree = 0;
    for (let i = 1; i < n+1; i++) {
        let root = input[i].toString().split(' ').map(item => +item);
        tree.push({key: root[0], left: root[1], right: root[2]});
    }

    for (let i = tree.length - 1; i > -1; i--) {
        if(tree[i].left > 0 && tree[i].right > 0) {
            tree[i].left = tree[tree[i].left];
            tree[i].right = tree[tree[i].right];

        }
        if(tree[i].left > 0 && tree[i].right < 0) {
            tree[i].left = tree[tree[i].left];
        }
        if(tree[i].right > 0 && tree[i].left < 0) {
            tree[i].right = tree[tree[i].right];
        }

    }
   // tree.splice(1, tree.length - 1);

    console.log(inOrder(tree[0]));
    // console.log(preOrder(tree[0]));
    // console.log(postOrder(tree[0]));
}
debugger
//let result = [];
function inOrder(node) {
    if(node.left) {
        inOrder(node.left);
        console.log(node.key);
        inOrder(node.right);
    }
   // return result.join(' ');
}
// let result2 = [];
// function preOrder(node) {
//     if(node.left) {
//         result2.push (node.key);
//         preOrder(node.left);
//         preOrder(node.right);
//     }
//     return result2;
// }
// let result3 = [];
// function postOrder(node) {
//     if(node.left) {
//         postOrder(node.left);
//         postOrder(node.right);
//         result3.push (node.key);
//     }
//     return result3;
// }

for (let i = 0; i < inputs.length; i++) {
    console.log('test number ' + i);
    myAlgorithm(inputs[i].input);
    console.log('\n');
}
