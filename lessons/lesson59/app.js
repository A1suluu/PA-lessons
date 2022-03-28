// разбор как предотвратить ошибку.
/*
 - нужно учитывать ошибки, которык могут возникать

 Объект ошибки 
 - stack ...стек вызовов


 JSON.parse(str) 
*/



function mySum (a,b) {
    let c = a + b
    if (typeof(a) === "number" && typeof(b) === "number"){
        return c
    }
    return "Error"
}

function myDiv (num_1, num_2){
    let result = num_1 / num_2
    if(num_1 === 0 || num_1 === 0 ) return "Error"
    return result
}


try {
    console.log(k)
}catch (err) {
    console.log("Произошла ошибка")
    console.log(err)
}


let a = '{"hello": "world", "hi":3}'
let a = "askdmnc"

try {
    console.log(a.test)
    console.log(JSON.parse(a))
    if(!a.test){
        let errorObject = new Error ("Нет свойства test")
        throw errorObject
    }
    console.log(a.test)
}catch(err) {
    console.log(err.message)
}


// console.log(myDiv(6, 17))
// console.log(mySum(6,7))