var gameStop = false 
var points = 0

document.addEventListener("DOMContentLoaded", main)

function main () {
    document.addEventListener("keydown", go)
}

function go (event) {
    let dino = document.querySelector(".gamer")
    let x = parseInt(dino.style.left)
    let y = parseInt(window.getComputedStyle(dino).top)
    let maxX = window.innerWidth

    if (!x) {
        x = 50
    }

    if (event.code === "ArrowRight") {
        if (x < maxX - 75) {
            dino.style.transform = "scaleX(1)";
            x += 25   
        } else if (x = maxX) {
            x = 0
            y = 0    
        }
    } else if (event.code === "ArrowLeft") {
        if (x > 0) {
            dino.style.transform = "scaleX(-1)";
            x -= 25
        }  
    } else if (event.code === "Space") {
        dino.style.top = `${y - 100}px`
        setTimeout(() => {dino.style.top = `${y}px`
            setTimeout(() => checkStop(), 310)}, 700)
    }

    dino.style.left = `${x}px`
     console.log(x, y)
     setTimeout(() => checkStop(), 310)
}

function checkStop() {
    let dino = document.querySelector(".gamer")
    let x = parseInt(window.getComputedStyle(dino).left)
    let y = parseInt(window.getComputedStyle(dino).top)

    let handX = 54 + x
    let handY = 69 + y 

    if (dino.style.transform === "scaleX(-1)") {
        handX = 6 + x
        handY = 69 + y
    }
    

    let tree = document.querySelector(".trees")
    
    
    let tw = parseInt(window.getComputedStyle(tree).width)
    let th = parseInt(window.getComputedStyle(tree).height)
    
    let x1 = parseInt(window.getComputedStyle(tree).left)
    let y1 = parseInt(window.getComputedStyle(tree).top)
    let x2 = x1 + tw
    let y2 = y1
    let x3 = x1
    let y3 = y1 + th
    let x4 = x1 + tw
    let y4 = y1 + th

    // console.log(x, y)
    
    if (handX > x1 && handX < x2 && handY < y3 && handY > y1) {
        setTimeout(() => {
            alert("GAME OVER!")
            gameStop = true
        }, 310)
    }

    if (handX > x2) {
        tree.getAttribute("id", "tree")
        tree.setAttribute("id", "tree2 ")

    }

    let checkPoints = document.querySelector(".points")

    if (!gameStop && handX > x1 && handX < x2) {
        points ++ 
    }
    checkPoints.innerHTML = `points: ${points}` 
    console.log(points)
}