inputs = [];
inputs.push({input : [ '5', 'push 1', 'push 2', 'max', 'pop', 'max'],
output : ['2 1'] });
inputs.push({input : [ '5', 'push 2', 'push 1', 'max', 'pop', 'max'],
output : ['2 2'] });
inputs.push({input : [ '10', 'push 2', 'push 3', 'push 9', 'push 7', 'push 2', 'max', 'max', 'max', 'pop', 'max' ],
output : ['9 9 9 9'] });

function myAlgorithm(input) {
    const params = input[0].toString().split(' ');
    let n = +params[0];
    let values = input.filter((item, index) => index > 0).map(item => {
        let pack = item.toString().split(' ');
        return {
            do: pack[0],
            value: +pack[1]
        };
    })

    if (n == 0) {
        console.log(0);
    }
    const stek = [];
    stek[0] = 0;

    for (let i = 0; i < values.length; i++) {
        if (values[i].do === 'push') {
            if (+values[i].value >= stek[stek.length-1]) {

                stek.push(+values[i].value);
            } else {
                stek.push(stek[stek.length-1]);
            }
        }

        if (values[i].do == 'pop') {
            if (stek.length == 0) {
                console.log('0');
            } else {
            stek.pop(stek[stek.length-1]);
            }
        }
        if (values[i].do == 'max') {
            console.log(stek[stek.length-1]);
        }
    }

}
for (let i = 0; i < inputs.length; i++) {
    console.log('test number ' + i);
    myAlgorithm(inputs[i].input);
    console.log('\n');
}

