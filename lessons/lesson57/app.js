function rabbit() {
    let tStart = 1000
    let tSleep = 3500
    let tFinish = 1000
    const ro = document.getElementById("rabbit")

    setTimeout(
        () => {
            console.log("Заяц прошел половину")
            ro.style.left = "50%"
        },
        tStart
    )

    setTimeout(
        () => {
            console.log("Заяц спал 3 секунд")
            tStart + tSleep
        }
    )
    setTimeout(
        () => {
            console.log("Заяц финишировал")
            tStart + tFinish
        }
    ) 
}

// function turtle (){
//     const to = document.getElementById("tirtle")
//     for (let i = 1; i < 6; i++) {
//         let part = i * 20
//         setTimeout(
//             () => {
//                 console.log(`Черепаха прошла ${part}% пути`)
//                 if (part === 100) part = 90
//                 to.style.left = `${part}%`
//             },
//             i * 1000
//      ) 
// }

document.addEventListener("DOMContentLoaded", rabbit)
rabbit()