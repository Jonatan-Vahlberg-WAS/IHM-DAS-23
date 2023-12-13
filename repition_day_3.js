
//!Traditional loops

//FOR loop
for (let i = 0; i<5; i++){ // i++ == i = i + 1
    console.log("FOR iteration",i)
} 
const totalShares = 1500
const shares = [200,800, 350, 0, null]

for (let i = 0; i < shares.length; i++){
    if(!shares[i]){
        continue // Continue stops loop iteration and goes to next
    }

    console.log("User share total is",shares[i])
    let percentage = shares[i] / totalShares * 100;
    console.log("Percentage", percentage);
}
for ( let i = 0; i < 8; i++){
    let chessBoarRow = ``
    for (let j = 0; j < 8; j++) {
        const isSpaceEven = j % 2 === 0
        if(isSpaceEven) {
            chessBoarRow += "[W]"
        }
        else {
            chessBoarRow += "[B]"
        }
    }
    console.log(chessBoarRow, i)
}

//WHILE loop
const word = "brown"
const words = "the quick brown fox jumps over the lazy dog".split(" ")
console.log(words)
let whileIndex = 0
let currentWord = ""
while(currentWord !== word) {
    currentWord = words[whileIndex]
    if(currentWord === word) {
        continue;
    }
    whileIndex++;

    if(whileIndex >= words.length) {
        break; // Breaks the loop exits below
    }
}
console.log("Word was found in index", whileIndex)


//! Higher order loops

// FOR EACH - Loops over an array without returning a new one
words.forEach((word, index, list) => {
    console.log(word, index)
})

// MAP - Loops over an array returning a new one
const capitalizedWords = words.map((word) => {
    return word[0].toUpperCase() + word.substring()
})
console.log(capitalizedWords)

let students = [
    { name: "Kalle", id: 90},
    { name: "Rut", id: 89},
    { name: "Mildred", id: 88}
]
console.log("STUDENTS", students)

const studentIds = students.map(student => student.id)
console.log("STUDENT IDS", studentIds)
const expelledStudents = [90]
students = students.map(student => {
    if(expelledStudents.includes(student.id)){
        student.expelled = true
    }
    return student
})
console.log("STUDENTS", students)

// FILTER - Find every array item that fits the statement
students.push(undefined)
let activeStudents = students.filter(student => {
    return !student?.expelled
}).filter(student => {
    return !!student
})

console.log("ACTIVE STUDENTS", activeStudents)


// FIND- Find first array item that fits the statement
function findStudent(studentId = 0) {
    return activeStudents.find(student => student.id === studentId)
}


console.log(findStudent(90),
findStudent(89),
findStudent(88))