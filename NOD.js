process.stdin.on('data', (data) => {
    const params = data.toString().split(' ');
    let a = +params[0];
    let b = +params[1];
let c = 0;
function calc(a, b) {
    do {
        if (a > b) {
            c = a % b;
            a = c;
            if (c == 0) {
                return b;
            }
        } else {
            c = b % a;
            b = c;
            if (c == 0) {
                return a;
            }
        }
    } while (c != 0);
}
let res = calc(a, b);
    process.stdout.write(res.toString())
})