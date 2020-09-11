let findTheOldest = function (people) {
    return people.sort(ageSort)[0]
}

const ageSort = (p1, p2) => findAge(p2) - findAge(p1)
const findAge = person => (person.yearOfDeath || new Date().getFullYear()) - person.yearOfBirth

module.exports = findTheOldest
