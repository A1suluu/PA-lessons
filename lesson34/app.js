for (let i = 1; i < 100; i++) {
    if (i % 5 === 0) {
        console.log(i)
    }
}

//start  end  step
// 1     100   1
//100    1    -1




let m = []


for (let i = 1; i < 10; i++) {     
    if (i % 3 === 0 || i % 5 === 0) {
        m.push(i)
    }
}



let sum = 0
for (let i = 0; i < m.length; i++) {
    sum = sum + m[i]
}

console.log(sum)