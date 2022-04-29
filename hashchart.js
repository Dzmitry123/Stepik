inputs = [];
inputs.push({ input: ['5', '14', 'add world', 'add HellO', 'check 4', 'find World', 'find world', 'del world', 'check 4',
        'del HellO','add add', 'add luck', 'add GooD', 'del GooD', 'check 2', 'del good'],
output: ['HellO world', 'no', 'yes', 'HellO', 'GooD luck'] });
// inputs.push({input : [ '4', '8', 'add test', 'add test', 'find test', 'del test', 'find test', 'find Test', 'add Test',
//         'find Test' ],
// output : [ 'yes', 'no', 'no', 'yes' ] });
// inputs.push({input : [ '3', '12', 'check 0', 'find help', 'add help', 'add del', 'add add', 'find add', 'find del',
//         'del del', 'find del', 'check 0', 'check 1', 'check 2' ],
// output : [ ' ', 'no', 'yes', 'yes', 'no', ' ', 'add help', ' ' ] });
// inputs.push({input : [ '3', '4', 'add a', 'find b', 'add a', 'check 1' ],
// output : [ 'no', 'a' ] });


function add(word, chart, m) {
    let index = findIndex(word, m);
    if (chart[index]) {
        if (!chart[index].includes(word)) {
            chart[index] = word + ' ' + chart[index];
        }
    } else {
        chart[index] = word;
    }
}

function check(index,chart) {
    if (chart[index]) {
        console.log(chart[index]);
    } else {
        console.log(' ');
    }
}

function find(word, chart, m) {
    let index = findIndex(word, m);
    if (chart[index]) {
        if (chart[index].includes(word)) {
            console.log('yes');
        } else {
            console.log('no');
        }
    } else {
        console.log('no');
    }
}

function del(word, chart, m) {
    let index = findIndex(word, m);
    if(chart[index]) {

        let arrStr = chart[index].toString().split(' ');

        chart[index] = arrStr.filter(function (value) {
            return value != word;
        }).join(' ');
    }
}

function myAlgorithm(input) {
    let m = +input[0]; //size chart
    let n = +input[1]; //quantity commands
    let hashChart = {}; // chart

    for (let i = 1; i < n + 2; i++) {
        let string = input[i].toString().split(' ');
        switch (string[0]) {
            case 'add':
                add(string[1], hashChart, m);
                break;
            case 'check':
                check(string[1], hashChart);
                break;
            case 'find':
                find(string[1], hashChart, m);
                break;
            case 'del':
                del(string[1], hashChart, m)
                break;
        }
    }
    console.log(hashChart);
}

function findIndex(string, m) {
    let p = 1000000007n;
    let x = 263n;

    let arr = string.toString().split('');

    let i = 0n;
    let index = 0n;
    while (i < arr.length) {
        let code = BigInt(arr[i].charCodeAt(0));
        //index = index + ((code * (x ** i)));
        index = index + code * ((x ** i) % p);
        index = (index % p + p) % p;
        i++;

        if (i == arr.length) {
            return  index % BigInt(m);
        }
    }
}

for (let i = 0; i < inputs.length; i++) {
    console.log('test number ' + i);
    myAlgorithm(inputs[i].input);
    console.log('\n');
}

