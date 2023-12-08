//! HIGHER ORDER FUNCTIONS
//? Functions that take other functions as arguments or return functions as their results
//? Funktioner som tar andra funktioner som argument eller returnerar funktioner som resultat
//? https://eloquentjavascript.net/05_higher_order.html
// Example of a higher order function
// fruits.forEach((fruit, i, arr) => {
//     console.log(fruit, i)
// })

// FOR EACH
console.clear()
const newerFruits = ["Apple", "Pear", "Bannana", "Orange"];
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
const numbers = [100,349,230,2899, 1, 200]
console.log(numbers)
let sum = 0;

numbers.forEach((nr) => {
    sum = sum + nr;
})

console.log("SUM is", sum)

//2. Find the largest number in an array through forEach save it to a variable during the loop
//SV: Hitta det största numret i en array genom forEach spara det i en variabel under loopen
let largestNumber = 0;

numbers.forEach((nr) => {
    if(nr > largestNumber) {
        largestNumber = nr;
    }
})
console.log("The largest number is:", largestNumber) 

// MAP
console.log("Numbers", numbers)
const indexes = numbers.map((nr,index) => {
    return index
})
console.log("Number indexes", indexes)

const firstLetters = newerFruits.map(fruit =>{
    return fruit[0]
})
console.log("Initial letters of fruits", firstLetters)

const students = [
    { name: "Kalle", id: 9002},
    { name: "Bejamin", id: 922},
    { name: "Rut", id: 7802},
]
console.log(students)

const studentIds = students.map((student) => {
    return student.id
})
console.log(studentIds)

studentIds.forEach(id=> console.log("Send mail to", id)) 


//1. From a array of numbers double each number and save it to a new array using map
//SV: Från en array med nummer dubbla varje nummer och spara det i en ny array med hjälp av map

//2. from a array of strings create a new array with each string in uppercase using map
//SV: från en array med strängar skapa en ny array med varje sträng i versaler med hjälp av map
// hint. string.toUpperCase()