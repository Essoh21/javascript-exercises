const sumAll = function(firstNumber, secondNumber) {
    let sumToreturn = 0;
    if ((typeof(firstNumber) != 'number') || (typeof(secondNumber) != 'number') || (firstNumber < 0) || (secondNumber < 0)) {
        sumToreturn = 'ERROR';
    } else {
        let maxNumber = Math.max(firstNumber, secondNumber);
        let minNumber = Math.min(firstNumber, secondNumber);
        let numberOfIterations = maxNumber - minNumber;
        let numberIterated = minNumber;
        sumToreturn = minNumber;
        for (let i = 0; i < numberOfIterations; i++) {
            numberIterated += 1;
            sumToreturn += numberIterated;
        }
    }
    return sumToreturn;
};
// Do not edit below this line
module.exports = sumAll;