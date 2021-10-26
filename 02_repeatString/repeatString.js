const repeatString = function(string, num) {
    let stringRepeated = "";
    if (num>=0) {
        for (let i=0; i < num; i++) {
        stringRepeated += string;
        };
        return stringRepeated;
    }
    else {return "ERROR";};
};

repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;
