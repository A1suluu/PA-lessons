// Нахождение палиндрома
if ( n.length % 2 === 0) {
    middle = n.length / 2
} else {
    middle = n.length/ 2 + 0.5
}

let n = prompt()
let middle;
let k = 0

for (let i = 0; i < n.length; i++) {
    let a = n[i]
    let b = n[n.length-i-1] 
    if ( a === b ) {
        k += 1
    }
}
if (k === n.middle) console.log("Палиндром")
else console.log("Не палиндром")