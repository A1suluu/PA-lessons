// let c = [6, 42, 23]
// let b = []             //[12,84,46]

// for (let i = 0; i < c.length; i++) {
//     b.push(c[i] * 2)
// }

// console.log(b)

let m = ["hello", 43, true]
let n = {}

// n.string = m[0]
// n.number = m[1]
// n.boolean = m [2]

// n[typeof(m[0])] = m [0]
// n[typeof(m[1])] = m [1]
// n[typeof(m[2])] = m [2]

for (let i = 0; i < n.length; i++) {
    n[typeof(m[i])] = m [i]
}

console.log(n)
