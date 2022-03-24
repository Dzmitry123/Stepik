var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on('line', function(line){
    const str = line.toString();

    function isBalanced(str) {
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

    let res = isBalanced(str);
    if (!res) {
        res = "Success";
    }
    console.log(res);
})