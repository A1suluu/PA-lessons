// let a = [9, "hello", ]



// let img = [
//     [[255, 255, 255], [255, 255, 255],[255, 0, 0]    ]
//     [[255, 255, 255], [255, 0, 0],    [255, 255, 255]]
//     [[255, 0, 0],     [255, 255, 255],[255, 255, 255]]

// ]

// console.log (img[0][1])

let c = { // начали обьект
    one: 452,
    "two": false,
    "name surname": "Aisuluu Baiyshova",
    myArray:["hello", "world", "js" ], //обратились к массиву
    another: {
        7: 8,
        "test": true,
        blabla: null,
        hi: [
             52,
             73,
            { foo: "bar",
              "hello": [
                 [62, 24, 52],
                 [62, 24, 52],
                 [62, 0, 52]
              ]
            }
        ]
    }
}

console.log(c.one) //обращение с атрибуту


console.log(c.another.test)
console.log(c.another["test"])
console.log(c.myArray[1])
// console.log(c.another[1])
console.log (c.another.hi[2].hello[2][1])


