document.addEventListener("DOMContentLoaded", () => {
    const elem = document.querySelector("div")
    let invervalID = 0
    
    
    if (localStorage.getItem("time")) {
        elem.innerText = localStorage.getItem("time")
        startTimer(invervalID)
    } else {
        elem.innerText = "25:00"  
    }

    const startButton = document.getElementById("start")
    startButton.addEventListener("click", () => {
       startTimer(invervalID)
    })

    const pauseButton = document.getElementById("pause")
    pauseButton.addEventListener("click", () => {
        clearInterval(invervalID)
        invervalID = 0
    })

    const restartButton = document.getElementById("restart")
    restartButton.addEventListener("click", () => {
        location.reload()
    })
})


function myTimer () {  
    const elem = document.querySelector("div")  
    let current = elem.innerText.split(":") // ['25', '00']
    let seconds = Number(current[1])
    let minutes = Number(current[0])
    
    if (minutes === 0 && seconds === 0) {
        return 0
    }
    
    if (seconds === 0) {
        seconds = 59
        minutes--
    } else {
        seconds--
    }
    
    seconds = convertTime(seconds)
    minutes = convertTime(minutes)      

    let currentTime = `${minutes}:${seconds}`
    localStorage.setItem("time", currentTime)
    elem.innerText = currentTime
    }

    function convertTime(num) {
    if (num < 10) {
        return `0${num}`
    } else {
        return String(num)
    }
 }

 function startTimer (ii) {
     if (ii < 1) {
         ii = setInterval(myTimer, 1000)
     }
 }
