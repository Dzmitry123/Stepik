debugger
input = ['3 7', '0 7', '0 0', '2 0', '3 3', '4 0', '5 0', '7 1'];
//input = ['2 5', '9999 1', '1000000 0', '1000000 1', '1000000 0', '1000000 0'];
//input = ['2 6', '0 7', '2 7', '4 7', '6 7', '21 7', '27 1'];
//input = ['2 5', '2 9', '4 8', '10 9', '15 2', '19 1'];
//input = ['2 5', '0 1', '1 1', '2 1', '3 3', '5 1'];
// input = ['2 5', '0 8', '0 8', '0 8', '0 8', '0 8'];
// input = ['2 3', '0 8', '0 8', '8 8'];

function myAlgorithm(input) {
    const params = input[0].toString().split(' ');
    let size = +params[0];
    let n = +params[1];
    if (n == 0) {
        return
    }

    const queue = [];

    let lastInputProcesed = 1;

    let paket = input[1].toString().split(' ');
    console.log(+paket[0]);
    let endOfProcessing = +paket[0] + +paket[1];
    queue.push(endOfProcessing);

    for (let i = lastInputProcesed + 1; i < input.length; i++) {
        paket = input[i].toString().split(' ');
        let arrival = +paket[0];
        let duration = +paket[1];

        if (arrival < endOfProcessing) {
            if(arrival == queue[0]) {
                queue.shift();
                console.log(endOfProcessing);
                continue;
            }
            if (queue.length < size) {
                endOfProcessing = endOfProcessing + duration;
                queue.push(endOfProcessing);
                console.log(queue[0]);
                if(queue.length = size) {

                }
            } else {
                console.log(-1);


            }
        } else {
                //console.log(queue);
            if (arrival > endOfProcessing) {
                console.log(arrival);

                if (arrival > queue[0]) {
                    do {
                        queue.shift();
                    } while(queue.length !== 0);

                if (queue.length < size) {
                    endOfProcessing = arrival + duration;
                    queue.push(endOfProcessing);

                } else {
                    endOfProcessing = endOfProcessing - duration;
                    console.log(-1);
                }
            }
        }
    }
}

res = myAlgorithm(input);

