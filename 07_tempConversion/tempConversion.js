const ftoc = function(degreeF) {
    let degreeC;
    degreeC = Math.round(((degreeF - 32) * (5 / 9)) * 10) / 10;
    return degreeC;

};

const ctof = function(degreeC) {
    let degreeF;
    degreeF = Math.round((degreeC * (9 / 5) + 32) * 10) / 10;
    return degreeF;

};

// Do not edit below this line
module.exports = {
    ftoc,
    ctof
};