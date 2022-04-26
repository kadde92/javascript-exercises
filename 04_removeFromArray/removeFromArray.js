const removeFromArray = function (array, remove, ...args) {
    if (array.indexOf(remove) !== -1 && args === []) {
        let index = array.indexOf(remove)
        array.splice(index, 1);
        return array;
    } else if (array.indexOf(remove) === -1 && args === []) {
        return array;
    }

    if (array.indexOf(remove) !== -1 && args !== []) {
        let index = array.indexOf(remove)
        array.splice(index, 1);
        for (const argsIndex of args) {
            let toRemove = array.indexOf(argsIndex)
            if (array.indexOf(argsIndex) !== -1) {
                array.splice(toRemove, 1)
            }
        } return array;

    } else if (array.indexOf(remove) === -1 && args !== []) {
        for (const argsIndex of args) {
            let toRemove = array.indexOf(argsIndex)
            if (array.indexOf(argsIndex) !== -1) {
                array.splice(toRemove, 1)
            }
        } return array;
    }
}




// let index = array.indexOf(remove)
//     array.splice(index,1);
//     return array;




// Do not edit below this line
module.exports = removeFromArray;
