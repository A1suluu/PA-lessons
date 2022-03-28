function isPalindrom (num) {
    let strNum = String(num)
    if (strNum.split("").reverse().join("") === strNum) {
        return true
    }
    return false
}

let m = 1
for(let a = 1000; a > 100; a--) {
    for(let b = a; b > 100; b--) {
        let c = a * b
        if(isPalindrom(c) &&  c > m) {
            console.log(a, b, c)
            m = c
        }
    }
}

// console.log(isPalindrom(432))
// console.log(isPalindrom(777))