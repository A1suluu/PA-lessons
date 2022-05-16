let allNums = []
for (let i=2; i<200000; i++) {
    allNums.push(i)
}

let primes = []

for (let i=0; i<allNums.length; i++){
    if (allNums[i] != 0) { 
        primes.push(allNums[i])
        for (let j=i; j<allNums.length; j = j + allNums[i]) {
        //       j=0;   200000;   j = j + 2
            allNums[j] = 0
        }
    }
}

function reshetoAtkina(num) {
   return primes[num-1]
}