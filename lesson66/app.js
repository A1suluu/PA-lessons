for (let a = 1; a <= 200; a++) {
    for (let b = a; b <= 400; b++) {
        for (let c = b; c <= 500; c++) {
            if ((a ** 2 + b ** 2 === c ** 2) && (a + b + c === 1000)) {
                console.log(a, b, c)
            }
        }
    }
}