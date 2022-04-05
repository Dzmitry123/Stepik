inputs = [];

inputs.push({input: ['3 6', '0 7', '0 0', '2 0', '3 3', '4 0', '5 0'],
output: ['0 7 7 -1 -1 -1'] });
inputs.push({input: ['2 6', '0 2', '0 0', '2 0', '3 0', '4 0', '5 0'],
output: ['0 2 2 3 4 5'] });
inputs.push({input : ['1 5', '999999 1', '1000000 0', '1000000 1', '1000000 0', '1000000 0'],
output : ['999999 1000000 1000000 -1 -1'] });
inputs.push({input : ['4 5', '0 7', '2 7', '4 7', '6 7', '21 7'],
output : ['0 7 14 21 21'] });
inputs.push({input : ['1 5', '0 1', '1 1', '2 1', '3 3', '5 1'],
output : ['0 1 2 3 -1'] });
inputs.push({input : ['2 8', '0 0', '0 0', '0 0', '1 0', '1 0', '1 1', '1 2', '1 3'],
output: ['0 0 0 1 1 1 2 -1'] });
inputs.push({input : ['2 8', '0 0', '0 0', '0 0', '1 1', '1 0', '1 0', '1 2', '1 3'],
output: ['0 0 0 1 2 -1 -1 -1']});
inputs.push({input : ['2 5', '2 9', '4 8', '10 9', '15 2', '19 1'],
output: ['2 11 -1 19 21'] });
inputs.push({input : ['3 8', '1 1', '2 2', '3 3', '4 4', '5 5', '6 6', '7 7','8 8'],
output: ['1 2 4 7 11 -1 16 -1'] });
inputs.push({input : ['5 10', '2 4', '9 21', '125 16', '126 19', '126 29', '126 55', '141 90', '141 0', '999 150', '999 0'],
output: ['2 9 125 141 160 189 244 334 999 1149'] });
inputs.push({input : ['2 3', '0 0', '10 0', '10 0'],
output: ['0 10 10'] });
inputs.push({input : ['1 5', '0 5', '0 1', '5 7', '6 8', '12 3'],
output: ['0 -1 5 -1 12'] });
inputs.push({input : ['3 7', '0 7', '0 0', '2 0', '3 3', '4 0', '5 0', '7 1'],
output: ['0 7 7 -1 -1 -1 7'] });
inputs.push({input : ['3 8', '1 1', '2 2', '3 3', '4 4', '5 5', '6 6', '7 7', '8 8'],
output: ['1 2 4 7 11 -1 16 -1'] });
inputs.push({input : ['2 5', '0 1', '1 1', '2 1', '3 3', '5 1'],
output: ['0 1 2 3 6'] });
inputs.push({input : ['2 6', '0 7', '2 7', '4 7', '6 7', '21 7', '27 1'],
output: ['0 7 -1 -1 21 28'] });

function myAlgorithm(input) {
    const params = input[0].toString().split(' ');
    let size = +params[0];
    let n = +params[1];
    if (n == 0) {
        return;
    }


    let packs = input.filter((item, index) => index > 0).map(item => {
        let pack = item.toString().split(' ');
        return {
            arrival: +pack[0],
            duration: +pack[1]
        };
    })

    const queue = [];

    let endOfProcessing = packs[0].arrival + packs[0].duration;

    queue.push(endOfProcessing);
    console.log(packs[0].arrival);

    for (let i = 1; i < packs.length; i++) {
        //debugger;
        if (packs[i].arrival < endOfProcessing) {
            if (queue.length < size) {
                console.log(queue[queue.length - 1]);
                debugger;
                queue.push(queue[queue.length - 1] + packs[i].duration);
            } else {
                console.log(-1);
            }
        }
        if (packs[i].arrival == endOfProcessing) {
            queue.shift();
            if (queue.length == 0) {
                console.log(packs[i].arrival);
                endOfProcessing = packs[i].arrival + packs[i].duration;
                queue.push(endOfProcessing);
            } else {
                endOfProcessing = queue[queue.length - 1];
                console.log(endOfProcessing);
                queue.push(queue[queue.length - 1] + packs[i].duration);
            }
        }

        if (packs[i].arrival > endOfProcessing) {
            do {
                queue.shift();
            }
            while(queue.length != 0 && queue[0] < packs[i].arrival);


            if (queue.length == 0) {

                console.log(packs[i].arrival);
                endOfProcessing = packs[i].arrival + packs[i].duration;
                queue.push(endOfProcessing);
            } else {
                endOfProcessing = queue[0];
                console.log(endOfProcessing);
                if (queue[queue.length - 1] < packs[i].arrival) {
                    queue.push(packs[i].arrival + packs[i].duration)
                } else {
                    queue.push(queue[queue.length - 1] + packs[i].duration);
                }

            }
        }
    }
}


for (let i = 0; i < inputs.length; i++) {
    console.log('test number ' + i);
    myAlgorithm(inputs[i].input);
    console.log('\n');
}
//myAlgorithm(input);
