let a = [5, 7, 3, 0, 2, 6, 5, 1]
let b = Number(prompt())

for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
        if (a[i] + a[j] == b) {
            console.log(a[i], a[j])
        }
    }
}

// for (let i = 0; i < a.length; i++) {
//     let c = a[i]
// }