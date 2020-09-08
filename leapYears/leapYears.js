const leapYears = function(year) {
    let parsedYear = parseInt(year)
    if (parsedYear % 400 === 0) {
        return true
    } else {
        if (parsedYear % 100 === 0) {
            return false
        } else {
            return (parsedYear % 4 === 0)
        }
    }
}

module.exports = leapYears
