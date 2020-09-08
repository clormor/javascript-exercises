const removeFromArray = function(array, ...elementsToRemove) {
    let result = array
    let nextElementToRemove = elementsToRemove.shift()
    while (nextElementToRemove) {
        let nextOccurrence = result.findIndex(e => e === nextElementToRemove)
        while (nextOccurrence !== -1) {
            result.splice(nextOccurrence, 1)
            nextOccurrence = result.findIndex(e => e === nextElementToRemove)
        }
        nextElementToRemove = elementsToRemove.shift()
    }
    return result
}

module.exports = removeFromArray
