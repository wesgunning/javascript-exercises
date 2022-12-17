const ftoc = function(temp) {
  let n = (temp - 32)/1.8;
  if (Number.isInteger(n)) {
    let newTemp = n;
    return newTemp;
  }
  else {
    let newTemp = n.toFixed(1);
    return parseFloat(newTemp);
  } 
};

const ctof = function(temp) {
  let n = (temp * 1.8) + 32;
  if (Number.isInteger(n)) {
    let newTemp = n;
    return newTemp;
  }
  else {
    let newTemp = n.toFixed(1);
    return parseFloat(newTemp);
  } 
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
