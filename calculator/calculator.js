function add (x, y) {
	return x + y
}

function subtract (x, y) {
	return x - y
}

function sum (xs) {
    return xs.reduce(add, 0)
}

function multiply (xs) {
    return xs.reduce((x, y) => x * y, 1)
}

function power(x, n) {
    return Math.pow(x, n)
}

function factorial(x) {
	result = 1
    for (; x > 0; x--) {
        result *= x
    }
    return result
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
