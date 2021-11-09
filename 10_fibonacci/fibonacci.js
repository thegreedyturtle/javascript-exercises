const fibonacci = function(inMember) {
    member = Number(inMember);
    console.log(inMember + "    " + member)
    if (member>0) {
        //input length (as function argument)
            let fibonnacciNumber = 1;
        //for initial case (number 1)
        if (member>2) {
        //compute number at that length
            let previousNumber = 0;
            let currentNumber = 0;
            for (let i = 0; i<member-1; i++) {
                previousNumber = currentNumber;
                currentNumber = fibonnacciNumber;
                fibonnacciNumber = currentNumber + previousNumber; 
            };
        };
        //output that number
            return fibonnacciNumber;
        } else {
        return "OOPS"
    };
};
fibonacci(1);
// Do not edit below this line
module.exports = fibonacci;