const add = function() {
    let length = arguments.length;
    let argumentsSum = 0;
    for (let i = 0; i < length; i++) {
        argumentsSum += arguments[i];
    }
    return argumentsSum;
};

const subtract = function() {
    return arguments[0] - arguments[1];
};

const sum = function() {
    let elementsSum = 0;
    let arrayIputed = arguments[0]
    for (let i = 0; i < arrayIputed.length; i++) {
        elementsSum += arrayIputed[i];
    }
    return elementsSum;
};

const multiply = function() {
    let arrayInputed = arguments[0];
    let elementsMultiplicated = 1;
    for (let i = 0; i < arrayInputed.length; i++) {
        elementsMultiplicated *= arrayInputed[i];
    }
    return elementsMultiplicated;
};

const power = function() {
    let basisNumber = arguments[0];
    let powerNumber = arguments[1];
    return basisNumber ** powerNumber;

};

const factorial = function(positiveInteger) {
    let factorialOfTheNumber = 1;
    if (positiveInteger === 0 || positiveInteger === 1) {
        factorialOfTheNumber = 1
        return factorialOfTheNumber;
    } else {

        while (positiveInteger > 1) {
            factorialOfTheNumber *= positiveInteger;
            positiveInteger = positiveInteger - 1;

        }
    }
    return factorialOfTheNumber;
};
console.log(multiply([2, 3, 2]));
// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
};