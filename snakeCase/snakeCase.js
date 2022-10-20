const snakeCase = function (str) {
  return str
//   add spaces if fully matches camelCase
    .replace(/\b([a-z]+[A-Z0-9]+[\w]+)/g, (x) => x.replace(/[A-Z]/g, (y) => ` ${y.toLowerCase()}`))
// lowercase
    .replace(/([A-Z]+)/g, (x) => x.toLowerCase())
// remove non letters/numbers
    .replace(/[^a-z0-9]/g, " ")
// trim string
    .trim()
// clean spaces
    .replace(/[\s]+/g, "_");
};

// Do not edit below this line
module.exports = snakeCase;
