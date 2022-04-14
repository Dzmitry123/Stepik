inputs = [];
// inputs.push({ input: ['5', '5 4 3 2 1'],
//     output: ['3', '1 4', '0 1', '1 3']});
inputs.push({
    input: ['6', '7 6 5 4 3 2'],
    output: ['4', '2 5', '1 4', '0 2', '2 5']
});
// inputs.push({ input: [ '6', '0 1 2 3 4 5' ],
//     output: ['0']});
// inputs.push({ input: [ '6', '1 2 3 4 5 6' ],
//     output: ['0']});
// inputs.push({ input: [ '15', '7 50 12 4 50 2 0 0 0 0 65 50 45 65 12' ],
//     output: ['3', '4 9', '2 6', '1 4']});
// inputs.push({ input: [ '20', '19 14 12 3 20 2 5 8 4 11 13 9 16 15 1 7 6 17 10 18' ],
//     output: ['12', '7 16', '6 14', '4 9', '2 6', '1 3', '0 2', '9 19', '6 14', '3 8', '2 5', '8 18', '5 11']});
// inputs.push({ input: [ '20', '9 14' '2 12' '6 19' '1 7' '5 13' '8 4' '3 11' '17 16' '18 15' '10 20' ],
//     output: ['8', '5 12' '3 8' '2 6' '1 3' '0 2' '8 18' '3 7' '2 6']});
// inputs.push({ input: [ '20', '18 10 13 1 7 9 5 2 15 8 3 4 11 16 20 19 17 14 6 12' ],
//     output: ['11', '8 18' '5 11' '4 10' '2 5' '1 3' '0 1' '5 11' '3 7' '1 3' '3 8' '8 17']});
// inputs.push({ input: [ '20', '4 12 7 14 19 5 11 20 9 10 16 15 2 1 6 3 8 17 18 13' ],
//     output: ['13', '7 15' '6 13' '5 12' '4 9' '3 7' '2 6' '1 3' '0 2' '9 19' '7 16' '6 14' '3 7' '2 5']});
let results = [];

function myAlgorithm(input) {

    const nums = input[1].toString().split(' ').map(i => Math.round(i));
    let n = +input[0];

    for (let i = Math.floor(n / 2 - 1); i > -1; i--) {
        debugger
        sortMin(i, nums, n);
    }
    console.log(results.length);
    
    for (let i = 0; i <= results.length - 1; i++) {
        console.log(results[i].toString().replace(/,/, ' '));
    }
}

function sortMin(index, arr, size) {

    if (index > size / 2 - 1) {
        return;
    }
    let min = index;
    let left = index * 2 + 1;
    let rigth = index * 2 + 2;
    if (arr[left] < arr[min]) {
        min = left;
    }
    if (arr[rigth] < arr[min]) {
        min = rigth;
    }
    if (min == index) {
        return;
    }

    let temp = arr[min];
    arr[min] = arr[index];
    arr[index] = temp;
    results.push([index, min]);
    sortMin(min, arr, size);

}

for (let i = 0; i < inputs.length; i++) {
    console.log('test number ' + i);
    myAlgorithm(inputs[i].input);
    console.log('\n');
}
