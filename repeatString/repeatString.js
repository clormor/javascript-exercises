const repeatString = function(input, times) {
    let result = ''
    let i = +times
    if (times < 0) return 'ERROR'
    for (; i > 0; i--) {
        result += input
    }
    return result
}

module.exports = repeatString
