
let str = '9 7 5 5 2 9 9 9 2 -1 8 10';
let n = 12;
let arr = str.toString().split(' ');
let root = 0;
console.log(arr);

for (let i = 0; i < n; i++) {
    if (arr[i] < 0) {
        root = i;
    }
}

let turn = [];
turn.push({
    value: root, height: 1
});

function getMaxHeight(turn) {
    let maxHeight = 0;

    do {
        let element = turn.shift();
        for (let i = 0; i < n; i++) {
            if (arr[i] == element.value) {
                let obj = {
                    value: i, height: (element.height + 1)
                };
                turn.push(obj);
                console.log(turn);
            }
        }
        if (turn.length == 0) {
            return element.height
        }

    } while (turn.length != 0)
}

let maxHeigth = getMaxHeight(turn);
console.log(maxHeigth);
