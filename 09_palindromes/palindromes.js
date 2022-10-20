const palindromes = function (inputString) {
  const str = inputString.replace(/[^a-zA-Z]+/g, "").toLowerCase();
  const len = str.length;
  const mid = Math.floor(len / 2);

  for (let i = 0; i < mid; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
