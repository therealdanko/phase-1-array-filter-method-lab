const findMatching = (array, string) => {
    const findMatch = (element) => {
        return element.toLowerCase() === string.toLowerCase()
    }
    const match = array.filter(findMatch)
    return match
}
// console.log(findMatching(drivers, "bobby"))

const fuzzyMatch = (array, string) => {
    const letterMatch = (element) => {
        return element.startsWith(`${string}`)
    }
    const match = array.filter(letterMatch)
    return match
}
// console.log(fuzzyMatch(drivers, "S"))

const matchName = (array, string) => {
    const objKeys = (element) => {
        const scanName = element.name === string
        return scanName
    }
    const match = array.filter(objKeys)
    return match
}


