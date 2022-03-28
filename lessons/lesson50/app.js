// создание обьекта, класс
 
class AwesomeClass {                // создание нового типа и класса 
    constructor(height,price){      //  метод.  вызывается только с new классом
        this.height = height
        this.price = price
    }
    test () {
        console.log("hi")
    }
}

let myObject = new AwesomeClass(7,14)// значение свойств можем передать здесь или в любом дркгом месте
myObject.test()
console.log(typeof(myObject))
console.log(myObject.height)
console.log(myObject["price"])

// let a = prompt ()
myObject.discaunt = 100 
console.log(myObject.discaunt)

// let anotherObject = new AwesomeClass()
// anotherObject.test()




class carClass {
    constructor(mark, model, year, price){
        this.mark = mark
        this.model = model
        this.year = year
        this.price = price
    }
    set mileAge (km) {
        this._mileage = km
    }
    get mileAge () {
        // return `${this._mileage} km`
        return this._mileage
    }
    set model(myModel) {
        this._model = myModel
    }
    get model () {
        return `${this.mark} ${this._model} km`
    }

    go(km) {
        this.mileAge += km
    }

}

// let anotherCar = new carClass("Toyoto", "CRV 3", 2002, 1100)
let Toyoto = new carClass("Toyoto", "Camry 40", 2007, 9.800)
Toyoto.mileAge = 1200

console.log(Toyoto.mileAge)
Toyoto.go(150)
console.log(Toyoto.mileAge)
console.log(Toyoto.model)
console.log(Toyoto.mark)



