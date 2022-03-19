function convert(myArray, resultArray) {
    for (let i = 0; i < myArray.lenght; i++) {
        if(Array.isArray(myArray[i])) {
            convert (myArray[i], resultArray)
        } else {
            resultArray.push(myArray[i])
        }
    }
    return resultArray
}

let a = [4,6,7,8,[4,9,32,70,5,[4,0,2]]]
let b = []

console.log(convert(a,b))