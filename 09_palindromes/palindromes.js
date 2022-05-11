const palindromes = function (string) {
    let punc = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    const cleanPunc = string
        .replace(punc, '')
        .toLowerCase()
        .replaceAll(' ', '')
    return ([...cleanPunc].reverse().toString() === [...cleanPunc].toString() ? true : false)
};

// ensin muuta sana array -> poista välit ja punctutation, myöskin string array pitää muuntaa toLowerCase() vetailtaessa
//








// Do not edit below this line
module.exports = palindromes;
