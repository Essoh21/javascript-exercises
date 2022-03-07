const reverseString = function(textToreversre) {
    let stringLength = textToreversre.length;
    let stringReversed = '';
    if (stringLength == 0) {
        stringReversed = '';
    } else {
        for (let i = 1; i <= stringLength; i++) {
            stringReversed += textToreversre[stringLength - i];

        }
    }
    return stringReversed;

};
// Do not edit below this line
module.exports = reverseString;