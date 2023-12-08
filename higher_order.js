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

//1. Combine an array of numbers by adding them together through forEach
//SV: Kombinera en array med nummer genom att lägga till dem tillsammans genom forEach 

//2. Find the largest number in an array through forEach save it to a variable during the loop
//SV: Hitta det största numret i en array genom forEach spara det i en variabel under loopen

// MAP