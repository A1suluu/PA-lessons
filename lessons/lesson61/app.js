var domain = "https://api.telegram.org/bot"
var token = "5226423758:AAHJkPyYXX1et_pmIdhIwoDxrcdxJmYLA4A"

function sendMessege (text) {
    let url = `${domain}${token}/sendMessage?chat_id=270623373`
    let s = document.getElementById("status")

    fetch(url)
    .then(response => {
        if (response.status === 400){
            throw new Error("Ошибка! Статус 400")
        } else if (response.status === 200) {
            console.log("Все ок!")
        }
    })
    b.catch(err => { 
        console.log("err.message")
    }).finally(err => {
        console.log("Этот код всегда выполнится")
    })
}

sendMessege("test")



// промисс код который вернет попозже ответ