// CLASSES 

class User {
    role = "vieawer"                     // свойство класса 
    static senseOfLife = 42             // статическое свойство

    constructor(name, age) {
        this.name = name                // свойство класса 
        this.age = age                 // свойство класса 
    }

    static run() {
        console.log("Running")        // статический метод
    }

    sayHi() {                       // метод
        console.log(`Hi, I am ${this.name}`)
    }
}


function User(name,age) {
    this.role = "vieawer"
    this.name = name
    this.age = age
}

User.prototype.sayHi = function() {
    console.log(`Hi, I am ${this.name}`)
}

User.run - function(){
    conaole.log("Running")
}

User.senseOfLife = 42



/*
- нельзя вызвать без new
- методы неперечислимые 
- код внутри класса выполняется в сторогом режиме ("use strict")
*/
