export function capitaliseFirstLetter (str) {
    const strLowerCase = str.toLowerCase()
    const strArr = strLowerCase.split('')
    strArr[0] = strArr[0].toUpperCase()
    return strArr.join("")
}