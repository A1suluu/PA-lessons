document.addEventListener("DOMContentLoaded", () => {
     const d = document.querySelector("div")
    document.querySelector("button").addEventListener("click", () => {
        d.style.background = "green"
    })
    const widthInput = document.getElementById("change_width")
    widthInput.addEventListener("input", () => {
        d.style.width = widthInput.value + "px"
    })
    const heightInput = document.getElementById("change_height")
    heightInput.addEventListener("input", () => {
        d.style.height = heightInput.value + "vh"
    })
})
