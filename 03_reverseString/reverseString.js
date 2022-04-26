const reverseString = function(word) {
    let reverseString;
    const arr = word.split("")
    arr.reverse()
    let compound = "";
    for (let i = 0; i < arr.length; i++) {
        compound+=arr[i];
        
    } 
    return compound;
};

// Do not edit below this line
module.exports = reverseString;
