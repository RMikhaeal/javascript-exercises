const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  return array.reduce((total, value) => total + value, 0);
};

const multiply = function(array) {
	return array.reduce((total, value) => total * value);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	let sum = 1;
  for (let i = a; i > 0; i--) {
    sum *= i;
  }
  return sum;
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
