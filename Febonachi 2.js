process.stdin.on('data', (data) => {
    const n = +data.toString();
    let res = calc(n);
    function calc(index) {
        let arr = [];
        arr[1] = 1;
        arr[2] = 1;
        let el = 0;
        for (let i = 3; i < index + 1; i++) {
            el = arr[i - 1] + arr[i - 2];
            arr.push(el % 10);
        }
        return arr[arr.length-1];
    }
    process.stdout.write(res.toString())
})
