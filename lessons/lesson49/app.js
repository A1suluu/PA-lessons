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

    x = !x ? 50 : x 

    if (event.code === "ArrowRight") {
        dino.style.transform = "scaleX(1)"
        x += 20
    } else if (event.code === "ArrowLeft") {
        dino.style.transform = "scaleX(-1)"
        x -= 20
    } else if (event.code === "Space") {
        dino.style.top = `${y - 100}px`
        setTimeout(() => {
            dino.style.top = `${y}px`
            setTimeout(() => checkStop(), 310)
        }, 700)
    }

    dino.style.left = `${x}px`

    // console.log(x, y)
    setTimeout(() => checkStop(), 310)
    
}

function checkStop() {
    let dino = document.querySelector(".gamer")
    let x = parseInt(window.getComputedStyle(dino).left)
    let y = parseInt(window.getComputedStyle(dino).top)

    let handX = 54 + x
    let handY = 69 + y 

    if (dino.style.transform === "scaleX(-1)") {    // меняются координаты при развороте
        handX = 6 + x
        handY = 69 + y
    }
    

    let tree = document.querySelector(".tree")
    let tw = parseInt(window.getComputedStyle(tree).width)
    let th = parseInt(window.getComputedStyle(tree).height)
    
    let x1 = parseInt(window.getComputedStyle(tree).left)
    let y1 = parseInt(window.getComputedStyle(tree).top)
    let x2 = x1 + tw
    let y3 = y1 + th

    // console.log(x, y)
    
    if (handX > x1 && handX < x2 && handY < y3 && handY > y1) {
        setTimeout(() => {
            alert("GAME OVER!")
            gameStop = true
        }, 310)
    }

//     if (!gameStop && handX > x1) {
//         points++
//     }
//     console.log(points)
// }


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


   // transform/ если попадает игра заканчивантся. разворот на право и на лево и чтобы мог ходить


   