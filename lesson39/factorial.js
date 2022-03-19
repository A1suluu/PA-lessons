// factorial = 1*2*3*4*5  нахождение факториала

let n = Number(prompt())

// function factorial (num) {
//     let res = 1
//     for (i = 1; 1 <= num; i++ ){
//         res *= i
//     }
//     return res
// }

// console.log(factorial (n))



let factorialOne = (num) => {
    let resOne = 1
    for (i = 1; 1 <= num; i++ ){
        resOne *= i
    }
    return resOne
}

console.log(factorialOne(n))
