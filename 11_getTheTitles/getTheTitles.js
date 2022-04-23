const getTheTitles = function(arrayOfbooks) {
    let arraOfTitles = [];
    let length = arrayOfbooks.length;
    for (let i = 0; i < length; i += 1) {
        arraOfTitles.push(arrayOfbooks[i].title);
    }
    return arraOfTitles;
};

// Do not edit below this line
module.exports = getTheTitles;