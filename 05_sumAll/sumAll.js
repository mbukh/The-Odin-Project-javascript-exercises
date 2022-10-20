const sumAll = function (num1, num2) {
  const checkForErr = isNaN(num1) || isNaN(num2) || num1 < 0 || num2 < 0;
  if (checkForErr) return "ERROR";

  const rng = [num1, num2].sort((a, b) => a - b);
  const rngArr = [];
  for (let i = rng[0]; i <= rng[1]; i += 1) rngArr.push(i);
  let sum = rngArr.reduce((prev, curr) => prev + curr, 0);
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
