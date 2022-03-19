// let step = 1

// for (let  i = 0; i < 100; i = i + step) {
//     step++
// }
//    console.log(i) 


// let myArr = [7, 23, 63, 57, 89, 300]
// let dragon = myArr[0]

// for (let i = 0; i < myArr.length; i++) {
//     if (myArr[i] > dragon ) {
//         dragon = myArr[i]
//     }
// }

// console.log(dragon)


// let c = [6, 42, 23];

// let b = [];


let m = ["hello", 43, true, null, 7, "hi"];

let n = {};

for (let i = 0; i < m.length; i++) {
    let key = typeof(m[i]);
    if (key in n) {
        let inside_arr = []
        inside_arr.push(n[key]);
        inside_arr.push(m[i]);
        n[key] = inside_arr;
    } else {
        n[key] = (m[i])
    }
}

console.log(n)



//короткое решение

// for (let i = 0; i < c.length; i++) {

//     b.push(c[i] * 2)

// }



// console.log(b)




