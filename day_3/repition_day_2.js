

//! OBJECTS

// Object assignment
const computer = {
    motherboard: "...",
    maxRAM: 4000,
}

console.table(computer)
console.log(computer.maxRAM)

computer.maxRAM = 8000

// Nested objects
const parrent = {
    name: "...",
    age: 45,
    father: {
        name: "...",
        age: 45,
        favouriteHobby: {
            type: "Music",
            subType: "Violin"
        }
    }
}

// const grandParrent = parrent.father // - Will create mutable copy
const grandParrent = {...parrent.father} // - will create a new object

grandParrent.age = 80

console.log(parrent, grandParrent)

// Optional chaining
delete parrent.father

console.log(parrent)
//! console.log(parrent.father.age) // will create a error

console.log(parrent.father?.age) // returns age or undefined if father is not an object

parrent.father = {...grandParrent}
delete parrent.father.favouriteHobby

//! console.log(parrent.father?.favouriteHobby.subType) // will create a error 

console.log(parrent.father?.favouriteHobby?.subType) // returns age or undefined if father is not an object

//! ARRAYS

// array assignment - zero based indexing
const fruits = ["Pear","Cherry","Tomato"]
console.log(fruits)

console.log(fruits[0]) // Access first index

fruits[0] = "Apple" // Change first index
console.log(fruits)

// alt array creation 
const primeNumbers = new Array(10);
console.log(primeNumbers)
primeNumbers[11] = 18827
console.log(primeNumbers)

// array manipulations

/// Splice - Add / Remove / update
fruits.splice(fruits.length-1, 1) // Removes last index of list
console.log("Fruits", fruits)

fruits.splice(1, 0, "Bannana", "Melon") // Adds two items starting before index 1
console.log("Fruits", fruits)

fruits.splice(1, 2, "Orange", "Watermelon") // updates two items starting before with index 1
console.log("Fruits", fruits)

//Push Pop Shift Unshift

fruits.push("Grapes") // Adds to end of array
fruits.unshift("Cantelope") // Adds to start of array
console.log("Fruits", fruits)

fruits.pop() // Removes from end of array
fruits.shift() // Removes from start of array
console.log("Fruits", fruits)


//! Console commands

console.log("Normal console log")
console.warn("WARNING")
console.error("ERROR")
console.table(fruits)


// Objects with arrays / Arrays with objects

const classroom = {
    roomNumber: 17,
    teacher: {
        name: "Jonatan",
    },
    students: [{
        name: "Kalle",
        studentId: 29923
    }],
    "key that is not usable outside indexing": null
}

console.log(classroom)

console.log(classroom.students)
console.log(classroom.students[0])
console.log(classroom.students[0].studentId)
console.log(classroom["students"][0]["studentId"])
console.log(classroom["key that is not usable outside indexing"])





