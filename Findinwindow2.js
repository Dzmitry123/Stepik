inputs = [];
inputs.push({
    input: ['aba', 'abacaba'],
    output: ['0 4']
});
// inputs.push({ input: [ 'Test', 'testTesttesT' ],
// output: ['4'] });
// inputs.push({ input: [ 'aaaaa', 'baaaaaaa' ],
// output: ['1 2 3'] });
// inputs.push({ input: ['world', 'worldworld'],
//     output: ['0 5'] });
// inputs.push({ input: ['adadadadadadadadadada', 'aaaaewgsgsdgdfhsdfhsfhsdraaaadadadadadadadadadadadadadadadadadadadadadadadadadadada'],
//     output: ['0 5'] });


function myAlgorithm(input) {
    let parent = input[0].toString().split(''); //Parent
    let hashParent = findHash(parent, 0, parent.length);
    let arrOfText = input[1].toString().split(''); // array of text
    let hashRightWindow = findHash(arrOfText, arrOfText.length - parent.length, parent.length);

    findReHash(arrOfText, arrOfText.length - parent.length - 1, hashRightWindow, parent.length, hashParent);

    if (hashRightWindow == hashParent) {
        console.log(arrOfText.length - parent.length);
    }

}

function findHash(arr, index, sizeOfWindow) {
    let p = 1000000007n;
    let x = 263n;
    let endOfWindow = index + sizeOfWindow;
    let i = 0n;
    let hashNum = 0n;
    while (index < endOfWindow) {
        let code = BigInt(arr[index].charCodeAt(0));
        hashNum = hashNum % p + (code * (x ** i)) % p;
        hashNum = (hashNum % p + p) % p;
        i++;
        index++;
    }
    return hashNum;
}

function findReHash(arr, index, hashOfWindow, sizeOfWindow, hashOfParent) {
    let p = 1000000007n;
    let x = 263n;
    let hashWindow = 0n;
    let arrHash = [];
    let code = (BigInt(BigInt(arr[index + sizeOfWindow].charCodeAt(0)) * x ** BigInt((sizeOfWindow - 1)))) % p;
    hashWindow = ((hashOfWindow - code) * x + BigInt(arr[index + sizeOfWindow].charCodeAt(0))) % p;
    console.log(hashWindow);
    if( hashWindow == hashOfParent) {
        console.log(index);
    }
    arrHash.unshift(hashWindow);
    index --;

    if(index < 0) {
        return;
    }

    findReHash(arr, index, hashWindow, sizeOfWindow);
}


for (let i = 0; i < inputs.length; i++) {
    console.log('test number ' + i);
    myAlgorithm(inputs[i].input);
    console.log('\n');
}

