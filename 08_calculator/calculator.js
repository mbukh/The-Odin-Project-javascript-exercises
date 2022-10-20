const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((prev, next) => prev + next);
};

const multiply = function (arr) {
  return arr.reduce((prev, next) => prev * next);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function fact(a) {
  if (a === 0) {
    return 1;
  } else {
    return a * fact(a - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
