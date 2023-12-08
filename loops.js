

//! FOR loop

for (let i = 0; i < 5; i++){ // Safe
    console.log("Iteration ", + i)
}

//! for (let i = 0; i > -1; i++){ //! UNSAFE will crash
//!     console.log("Iteration ", + i)
//! }

for (let i = 100; i > 0; i--){ //Works with negative numbers
    console.log("Countdown", i)
}
console.clear()
const fruits = ["Apple", "Pear", "Bannana", "Orange"];
console.log(fruits)
const reversedFruits = []

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
    reversedFruits[fruits.length-1-i] = fruits[i]
}

console.log(fruits)
console.log(reversedFruits)
const lookupFruit = "Watermelon";

let currentFruit = "";
let k = 0;
while (currentFruit !== lookupFruit) {
    if(k >= fruits.length){
        console.log("NO FRUIT FOUND IN ARRAY")
        break;
    }
    currentFruit = fruits[k]
    k = k+1
}

console.log("Found fruit at:", k, currentFruit)


// WHILE TRUE - dangourus

while(true) {
    const randomNumber = Math.floor(Math.random() * 100)

    console.log("RNG", randomNumber)
    if(randomNumber === 77){
        break;
    }

}

//1. Create a for loop that takes the first letter of each array item and console.logs it out 
//hint. string[0] or string.charAt(0)
//SV: Skapa en for-loop som tar det första bokstaven i varje array-element och console.logs det ut
// hint. string [0] eller string.charAt (0)

//2. Create a for loop that adds all numbers of a given array
//SV: Skapa en for-loop som lägger till alla nummer i en given array

//3. Create a while loop that takes a long string as seen below and looks for one certain word breaking when it has found it
//SV: Skapa en while-loop som tar en lång sträng som nedan och letar efter ett visst ord som bryter när den har hittat det ordet

//hint. const wordArray = "some string".split(" ")
//hint. wordArray.length

