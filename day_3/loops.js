

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
// hint2. example fruits[i][0]

//a. create array of strings
const newFruits = [...fruits]
//b. loop trough strings
for (let i = 0; i < newFruits.length; i++){
    //c1. console log each string
    console.log("Fruit", newFruits[i])
    //c2 console log first char of string
    console.log("Fruit first char", newFruits[i][0], newFruits[i].charAt(0))
}

//2. Create a for loop that adds all numbers of a given array
//SV: Skapa en for-loop som lägger till alla nummer i en given array
//hint. hur söker jag upp informationen

const numbers = [1,2,3,4,5];
let sum = 0;
for (let i = 0; i < numbers.length; i++){
    // lägg ihop nummer
    //sum = numbers[i] // replaces number with new number
    console.log("INDEX", i, numbers[i])
    sum = sum + numbers[i]
}

console.log(sum)


//3. Create a while loop that takes a long string as seen below and looks for one certain word breaking when it has found it
//SV: Skapa en while-loop som tar en lång sträng som nedan och letar efter ett visst ord som bryter när den har hittat det ordet
//hint. const wordArray = "some string".split(" ")
//hint. wordArray.length
// "The quick brown fox jumps over the lazy dog"


//1. Skapa ord array och sökord index
const str = "The quick brown fox jumps over the lazy dog";
const words = str.split(" ")
const wordToFind = "fox"
let index = 0

//2. Skapa while loop
while(true) {
    //2.1 skapa conditional för när loopen måste avslutas
    if(index >= words.length) {
        console.log("Word not found")
        break;
    }
    //3. Skapa condition för när loopen ska stanna om vi har hittat rätt ord
    const currentWord = words[index];
    if(currentWord === wordToFind){
        //4. console log index av words där vi hittar "fox"
        console.log("Word found at:", index)
        break;
    }
    index++;
}






