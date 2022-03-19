document.addEventListener("DOMContentLoaded", main)

function main () {
    const btn = document.querySelector("button")
    const lamp = document.querySelector("div")
    lamp.isOn = false

    btn.addEventListener("click", () => {
    if(lamp.isOn) {
        lamp.style.backgroundColor = "white"
        btn.textContent = "Включить"
        lamp.isOn = false
    } else {
        lamp.style.backgroundColor = "yellow"
        btn.textContent = "Выключить"
        lamp.isOn = true
    }
  })
}
















// function toggle (){
//     const btn = document.querySelector("button");
//     const lamp = document.querySelector("div");
//     if (lamp.innerHTML = "<img src='../js_hw/0031/img/bulb_off.png'>") {
//         lamp.innerHTML = "<img src='../js_hw/0031/img/bulb-on.png'>";
//         btn.innerHTML = "Включить";
//     } else {
//         lamp.innerHTML = "<img src='../js_hw/0031/img/bulb_off.png'>";
//         btn.innerHTML = "Выключить";
//     }
// }



