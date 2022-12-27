const findTheOldest = function(array) {
    return array.reduce((oldest, thisPerson) => {
        const oldestAge = findAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = findAge(thisPerson.yearOfBirth, thisPerson.yearOfDeath);
        if (oldestAge < currentAge) {
            return thisPerson;
        }
        else {
            return oldest;
        }
    })
};

const findAge = function(birth, death) {
    if(!death) {
        const today = new Date();
        const year = today.getFullYear();
        return year - birth;
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
