document.addEventListener("DOMContentLoaded", () => {
    let square = document.getElementById("square")
    
    let x = localStorage.getItem("x")
    let y = localStorage.getItem("y")

    if (x) {
        square.style.left = `${x}px` }

    if (y) {
        square.style.top = `${y}px` }
})

document.addEventListener("keydown", leftClick) 
function leftClick (e) {
    let square = document.getElementById("square")
    let step = 10

    let x = 0;
    if(square.style.left) {
        x = parseInt(square.style.left)}
        
    let y = 0;
    if(square.style.top) {
        y = parseInt(square.style.top) }

    let maxX = window.innerWidth
    let maxY = window.innerHeight  

    if (e.code === "ArrowRight") {
        if (x <= maxX - step - 50) {
            x += step }
    } else if (e.code === "ArrowLeft") {
        if (x > 0) {
            x -= step }
    } else if (e.code === "ArrowUp") {
        if (y > 0) {
            y -= step }
    } else if (e.code === "ArrowDown") {
        if (y <= maxY - step - 50) {
            y += step }
    } else if (e.code === "Space") {
        let size = square.style.transform 
        if ( size === "scale(1.5)") {
            square.style.transform = "scale(1)"
        } else {
            square.style.transform = "scale(1.5)"
        }
    }

    localStorage.setItem("x", x)
    localStorage.setItem("y", y)

    square.style.left = `${x}px`
    square.style.top = `${y}px`
}