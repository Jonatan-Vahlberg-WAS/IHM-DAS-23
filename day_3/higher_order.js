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
    { name: "Kalle", id: 9002, email: "kalle@ihm.se"},
    { name: "Bejamin", id: 922, email: "beNjamin@ihm.se"},
    { name: "Rut", id: 7802, email: "Rut@ihm.se"},
]
console.log(students)

const studentIds = students.map((student) => {
    return student.id
})
console.log(studentIds)

studentIds.forEach(id=> console.log("Send mail to", id)) 


//1. From a array of numbers double each number and save it to a new array using map
//SV: Från en array med nummer dubbla varje nummer och spara det i en ny array med hjälp av map
const doubleNumbers = numbers.map((nr) => {
    return nr * 2;
})
console.log("Doubled numbers", doubleNumbers)

//2. from a array of strings create a new array with each string in uppercase using map
//SV: från en array med strängar skapa en ny array med varje sträng i versaler med hjälp av map
// hint. string.toUpperCase()
const uppercaseFruits = newerFruits.map((fruit) => {
    return fruit.toUpperCase();
})
console.log("Uppercase fruits", uppercaseFruits)


const emails = [
    "email1@email.com",
    "email2@Email.com",
    "email3@email.Com",
    "eMail4@email.com",
]
console.log("Emails", emails)
const lowercaseEmails = emails.map(email => email.toLowerCase())
// const lowercaseEmails = emails.map((email) => {
//     return email.toLowerCase()
// })
console.log("Emails in lower case", lowercaseEmails)

const correctedStudentProfiles = students.map(student => {
    return {
        ...student,
        email: student.email.toLowerCase()
    }
})
console.log(correctedStudentProfiles)


// FILTER

const lowNumbers = numbers.filter((nr) => {
    return nr < 250
})
console.log("Only numbers under 250",lowNumbers)


const studentsWithNameBeginingWithB = students.filter(student => {
    return student.name.toLowerCase()[0] === "b"
})
console.log("Students with names staring with 'B'", studentsWithNameBeginingWithB)

const inactiveStudentId = 9002
const activeStudents = students.filter(student => {
    return student.id !== inactiveStudentId;
})
console.log("Active students after filtering", activeStudents)

//1. From a array of numbers filter out all numbers that are larger than 100
//SV: Från en array med nummer filtrera ut alla nummer som är större än 100
const highNumbers = numbers.filter(nr => nr > 100)
console.log("Numbers that are larger than 100", highNumbers)

//2. From a array of strings filter out all strings that are longer than 5 characters
//SV: Från en array med strängar filtrera ut alla strängar som är längre än 5 tecken
// hint. string.length
const longFruits = newerFruits.filter(fruit => fruit.length > 5)
console.log("Fruits with names longer than 5 chars", longFruits)

//FIND

const apple = newerFruits.find(fruit => fruit === "Apple")
console.log("Apple", apple)

const student9002 = students.find(student => student.id === 9002)
const student9001 = students.find(student => student.id === 9001)
console.log("Student with id 9002", student9002)
console.log("Student with id 9001", student9001)
if(student9001){
    console.log("There is a student with that id")
}

//1. From a array of numbers find the first number that is larger than 100
//SV: Från en array med nummer hitta det första numret som är större än 100
const firstOver100 = numbers.find(nr => nr > 100)
console.log("First number over 100", firstOver100)

//2. find the spesific fruit "apple" regardless of case from a array of strings
//SV: hitta den specifika frukten "apple" oavsett stor eller liten bokstav från en array med strängar
// hint. string.toLowerCase()
const apple2 = newerFruits.find(fruit => fruit.toLowerCase() === "apple")

//3. search students for a student name Martin and if no student is found console.log "No student found"
//SV: sök studenter efter ett studentnamn Martin och om ingen student hittas console.log "No student found"
const studentMartin = students.find(student => student.name.toLowerCase() === "martin")
if(studentMartin){
    console.log("Student Martin", studentMartin)
}
else {
    console.log("No student found")
}