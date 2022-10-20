const ftoc = function (fahr) {
  const res = ((fahr - 32) * 5) / 9;
  return Math.round((res + Number.EPSILON) * 10) / 10;
};

const ctof = function (celsius) {
  const res = (celsius * 9) / 5 + 32;
  return Math.round((res + Number.EPSILON) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
