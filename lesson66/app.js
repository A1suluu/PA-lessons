for (let a = 1; a <= 100; a++) {
    for (let b = 1; b <= 100; b++) {
        for (let c = 1; c <= 100; c++) {
            if ( a ** 2 + b ** 2 === c ** 2) {
                if ( a + b + c === 12) {
                    if (a < b && b < c) {
                        console.log(a, b, c)
                    }
                }
            }
        }
    }
}