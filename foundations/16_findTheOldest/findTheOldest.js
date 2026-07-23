const findTheOldest = function(people) {
    return people.reduce((oldest, current) => {
        if (
            (current.yearOfDeath || new Date().getFullYear()) - current.yearOfBirth >
            (oldest.yearOfDeath || new Date().getFullYear()) - oldest.yearOfBirth
        ) {
            oldest = current;
        }
        return oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
