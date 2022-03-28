document.addEventListener("DOMContentLoaded", main)

function main () {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Osh&appid=11c0d3dc6093f7442898ee49d2430d20")
    .then(response => response.json())
    .then(data => {
        const temp = document.querySelector("#temp")
        const feels_like = document.querySelector("#feels_like")
        const short = document.querySelector("#short")
        const description = document.querySelector("#description")


        temp.innerText = temp_convert(data.main.temp)
        feels_like.innerText = temp_convert(data.main.feels_like)
        short.innerText = data.weather[0].main 
        description.innerText = data.weather[0].description	
    })
}

function temp_convert(temperature) {
    let t = Math.round(temperature - 273.15)
    if (t > 0) {
        t = `+${t}`
    }
    return t
}