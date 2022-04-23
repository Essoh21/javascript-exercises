const fibonacci = function(number) {
    let numbersArray = [];
    if (!(typeof(number * 1) === 'number') || (number * 1) < 0) {
        return 'OOPS';
    } else {
        if ((number * 1) === 1 || (number * 1) === 2) {
            return 1;
        } else {
            numbersArray[0] = 1;
            numbersArray[1] = 1;
            for (let i = 2; i < number; i += 1) {
                numbersArray[i] = numbersArray[i - 2] + numbersArray[i - 1];
            }
            return numbersArray[number - 1];
        }

    }

};

// Do not edit below this line
module.exports = fibonacci;