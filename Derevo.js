process.stdin.on('data', (data) => {
    const params = data.toString().split(' ');
    let n = +params[0];
    let str = +params[1];

    let arr = [];
    let mainNode = {
        parent: null,
        children: [],
        value: 0
    }

    arr = str.split('');
    for (let i = 0; i < n; i++) {
        if (arr[i] < 0) {
            mainNode.value = i;
        }
    }

    function addNodes(parentNode, arrOfNumbers) {
        for (let i = 0; i < n; i++) {
            if (arr[i] == parentNode.value) {
                let node = {
                    parent: parentNode,
                    children: [],
                    value: i
                };
                addNodes(node, arrOfNumbers);
                parentNode.children.push(node);
            }
        }
    }

    function findHigth(parentNode, heigth) {
        for (let i = 0; i < parentNode.children.length; i++) {

            findHigth(parentNode.children[i], heigth + 1)

        }
        if (heigth > maxHeigth) {
            maxHeigth = heigth;
        }
    }

    let maxHeigth = 0;
    addNodes(mainNode, arr);
    let res = findHigth(mainNode, 0);
    console.log(res);
    process.stdout.write(res.toString())
})
