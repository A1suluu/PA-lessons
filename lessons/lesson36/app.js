 // создаем елку в консоли 


let UserNumber = Number (prompt("Введите число: "))

let part1 = ""
let part2 = "/"
let part3 = ""
let part4 = "\\"

for ( let i = 0; i < UserNumber; i++ ) {
    part1 = ''
    for ( let j = 0; j < UserNumber - i; j++ ) {
        part1 = part1 + ' '
    }

    part3 = " "
    for ( let k = 0; k < i * 2; k++ ) {
        part3 = part3 + ' '
    }

    console.log(part1 + part2 + part3 + part4)
}