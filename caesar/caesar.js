const caesar = function(string, shift) {
    let result=''
    for (i = 0; i < string.length; i++) {
        result += shiftChar(string.charCodeAt(i), shift)
    }
    return result
}

const lowerA = 'a'.charCodeAt(0)
const lowerZ = 'z'.charCodeAt(0)
const upperA = 'A'.charCodeAt(0)
const upperZ = 'Z'.charCodeAt(0)

function shiftChar(charCode, shift) {
    let shiftBase
    if (upperA <= charCode && charCode <= upperZ) {
        shiftBase = upperA
    } else if (lowerA <= charCode && charCode <= lowerZ) {
        shiftBase = lowerA
    }

    if (shiftBase) {
        charCode = (charCode + shift)
        while (charCode < shiftBase) {
            charCode += 26
        }
        while (charCode >= (shiftBase + 26)) {
            charCode -= 26
        }
    }

    return String.fromCharCode(charCode)
}

module.exports = caesar
