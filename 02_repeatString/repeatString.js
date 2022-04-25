const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR'
    } else {
        let combo = '';
        for (let i = 0; i < num; i++) {
            combo += string;
        }
        return combo};
};

// Do not edit below this line
module.exports = repeatString;
