const palindromes = function(stringToTest) {
    const punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
    let world = stringToTest.split(' ').join();
    let letters = world.split('');
    let filteredLetters = letters.filter((item) => punctuation.indexOf(item) === -1).join();

    let lettersReversed = '';
    let lettersLength = filteredLetters.length;
    for (let i = 0; i < lettersLength; i++) {
        lettersReversed += filteredLetters[lettersLength - 1 - i];
    }
    if (lettersReversed.toUpperCase() === filteredLetters.toUpperCase()) {
        return true;
    } else { return false; }

};
//palindromes('racecar');

// Do not edit below this line
module.exports = palindromes;