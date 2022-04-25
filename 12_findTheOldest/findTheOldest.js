const findTheOldest = function(arrayOfObjects) {
    const theOldest = arrayOfObjects.reduce((previousObject, currentObject) => {
        let year = new Date();
        if (!('yearOfDeath' in currentObject)) {

            currentObject['yearOfDeath'] = year.getFullYear();
        }
        if (!('yearOfDeath' in previousObject)) {
            previousObject['yearOfDeath'] = year.getFullYear();
        }
        if ((currentObject.yearOfDeath - currentObject.yearOfBirth) > (previousObject.yearOfDeath - previousObject.yearOfBirth)) {
            return currentObject;
        } else {
            return previousObject;
        }
    })
    return theOldest;
};

// Do not edit below this line
module.exports = findTheOldest;