inputs = [];
inputs.push({ input: [ '4 6 0', '1 2', '1 3', '1 4', '2 3', '2 4', '3 4'],
  output: ['1']});
inputs.push({ input: [ '4 6 1', '1 2', '1 3', '1 4', '2 3', '2 4', '3 4', '1 2'],
    output: ['0']});
inputs.push({ input: [ '4 0 6', '1 2', '1 3', '1 4', '2 3', '2 4', '3 4'],
    output: ['1']});
inputs.push({ input: [ '15 5 3', '6 9', '2 3', '5 9', '4 8', '1 12', '15 9', '3 8', '6 8'],
    output: ['1']});

debugger
function myAlgorithm(input) {
    const params = input[0].toString().split(' ').map(i => +i);
    let n = params[0]; // количество переменных
    let e = params[1]; // количество равенств
    let d = params[2]; // количество неравенств
    let resultOfProces = 1;

    let arrParents = [];
    // формирую дерево родителей
    for (let i = 0; i < n; i++) {
        arrParents.push({parent: i, level: 0});
    }
   // Построение множеств
    for (let i = 1; i < e + 1; i++) {
        const operations = input[i].toString().split(' ').map(i => +i).map(i => --i);
        // source and destination of operation
        let source = operations[1];
        let destination = operations[0];

        // parent sources
        let linkParentDestination = findParents(arrParents, destination);
        let linkParentSource = findParents(arrParents, source);
        if (linkParentDestination == linkParentSource) {
            continue;
        }
        // change parent in source parent
        if( arrParents[linkParentDestination].level > arrParents[linkParentSource].level) {
            arrParents[linkParentSource].parent = arrParents[linkParentDestination].parent;
        }
        else {
            arrParents[linkParentDestination].parent = arrParents[linkParentSource].parent;
            if( arrParents[linkParentDestination].level == arrParents[linkParentSource].level) {
                arrParents[linkParentSource].level++;
            }
        }
    }
    // Проверка условий неравенств

    for (let i = e + 1; i < e + d + 1; i++) {
        const operation = input[i].toString().split(' ').map(i => +i).map(i => --i);
        // source and destination of operation
        let source = operation[1];
        let destination = operation[0];

        let linkParentDestination = findParents(arrParents, destination);
        let linkParentSource = findParents(arrParents, source);
        if (linkParentDestination == linkParentSource) {
            resultOfProces = 0;
            break;
        } else {
            resultOfProces = 1;
        }
    }
console.log(resultOfProces);
}
// find parent source and destination
function findParents(arr, indexEl) {
    let indexParent = arr[indexEl].parent;
    if(indexParent == indexEl) {
        return indexParent;
    }
    return findParents(arr, indexParent);
}



for (let i = 0; i < inputs.length; i++) {
    console.log('test number ' + (i+1));
    myAlgorithm(inputs[i].input);
    console.log('\n');
}
