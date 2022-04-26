const sumAll = function (numOne, numTwo) {
    if (typeof (numOne, numTwo) !== 'number' || numOne < 0 || numTwo < 0) {
        return 'ERROR'
    } else {
        let total = 0;
        let min = (Math.min(numOne, numTwo))
        let max = (Math.max(numOne, numTwo))
        for (let i = min; i <= max; i++) {
            total += i;
        }
        return total
    }
}


// Do not edit below this line
module.exports = sumAll;
