process.stdin.on('data', (data) => {
    const str = data.toString();

    function isBalanced(str) {
        let arr = [];
        let stek = [];
        let index = 1;
        arr = str.split('');
        for (let i = 0; i < arr.length; i++) {

            if (arr[i] == '(' || arr[i] == '[' || arr[i] == '{') {
                stek.push(arr[i]);
                index = i + 1;

            } else {
                if (!(arr[i] == ')' || arr[i] == ']' || arr[i] == '}')) {
                    continue;
                }
                if (stek.length == 0) {
                    return i + 1;
                }
                let top = stek.pop();

                if (!(arr[i] == ')' && top == '(' ||
                    arr[i] == ']' && top == '[' ||
                    arr[i] == '}' && top == '{')) {
                    return i + 1;
                }
            }
        }
        if (stek.length != 0) {
            return index;
        }
    }

    let res = isBalanced(str);
    if (!res) {
        res = "Success";
    }
    process.stdout.write(res.toString())
})