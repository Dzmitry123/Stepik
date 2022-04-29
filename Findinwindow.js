inputs = [];
inputs.push({ input: [ 'aba', 'abacaba' ],
output: ['0 3'] });
inputs.push({ input: [ 'Test', 'testTesttesT' ],
output: ['4'] });
inputs.push({ input: [ 'aaaaa', 'baaaaaaa' ],
output: ['1 2 3'] });



function myAlgorithm(input) {
    let p = +input[0]; //Parent
    let text = +input[1]; //Text



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

