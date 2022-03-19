class Mammals {
    paws = 4
    tail = 1
}

class Dog extends Mammals {
    sound () {
        console.log("ГАВ!")
    }
}

class Cat extends Mammals {
    sound () {
        console.log("МЯУ!")
    }
}

class Tigger extends Cat {
    color = "striped"
    
    sound () {
        this.roar()
    }
    roar () {
        console.log("RRRR!")
    }
}
class Human extends Mammals {
    paws = 0
    feet = 2
    tail = 0
    hands = 2

    sound () {
        console.log("Hello World!")
    }
}
let gav = new Dog()
// gav.sound()

let may = new Cat()
// may.sound

let animals = [gav, may, new Human(), new Tigger() ]

for (let i = 0; i < animals.length; i++) {
    animals[i].sound()
    console.log(animals[i].paws)
}