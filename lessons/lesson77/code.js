document.addEventListener("DOMContentLoaded", () => {
    const ourForm = document.querySelector("form")
    ourForm.addEventListener("submit", (event) => {
        event.preventDefault()
        const myInput = document.querySelector("input")
        const prime = getPrime(Number(myInput.value))
        const result = document.getElementById("result")
        result.innerText = prime
    })
})

function getPrime(orderNumber) {
    let primes = [2]
    
    let num = 3
    while (true) {
        let found = false

        // for (let i = 2; i < num; i++) { 
        //     if (num % i === 0) {  
        //         found = true
        //         break
        //     }
        // }

        for (let j = 0; j < primes.length; j++) {
            if (num % primes[j] == 0) { 
                found = true
                break
            }
        }

        if (!found) {
            primes.push(num)
        }

        if (primes.length === orderNumber) {
            return primes[orderNumber-1]
        }

        num++
    }
}