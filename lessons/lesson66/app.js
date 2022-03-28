// let break_cycle = false

for (let a = 1; a <= 500; a++) {
    for (let b = a; b <= 500; b++) {
        let c = 1000 - a - b
        if (a ** 2 + b ** 2 === c ** 2) {
            console.log(a, b, c)
            // break_cycle = true
        }
    }
}