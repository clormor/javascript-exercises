const palindromes = function(string) {
    string = string
            .match(/[a-z0-9]/ig)
            .map(x => x.toLowerCase())
    let middle = Math.floor(string.length / 2)
    let s1 = string.slice(0,middle).join()
    if (string.length % 2 == 1 ) {
        middle++
    }
    let s2 = string.slice(middle).reverse().join()
    return s1 === s2
}

module.exports = palindromes
