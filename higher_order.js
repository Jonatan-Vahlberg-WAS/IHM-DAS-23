// FOR EACH
console.clear()
const newerFruits = [...newFruits];
console.log(newerFruits)
const newerReversedFruits = []

newerFruits.forEach((fruit, i, arr) => {
    console.log(fruit, i)
    newerReversedFruits[arr.length - 1 -i] = fruit
    console.log("Fruit first char", fruit[0])
})
console.log(newerReversedFruits)

// MAP