const reverseString = function(str) {
    let newString = "";
    for ( i = str.length - 1 ; i>=0; i--) {
        newString += str[i];
    }
    return newString
};

console.log(reverseString("Hello"));

// Do not edit below this line
module.exports = reverseString;
