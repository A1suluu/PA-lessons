// let b = false
// "be or not to be"
// console.log(b || !b) //0 || 1

let n = 0

let s = Number (prompt("Площадь комнаты:"))


if (s > 30 && s <= 50) {
     n = 2
} else if (s > 50 && s < 150) {
    n = 4
} else if (s >= 150) {
    n = 10
} else if ( s > 0 && s <= 30) {
    n = 1
} else if ( s <= 0 ) {
    console.log ("Ошибка!")
}

console.log("Нужно " + String(n) + " лампочек")

