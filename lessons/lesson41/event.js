

function btnClick() {                                  // cоздаем функцию
    const counter = document.querySelector("div")      // вызываем "div" 
    let k = Number(counter.textContent)                // обращаемся именно к "0"
    k++                                                // увеличиваем  k++  каждый раз при клике
    counter.textContent = k                            // обновляем и переносим значение в "div"
}
