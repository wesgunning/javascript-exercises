const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  let total = 0;
	for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
};

const multiply = function(array) {
  let total = array[0];
	for (let i = 1; i < array.length; i++) {
    total *= array[i];
  }
  return total;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(num) {
  if (num == 0) {
    return num = 1;
  }
  else{
    let total = num;
    while (num > 1) {
      total *= (num - 1);
      num--;
    }
    return total;
  }
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
