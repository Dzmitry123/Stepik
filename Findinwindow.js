inputs = [];
// inputs.push({ input: ['aba', 'abacaba'],
//     output: ['0 4'] });
// inputs.push({ input: [ 'Test', 'testTesttesT' ],
// output: ['4'] });
// inputs.push({ input: [ 'aaaaa', 'baaaaaaa' ],
// output: ['1 2 3'] });
// inputs.push({ input: ['world', 'worldworld'],
//     output: ['0 5'] });
inputs.push({ input: ['adadadadadadadadadada', 'aaaaewgsgsdgdfhsdfhsfhsdraaaadadadadadadadadadadadadadadadadadadadadadadadadadadada'],
    output: ['0 5'] });


function myAlgorithm(input) {
    let parent = input[0].toString().split(''); //Parent
    findXI(parent.length);
    let hashParent = findHash(parent, 0, parent.length, arrXI);
    let arrOfText = input[1].toString().split(''); // array of text
   //console.log(arrOfText);
    let i = 0;
    do {
        let hashWindow = findHash(arrOfText, i, parent.length, arrXI);
        // console.log(hashWindow);
        if(hashWindow == hashParent) {
            console.log(i);
        }
        i++;
        } while (i < arrOfText.length - parent.length + 1)
}
let arrXI = [];
function findXI(size) {
    let p = 1000000007n;
    let x = 263n;
    let i = 0n;
    do{
        arrXI.push((x ** i) % p);
        i++;
    } while (i < size);
    return;
}


function findHash(arr, index, sizeOfWindow, arrXI) {
    let p = 1000000007n;
    let endOfWindow = index + sizeOfWindow;
    let i = 0n;
    let hashNum = 0n;
    while (index < endOfWindow) {
        let code = BigInt(arr[index].charCodeAt(0));
        hashNum = hashNum % p + (code * (arrXI[i]))% p;
        hashNum = (hashNum % p + p) % p;
        i++;
        index++;
    }
    return hashNum;
}

for (let i = 0; i < inputs.length; i++) {
    console.log('test number ' + i);
    myAlgorithm(inputs[i].input);
    console.log('\n');
}

