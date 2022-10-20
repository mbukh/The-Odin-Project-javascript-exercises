const fibonacci = function (num) {
  number = parseInt(num);
  if (number < 0) return "OOPS";

  // let fib = [0, 1]; // Initialize array!
  // for (let i = 2; i <= number; i++) {
  //   // Next fibonacci number = previous + one before previous
  //   // Translated to JavaScript:
  //   fib[i] = fib[i - 2] + fib[i - 1];
  // }
  // return fib.pop();

  return Math.round(
    (Math.pow((1 + Math.sqrt(5)) / 2, num) -
      Math.pow((1 - Math.sqrt(5)) / 2, num)) /
      Math.sqrt(5)
  );
};

// Do not edit below this line
module.exports = fibonacci;
