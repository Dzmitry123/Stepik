let tests = [];
tests.push({input: '()({{}}[])\n', output: 'Success'});
tests.push({input: '{[]}()', output: 'Success'});
tests.push({input: '()[]', output: 'Success'});
tests.push({input: '([])', output: 'Success'});
tests.push({input: 'foo(bar)', output: 'Success'});
tests.push({input: '{[}', output: '3'});
tests.push({input: '{', output: '1'});
tests.push({input: '[]([]', output: '3'});
tests.push({input: 'foo(bar[i);', output: '10'});
tests.push({input: '{{{**[][][]', output: '3'});
tests.push({input: '{{{[][][]', output: '3'});


runTests(tests);

//runSpecificTest(tests[7]);


function runTests(tests) {
    for (let i = 0; i < tests.length; i++) {
        let res = isBalanced(tests[i].input);
        if (!res) {
            res = "Success";
        }
        if (res != tests[i].output) {
            console.log(`mistake on ${i + 1} test `);
        }
        console.log(res);
    }
}

function runSpecificTest(test) {
    let res = isBalanced(test.input);
    if (!res) {
        res = "Success";
    }
    if (res != test.output) {
        console.log(`mistake`);
    }
    console.log(res);
}


function isBalanced(str) {
    debugger
    let arr = [];
    let stek = [];
    arr = str.split('');
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] == '(' || arr[i] == '[' || arr[i] == '{') {
            stek.push({
                symbol: arr[i],
                index: i
            });

        } else {
            if (!(arr[i] == ')' || arr[i] == ']' || arr[i] == '}')) {
                continue;
            }
            if (stek.length == 0) {
                return i + 1;
            }
            let top = stek.pop().symbol;

            if (!(arr[i] == ')' && top == '(' ||
                arr[i] == ']' && top == '[' ||
                arr[i] == '}' && top == '{')) {
                return i + 1;
            }
        }
    }
    if (stek.length != 0) {
        return stek.pop().index + 1;
    }
}

