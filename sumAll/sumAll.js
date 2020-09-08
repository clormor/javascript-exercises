const sumAll = function(x, y) {
    if (!isNumber(x) || !isNumber(y)) {
        return 'ERROR'
    }
    let max = parseInt(Math.max(x,y))
    let min = parseInt(Math.min(x,y))
    if (!max || !min || min < 1) {
        return 'ERROR'
    }
    return geometric(max) - geometric(min - 1)
}

const geometric = function(x) {
    return (x * (x+1)) / 2
}

const isNumber = function(x) {
    return typeof x === 'number' && isFinite(x)
}

module.exports = sumAll
