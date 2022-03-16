process.stdin.on('data', (data) => {
    const n = +data.toString();
    function calc(index) {
        let arr = [];
        arr[0] = 0;
        arr[1] = 1;
        let elem = 0;
        for (let i = 2; i < index + 1; i++) {
            elem = arr[i - 1] + arr[i - 2];
            arr.push(elem);
        }
        return arr[arr.length - 1];
    }
    let a = calc(n);
    process.stdout.write(a.toString());
});

