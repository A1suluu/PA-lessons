const url = "https://api.telegram.org/bot5226423758:AAHJkPyYXX1et_pmIdhIwoDxrcdxJmYLA4A/getUpdates"

let newPromise
function sendMessage (url){
    const x = new XMLHttpRequest()
    x.open("GET", url)
    
    x.onload = () => {
        if (x.response.status === 200) {
            resolve("Успех")
        } else if (x.response.status === 400) {
            reject ("Ошибка")
        }
    }
    x.send()
}

sendMessage(url)
console.log("hello")


// 