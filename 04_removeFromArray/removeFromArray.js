const removeFromArray = function(initialArray, ...theArguments) {
    let removedArray = theArguments;
    console.log(initialArray)
    console.log(theArguments);
    for (let i=0; i<initialArray.length; i++) {
        console.log("initialArray= "+ initialArray[i]);
        for (let h = 0; h < theArguments.length; h++) {
            console.log("i= " + i + " and initialArray= "+ initialArray[i]);
            console.log("h= " + h + " and theArguements= " + theArguments[h]);
            console.log("Does " + theArguments[h] + " = " + initialArray[i] + "?")
            if (theArguments[h] === initialArray[i]) {
                console.log("YES");
                initialArray.splice(i,1);
                i--;
                console.log("And removedArray is " + initialArray);
                
            } else {
                console.log("No");
            };
        };
    };
    return initialArray;
};

console.log(removeFromArray([1,2,2,3,4,5,6,7,8,9], 4, 2, 9));

//console.log(removedArray);
// Do not edit below this line
module.exports = removeFromArray;
