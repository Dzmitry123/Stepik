let tests = [];
// tests.push({input: '()({{}}[])\n', output: 'Success'});
// tests.push({input: '{[]}()', output: 'Success'});
// tests.push({input: '()[]', output: 'Success'});
// tests.push({input: '([])', output: 'Success'});
// tests.push({input: 'foo(bar)', output: 'Success'});
// tests.push({input: '{[}', output: '3'});
// tests.push({input: '{', output: '1'});
// tests.push({input: '[]([]', output: '3'});
tests.push({input: 'foo(bar[i);', output: '10'});
// tests.push({input: '{{{**[][][]', output: '3'});
// tests.push({input: '{{{[][][]', output: '3'});
debugger
function myAlgorithm(input) {
    let arr;
    if(Array.isArray(input)){
        arr=input;
    }else arr=input.split('');
    const Braket=['(','[','{',')',']','}'];
    let openBraket=['(','[','{'];
    let pairBraket={
        [')']:'(',
        [']']:'[',
        ['}']:'{',
    };
    console.log('1', arr);
    let stack=[];
    let count=0;

    for(let i=0; i<arr.length; i++){
        if(Braket.includes(arr[i])){

            if(openBraket.includes(arr[i])){
                stack.push(arr[i]);
                stack.push(i);
                console.log('1',stack);
            } else{
                if(stack.length===0) return 0 ;
            }

            let top=stack[stack.length-2];

            if(pairBraket[arr[i]]===top){
                stack.pop();
                stack.pop();
                console.log('2',stack);
            }else {
                count=i;
            }

            if(stack.length!==0) return stack[stack.length-1]+1;
            console.log('3',stack);
        }
    }
    return (stack.length===0)? 'Success': count+1;
}
console.log(myAlgorithm('foo(bar[i)'));

for (let i = 0; i < inputs.length; i++) {
    console.log('test number ' + i);
    myAlgorithm(inputs[i].input);
    console.log('\n');
}


