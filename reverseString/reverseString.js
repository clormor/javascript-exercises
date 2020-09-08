const reverseString = function(input) {
    let result = ''
    let i = input.length
    for (; i > 0; i--) {
        result += input[i - 1]
    }
    return result
}

module.exports = reverseString
