// setTimeout(doSomething, 1000)

// function doSomething () {
//     console.log("hi")
// }



// // интервал. каждые несколько секунд вызывается

// function doSomething () {
    //     console.log("hi")
    // }
    


    
    setInterval(doSomething, 1000)
    
    function doSomething () {
        const elem = document.querySelector("div")
        let num = Number(elem.innerText)
        num++
        elem.innerText = num
    }
    
    
    // инкримитация по времени. техника помодоро. таймер от 2 секунд

