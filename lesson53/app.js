class Computer {
    constructor (model, price) {
        this.model = model
        this.price = price
        this.available = true
    }
    sell() {
        if(this.available){
            this.available = false
            return this.price
        }
    }
}


class Printer {
    constructor (model, price) {
        this.model = model
        this.price = price
        this.available = true
    }
}

class MonthBudget {
    constructor (startMoney, planMoney) {
        this.startMoney = startMoney
        this.planMoney = planMoney
        this.NowMoney = startMoney
    }
    sell (myObject) {
        this.myObject += NowMoney.sell
        }
}

let comp_1 = new Computer("HP", 1000)
let comp_2 = new Computer("Macbook", 700)
let printer_1 = new Printer("HP laserjet", 500)

console.log()