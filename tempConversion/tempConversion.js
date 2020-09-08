const ftoc = function(farenheitTemp) {
    let result = (+farenheitTemp - 32) * 5 / 9
    return formatNumber(result)
}

const ctof = function(celsisusTemp) {
    let result = +celsisusTemp * 9 / 5 + 32
    return formatNumber(result)
}

const formatNumber = function(number) {
    if (Number.isInteger(number)) {
        return number
    } else {
        return +number.toFixed(1)
    }
}

module.exports = {
  ftoc,
  ctof
}
