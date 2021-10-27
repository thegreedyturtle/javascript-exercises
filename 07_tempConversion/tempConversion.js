const ftoc = function(fIn) {
  if (typeof(fIn)=='number') {
    return (Math.round((fIn-32)*50/9)/10);
    } else {
      return "ERROR";
    };
};

const ctof = function(cIn) {
  if (typeof(cIn)=='number') {
    return (Math.round(10*((cIn*9/5)+32))/10);
  } else {
    return "ERROR";
  };
};
console.log(ftoc(32));
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
