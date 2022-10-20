function pigLatin(str) {
  const translateWord = (w) => {
    const vowels = /^[aeiou]/g;
    const vowelClusters = /^(xr|yt)([a-z]+)/;
    const consonantClusters = /^(ch|thr|th|sch|qu|q|squ|rh)([a-z]+)/;
    const consonants = /^([bcdfghjklmnprstvwxyz]+)([a-z]+)/;
    if (vowels.test(w[0])) {
      return `${w}ay`;
    } else if (vowelClusters.test(w)) {
      return w.replace(vowelClusters, `$1$2ay`);
    } else if (consonantClusters.test(w)) {
      return w.replace(consonantClusters, `$2$1ay`);
    } else {
      return w.replace(consonants, `$2$1ay`);
    }
  };
  return str
    .split(" ")
    .map((w) => translateWord(w))
    .join(" ");
}

console.log(pigLatin("the quick brown fox"));

// Do not edit below this line
module.exports = pigLatin;
