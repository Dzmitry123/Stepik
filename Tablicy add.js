inputs = [];
inputs.push({ input: [ '5 5', '1 1 1 1 1', '3 5', '2 4', '1 4', '5 4', '5 3' ],
  output: ['2', '2', '3', '5', '5']});
inputs.push({ input: ['6 4', '10 0 5 0 3 3', '6 6', '6 5', '5 4', '4 3'],
    output: ['10', '10', '10', '11'] });
inputs.push({ input: ['4 3', '6 5 3 7', '1 4', '2 1', '3 2'],
    output: ['13', '18', '21'] });
inputs.push({ input: ['6 6', '2 11 5 1 7 3', '6 6', '1 2', '6 5', '5 4', '4 3', '3 1'],
    output: ['11', '13', '13', '13', '16', '29'] });
inputs.push({ input: ['3 3', '1 1 1', '2 1', '3 2', '1 3'],
    output: ['2', '3', '3'] });
inputs.push({ input: [ '6 4', '2 11 5 0 7 3', '6 6', '6 5', '5 4', '4 3' ],
    output: ['11', '11', '11', '15']});
inputs.push({
    input: ['10 6', '1 1 1 1 1 1 1 1 1 1', '4 9', '9 5', '3 4', '4 7', '1 10', '8 9'],
    output: ['2', '3', '4', '5', '5', '6']
});


function myAlgorithm(input) {
    const params = input[0].toString().split(' ').map(i => +i);
    let n = params[0]; // количество таблиц
    let m = params[1]; // количество операций с таблицами
    const tables = input[1].toString().split(' ').map(i => +i);//количество строк в каждой таблице
    let maxRank = 0;
    let arrParents = [];
    // формирую дерево родителей
    for (let i = 0; i < n; i++) {
        arrParents.push({parent: i, rank: tables[i], level: 0});
        if (tables[i] > maxRank) {
            maxRank = tables[i];
        }
    }

// перебираю слияния таблиц, и объединяю
    for (let i = 2; i < m + 2; i++) {
        const operations = input[i].toString().split(' ').map(i => +i).map(i => --i);
        // source and destination of operation
        let source = operations[1];
        let destination = operations[0];

        // parent sources
        let linkParentDestination = findParents(arrParents, destination);
        let linkParentSource = findParents(arrParents, source);
        if (linkParentDestination == linkParentSource) {
            console.log(maxRank);
            continue;
        }
        // change rank of parent sources
        if( arrParents[linkParentDestination].level > arrParents[linkParentSource].level) {
            arrParents[linkParentDestination].rank = arrParents[linkParentDestination].rank + arrParents[linkParentSource].rank;
            arrParents[linkParentSource].rank = 0;
            // change parent in source parent
            arrParents[linkParentSource].parent = arrParents[linkParentDestination].parent;
            // set max Rank
            if (arrParents[linkParentDestination].rank > maxRank) {
                maxRank = arrParents[linkParentDestination].rank;
            }
        }
        else {
            arrParents[linkParentSource].rank = arrParents[linkParentSource].rank + arrParents[linkParentDestination].rank;
            arrParents[linkParentDestination].rank = 0;
            // change parent in source parent
            arrParents[linkParentDestination].parent = arrParents[linkParentSource].parent;
            // set max Rank
            if (arrParents[linkParentSource].rank > maxRank) {
                maxRank = arrParents[linkParentSource].rank;
            }
            if( arrParents[linkParentDestination].level == arrParents[linkParentSource].level) {
                arrParents[linkParentSource].level++;
            }
        }

        console.log(maxRank);
    }

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
    console.log('test number ' + i);
    myAlgorithm(inputs[i].input);
    console.log('\n');
}
