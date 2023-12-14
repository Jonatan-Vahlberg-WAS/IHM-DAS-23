 // String manipulation
 let text1 = "I love pizza" 
        
 /// Replace
 text1 = text1.replace("pizza","🍕")
 console.log(text1)

 /// lower upper case & capitalize
 console.log(text1.toLowerCase())
 console.log(text1.toUpperCase())
 console.log(text1[0].toUpperCase()+text1.substring(1))

 let email = "TEST@test.com"
 console.log(email.toLowerCase())

 /// Split
 let text2 = "The sun shines brightly in the morning sky. Birds chirp happily among the trees. A gentle breeze rustles the leaves.";

 // Split into words 
console.log(text2.split(" "))

// Split into sentances
const sentances = text2.split(".")
const trimmedSentances = sentances.filter(s => s).map(s => s.trim())
console.log(sentances)
console.log(trimmedSentances)

const filenames = [
 "a_txt_file.txt",
 "a broken txt file.txt"
]

// Solution 1
const correctFileNames = filenames.map(fileName => fileName.replaceAll(" ", "_"))

//solution 2 - Join

const correctFileNames2 = filenames.map(fileName => {
     const fileParts = fileName.split(" ")
     const correctFileName = fileParts.join("_")
     return correctFileName
})

console.log(filenames)
console.log(correctFileNames)
console.log(correctFileNames2)

 // updating elements
const title = document.getElementById("title")
const description = document.getElementById("description")

 // Creating elements