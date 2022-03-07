const removeFromArray = function() {
    let arrayToreturn = [];
    let arrayFromWichToRemove = arguments[0];
    let argumentsToTestRemoveFromArray = [];
    for (let i = 1; i < arguments.length; i++) {
        argumentsToTestRemoveFromArray.push(arguments[i]);
    }
    for (item of arrayFromWichToRemove) {
        let testResult = false;
        for (element of argumentsToTestRemoveFromArray) {

            if (item === element) {
                testResult = true

            }
        }
        if (!testResult) {
            arrayToreturn.push(item);
        }

    }
    return arrayToreturn;
};

// Do not edit below this line
module.exports = removeFromArray;