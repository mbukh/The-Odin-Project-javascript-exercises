const findTheOldest = function (arr) {
  const oldest = arr.reduce((prev, curr) => {
    if (!Object.prototype.hasOwnProperty.call(prev, "yearOfDeath"))
      prev.yearOfDeath = new Date().getFullYear();
    if (!Object.prototype.hasOwnProperty.call(curr, "yearOfDeath"))
      curr.yearOfDeath = new Date().getFullYear();
    if (
      curr.yearOfDeath - curr.yearOfBirth >
      prev.yearOfDeath - prev.yearOfBirth
    ) {
    //   console.log(curr);
      return curr;
    } else {
    //   console.log(prev);
      return prev;
    }
  });
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
