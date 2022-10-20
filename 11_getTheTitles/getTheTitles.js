const getTheTitles = function(args) {
    const arr = [];
    args.forEach(element => {
        arr.push(element.title)
    });
    return arr;
};

// Do not edit below this line
module.exports = getTheTitles;
