console.log("hi")

let a = []

let b = {
    nameFirst: "Steve",
    surname: "Jobs",
    id: 12345,
    fullname: function () {
        return this.nameFirst + this.surname
    },
    greetings: function(word) {
        return `${word}, ${this.nameFirst}!`
    },
    idMethod : function(){
        return `My name is ${this.nameFirst}, my id is ${this.id} `
    }
}

console.log(b.nameFirst)
console.log(b.fullname())
console.log(b.greetings("Hello"))
console.log(b.idMethod())













// ` ${} `   внутри строки создаем 
// this - помогает обращаться к ключи внутри данного объекта 
// console - объект, log - его метод 