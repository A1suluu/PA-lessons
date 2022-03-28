document.addEventListener("DOMContentLoaded", () => {
    setInterval(() => {
        fetch("https://api.telegram.org/bot5226423758:AAHJkPyYXX1et_pmIdhIwoDxrcdxJmYLA4A/getUpdates")
        .then(response => response.json())
        .then(data => {  
            let res = data.result
            let messagesArray = []
            for ( let i = 0; i < res.length; i++ ) {
                let updateId = String(res[i].update_id)
                if (!localStorage.getItem(updateId)) {
                    sendMessage("Ваше сообщение принято, ждите плез")
                    localStorage.setItem(updateId, 1)
                }
 
                let message = res[i].message ? res[i].message : res[i].edited_message
                let text = message.text
 
                if ( Number(text) ){
                    let num = Number(text) - 1
                    if (num in messagesArray) {
                        messagesArray.splice(num, 1)
                    }
                } else if ( text != "/show" ) {
                    messagesArray.push(text)
                } else if (text === "/show" && localStorage.getItem(updateId) === "1") {
                    sendArray(messagesArray)
                    localStorage.setItem(updateId, 2)
                }
            } 
        })
    }, 3000)
})
 
var domain = "https://api.telegram.org/bot"
var token = "5226423758:AAHJkPyYXX1et_pmIdhIwoDxrcdxJmYLA4A"
 
function sendMessage (text) {
    let url = `${domain}${token}/sendMessage?chat_id=270623373&text=${text}`
    fetch(url)
}
 
function addMessage (fromUser, text) {
    const messagesDiv = document.getElementById("messages")
    messagesDiv.innerHTML += `<div>${fromUser}: ${text}</div>` 
}
 
function sendArray(myArray) { // приходит массив строк
    for ( let i = 0; i < myArray.length; i++) {
        setTimeout(() => sendMessage(`${i+1}. ${myArray[i]}`), 500)
    }
}