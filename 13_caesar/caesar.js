const caesar = function (str, offset) {
  const alphabetLower = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const alphabetCaps = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let strArr = str.split("");
  const newStrArr = strArr.map((el) => {
    const idxLower = alphabetLower.indexOf(el);
    const idxCaps = alphabetCaps.indexOf(el);
    let alphabet;
    let idx;
    if (idxLower === -1 && idxCaps === -1) return el;
    if (idxLower !== -1) {
      alphabet = alphabetLower;
      idx = idxLower;
    }
    if (idxCaps !== -1) {
      alphabet = alphabetCaps;
      idx = idxCaps;
    }
    return alphabet[
      (((idx + offset) % alphabet.length) + alphabet.length) % alphabet.length
    ];
  }, strArr);
  return newStrArr.join("");
};
// caesar("Hello, World!", 5);
// caesar("Mjqqt, Btwqi!", -5);

// Do not edit below this line
module.exports = caesar;
