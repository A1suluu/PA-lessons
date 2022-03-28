var app_id = "d844456b080641219066aa386c5144f5"

document.addEventListener("DOMContentLoaded", () => setInterval (main, 3000))

function main () {
    let url = `https://openexchangerates.org/api/latest.json?app_id=${app_id}`
    fetch(url).then(response => response.json()).then(data => {
console.log(data)

let usd = data.rates.KGS
const elementUSD = document.getElementById("usdValue")

let eur = data.rates.EUR
eur = Number(usd) / Number(eur)
const elementEUR = document.getElementById("eurValue")

let rub = data.rates.RUB
rub = Number(usd) / Number(rub)
const elementRUB = document.getElementById("rubValue")

elementUSD.innerText = Math.round(usd * 100) / 100;
elementEUR.innerText = Math.round(eur * 100) / 100;
    elementRUB.innerText = Math.round(rub * 100) / 100;


// const search_input = document.getElementsByClassName("search_input")
// const userValue = document.getElementById("userCurValue")

// let userTxt = document.getElementById("userCur")
// let result = data.rates.userTxt
// result = Number(usd) / Number(result)
// userValue.innerText = Math.round(result * 100) / 100;



})

}



// function submitForm() {
    //     let url = `https://openexchangerates.org/api/latest.json?app_id=${app_id}`
    
//     fetch(url).then(response => response.json()).then(data => {
//         console.log(data)
//     })
//     .then(data => {

//         let txt = search_input.innerText 
//         txt 
//     })
// }
