const removeFromArray = function (arr, ...remElementsArr) {
  let returnArr = [];
  arr.forEach((el) => {
    if (!(remElementsArr.includes(el))) returnArr.push(el);
  });
  return returnArr;
};

// Do not edit below this line
module.exports = removeFromArray;
