const palindromes = function (palindrome) {
    let stripped = palindrome.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "").toLowerCase();
    if (stripped == stripped.split("").reverse().join("")) {
        return true;
    } else {
        return false;
    }
};


console.log(palindromes('A car, a man, a maraca.'));
// Do not edit below this line
module.exports = palindromes;