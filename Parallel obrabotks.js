inputs = [];
inputs.push({ input: [ '3 3', '1 2 1' ],
  output: ['0 0', '1 0', '2 0']});
inputs.push({ input: [ '2 5', '1 2 3 4 5' ],
   output: ['0 0', '1 0', '0 1 ', '1 2', '0 4']});
inputs.push({ input: [ '4 20', '1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1' ],
    output: ['0 0', '1 0', '2 0', '3 0', '0 1', '1 1', '2 1', '3 1', '0 2', '1 2', '2 2', '3 2', '0 3', '1 3', '2 3', '3 3', '0 4', '1 4', '2 4', '3 4']});
inputs.push({ input: [ '1 12', '2 0 4 3 9 8 4 9 0 4 3 2' ],
    output: ['0 0', '0 2', '0 2', '0 6', '0 9', '0 18', '0 26', '0 30', '0 39', '0 39', '0 43', '0 46']});
inputs.push({ input: [ '16 12', '4 5 2 0 1 0 7 2 6 8 0 0' ],
    output: ['0 0', '1 0', '2 0', '3 0', '4 0', '5 0', '6 0', '7 0', '8 0', '9 0']});
inputs.push({ input: [ '4 10', '3 0 9 2 8 1 9 8 8 4' ],
    output: ['0 0', '1 0', '1 0', '2 0', '3 0', '2 2', '0 3', '2 3', '3 8', '1 9']});
inputs.push({ input: [ '2 15', '0 0 1 0 0 0 2 1 2 3 0 0 0 2 1' ],
    output: ['0 0', '0 0', '0 0', '1 0', '1 0', '1 0', '1 0', '0 1', '0 2', '1 2', '0 4', '0 4', '0 4', '0 4']});

function myAlgorithm(input) {
    const times = input[1].toString().split(' ').map(i => Math.round(i));
    const params = input[0].toString().split(' ').map(i => Math.round(i));
    let n = params[0];
    let m = params[1];
    let heap = [];

    for (let i = 0; i < n; i ++) {
        heap.push({proc: i, time: 0})
    }

    for (let i = 0; i < m; i ++) {
        console.log(heap[0].proc + ' ' + heap[0].time);
        heap[0].time = heap[0].time + times[i];
        if (times[i] = 0) {
            continue
        }
        sortProc( 0, heap, m);
    }

    function sortProc(index, arr, size) {
        if (index > size / 2 - 1) {
            return;
        }
        let min = index;
        let left = index*2 + 1;
        let rigth = index*2 + 2;
        if (arr[left] && (arr[left].time < arr[min].time || arr[left].time == arr[min].time && arr[left].proc < arr[min].proc)) {
            min = left;
        }
        if (arr[rigth] && (arr[rigth].time < arr[min].time || arr[rigth].time == arr[min].time && arr[rigth].proc < arr[min].proc)) {
            min = rigth;
        }

        if ( min == index) {
            return;
        }
        let temp = arr[min];
        arr[min] = arr[index];
        arr[index] = temp;
        sortProc (min, arr, size);
    }
}

for (let i = 0; i < inputs.length; i++) {
    console.log('test number ' + i);
    myAlgorithm(inputs[i].input);
    console.log('\n');
}
