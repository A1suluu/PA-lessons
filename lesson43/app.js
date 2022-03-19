document.addEventListener("DOMContentLoaded", () => {
    let firstInput = document.querySelector("#input_1")
    let secondInput = document.querySelector("#input_2")
    let resultNode = document.querySelector("#result")
    
    firstInput.addEventListener("input", () => {
        resultNode.innerHTML = Number(firstInput.value) + Number(secondInput.value)
    })
    secondInput.addEventListener("input", () => {
        resultNode.innerHTML = Number(firstInput.value) + Number(secondInput.value)
        console.log(resultNode)
    })
})
