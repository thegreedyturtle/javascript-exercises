const sumAll = function(n, p) {
    if (typeof(n) !== 'number' || typeof(p) !== 'number') {
        return "ERROR";
    } else if (n < 0 || p < 0) {
        return "ERROR";
    } else {
        let high;
        let low;
        let numberArray = [];
        let sumArray = 0
        if (n > p) {
            high = n; low = p;
            } else {
            low = n; high = p;
        };
        for (i=low; i<=high; i++) {
            numberArray.push(i);
        };
        for (h=0; h<numberArray.length; h++) {
            sumArray += numberArray[h];
        };
        return sumArray;
    };
};

// Do not edit below this line
module.exports = sumAll;
