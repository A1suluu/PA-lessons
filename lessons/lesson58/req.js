const url = "https://api.telegram.org/bot5226423758:AAHJkPyYXX1et_pmIdhIwoDxrcdxJmYLA4A/getUpdates"
const x = new XMLHttpRequest()
x.open("GET", url)


x.onload = () => console.log(x.response)
x.send()

console.log("hello")