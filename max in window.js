inputs = [];
// inputs.push({
//     input: ['8', '2 7 3 1 5 2 6 2', '4'],
//     output: ['7 7 5 6 6']
// });
// inputs.push({input : [ '3', '2 1 5', '1'],
//  output : ['2 1 5'] });
// inputs.push({input : [ '3', '2 3 9', '3' ],
//     output : ['9'] });
// inputs.push({input : [ '15', '73 65 24 14 44 20 65 97 27 6 42 1 6 41 16', '7'],
//     output : ['73 97 97 97 97 97 97 97 42'] });
// inputs.push({input : [ '15', '28 7 64 40 68 86 80 93 4 53 32 56 68 18 59', '12' ],
//     output : ['93 93 93 93'] });
// inputs.push({input : [ '15', '16 79 20 19 43 72 78 33 40 52 70 79 66 43 60', '12' ],
//     output : ['79 79 79 79'] });
// inputs.push({input : [ '15', '34 51 61 90 26 84 2 25 7 8 25 78 21 47 25', '3' ],
//     output : ['61 90 90 90 84 84 25 25 25 78 78 78 47'] });
// inputs.push({input : [ '15', '27 83 29 77 6 3 48 2 16 72 46 38 55 2 58', '5' ],
//     output : ['83 83 77 77 48 72 72 72 72 72 58'] });
inputs.push({ input: ['8', '1 4 5 6 1 1 1 1', '4'],
    output: ['6 6 6 6 1'] });


function myAlgorithm(input) {
    const nums = input[1].toString().split(' ').map(i => +i);

    let n = +input[0];
    let windowLength = +input[2];
    let maxIn = 0;


    const staсkIn = [];
    const staсkOut = [];


// формируем входной стек
    for (let i = 0; i < windowLength; i++) {
        if (nums[i] > maxIn) {
            maxIn = nums[i];
        }
        staсkIn.push({current: nums[i], max: maxIn});
    }
    let i = windowLength - 1;
    do {
        if (staсkOut.length == 0) {
            // Заполнение выходного стэка
            let maxOut = 0;
            do {
                let elem = staсkIn.pop();

                if (elem.current >= maxOut) {
                    maxOut = elem.current;
                }
                staсkOut.push({current: elem.current, max: maxOut});
            } while (staсkIn.length != 0);
        }
        //Вычисление максимумов, очищаем выходной, заполняем входной
        if (staсkIn.length == 0) {
            let maxIn = 0;
            do {
               i++;
                let elem = staсkOut.pop();

                if (elem.max >= maxIn) {
                    console.log(elem.max);
                } else {
                    console.log(maxIn);
                }
                if (nums[i] > maxIn) {
                    maxIn = nums[i];
                }
                staсkIn.push({current: nums[i], max: maxIn});

            } while (staсkOut.length != 0 && i != n);
        }

    } while (i < n);

}

for (let i = 0; i < inputs.length; i++) {
    console.log('test number ' + i);
    myAlgorithm(inputs[i].input);
    console.log('\n');
}
