const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(array) {
	let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

const multiply = function(array) {
  let multi = 1;
  for (let i = 0; i < array.length; i++) {
    multi *= array[i];
  }
  return multi;
};

const power = function(num, exponent) {
  let pow = 1;
	for (let i = 0; i < exponent; i++) {
    pow *= num;
  }
  return pow;
};

const factorial = function(number) {
  let result = 1;
  let sum = 0;
  if (number === 0 || number === 1) return 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
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
