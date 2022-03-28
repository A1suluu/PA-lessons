document.addEventListener("DOMContentLoaded", () => {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Bishkek&appid=11c0d3dc6093f7442898ee49d2430d20")
    .then(response => response.json())
    .then(data => {
        const bishkek = document.querySelector("#bishkek")
        bishkek.innerText = temp_convert(data.main.temp)
    })
    
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Osh&appid=11c0d3dc6093f7442898ee49d2430d20")
    .then(response => response.json())
    .then(data => {
        const osh = document.querySelector("#Osh")
        osh.innerText = temp_convert(data.main.temp)
    })

function temp_convert(temp) {
    let t = Math.round(temp - 273.15)
    if (t > 0) {
        t = `+${t}`
    }
    return t
}
})