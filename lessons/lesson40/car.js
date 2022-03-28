let myCar = {
    mark : "Lexus",
    model : 360,
    mileage : 0,
    

    // метод go, принимающий km 
    // и увеличивающий пробег
    
    go : function (km) {
        this.mileage += km
    }
}

console.log(myCar.mileage)
myCar.go(15)
console.log(myCar.mileage)