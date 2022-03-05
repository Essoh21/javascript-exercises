const repeatString = function(stringTomultiply, numberOfTimes) {
    let resultToReturn = '';
    if (numberOfTimes < 0) {
        resultToReturn = 'ERROR';
    } else if (numberOfTimes == 0) {
        resultToReturn = '';
    } else {

        for (let i = 1; i <= numberOfTimes; i++) {
            resultToReturn += `${stringTomultiply}`;

        }
    }
    return resultToReturn;

};
//console.log(repeatString('me', 3));
// Do not edit below this line
module.exports = repeatString;