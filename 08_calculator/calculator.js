

const add = function(x,y) {
  //Add x and y
  let sum = x + y;
  return sum;
};

const subtract = function(x,y) {
  let sum = x - y;
  return sum;
};

const sum = function(inputArray) {
  let sum = 0;
  for (i=0;i<inputArray.length; i++) {
    sum += inputArray[i];
  }
  return sum;
};

const multiply = function(theArguments) {
  let times = 1;
  for (let i=0; i<theArguments.length; i++) {
    times *= theArguments[i];
  }
  return times;
};

const power = function(x, y) {
  return x ** y;
};

const factorial = function(x) {
  let factorial = 1;
  for (i=x;i>0;i--) {
    factorial = i * factorial;
  };
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
