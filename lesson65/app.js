

// filter

// let c = b.filter(x => x < 5)  // проходит через все элементы и возвыращем массив
// console.log(c)
// let filteredGoods = goods.filter(x => x.goodName != "Printer" )
// console.log(filteredGoods)
// фильтровать один элемент

// find

// let a = b.find(x => x < 5)
// console.log(a)

// map
// Он вызывает функцию для каждого элемента массива и возвращает массив результатов выполнения этой функции
// вернет весь массив 

// let c = b.map(item => item * 2)
// let newGoods = goods.map(good => {
//     let newGood = good
//     newGood.price = newGood.price * 2
//     newGood.available = true
//     return newGood
// })
// console.log(newGoods)

// let newG = []
// for (let i = 0; i < goods.length; i++) {
//     let o = goods[i]
//     o.price = o.price * 2
//     o.available = true
//     newG.push(o)
// } 
// console.log(newG)

let b = [6, 2, 9, 4, 13, 9]
let goods = [
    {goodName: "Computer", price: 1000},
    {goodName: "Laptop", price: 900},
    {goodName: "Printer", price: 500},
]

// reverse
// Метод arr.reverse меняет порядок элементов в arr на обратный.
let c = b.sort( (a, b) => a - b).reverse()
console.log(b, c)

