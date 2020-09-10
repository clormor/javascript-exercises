const fibonacci = function(x) {
    if (x <= 0) {
        return 'OOPS'
    }

    let current = 1
    let last = 1
    while (x > 2) {
        let temp = current
        current += last
        last = temp
        x--
    }

    return current
}

module.exports = fibonacci
