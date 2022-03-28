var domain = "https://api.telegram.org/bot"
var token = "5226423758:AAHJkPyYXX1et_pmIdhIwoDxrcdxJmYLA4A"

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("button").addEventListener("click" , () => {
        let text = document.querySelector("input").value
        sendMessege()
    })
})

function sendMessege () {
    let url = `${domain}${token}/sendMessage?chat_id=270623373&text=${text}`    // api bot
    let s = document.getElementById("status")
 
        fetch(url).then(response => {
            try{
                const status = response.status
                if (status >= 400) {
                    throw new Error (`Ошибка! Проверьте параметр, статус ${status}`)
                } else if (status === 401) {
                    throw new Error (`Ошибка! Проверьте токен, статус ${status}`)
                } else if (status === 404) {
                    throw new Error (`Ошибка! Проверьте url, статус ${status}`)
                }
                s.innerHTML = "Сообщение  успешно отправлено"
            }catch (e) {
                s.innerHTML = e.message
            }
        })
    
}