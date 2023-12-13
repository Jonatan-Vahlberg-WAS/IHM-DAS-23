

const txt1 = "The quick brown fox jumps over the lazy dog.";
const txt2 = "The sun shines brightly in the morning sky. Birds chirp happily among the trees. A gentle breeze rustles the leaves.";

//1. Make a fucntion that takes a string and returns it with all upper case letters
//SV Skapa en funktion som tar en sträng och returnerar den med alla stora bokstäver
function toUpperCase(str = ""){
    return str.toUpperCase();
}
console.log(toUpperCase(txt1))

//2. Make a function that takes a string and returns it with all lower case letters
//SV Skapa en funktion som tar en sträng och returnerar den med alla små bokstäver
function toLowerCase(str = ""){
    return str.toLowerCase();
}
console.log(toLowerCase(toUpperCase(txt1)))

//3. Take a string and split it into an array of words. Return that array.
//SV Ta en sträng och dela upp den i en array av ord. Returnera den arrayen.
const words = txt1.split(" ")
console.log(words)

//4. take a string and split it into sentences. Return that array.
//SV Ta en sträng och dela upp den i meningar. Returnera den arrayen.
const sentences = txt2.split(".")
const sentencesWithoutEmptyStrings = sentences.filter(sentance => !!sentance)
const trimmedSentencesWithoutEmptyStrings = sentencesWithoutEmptyStrings.map(sentence => sentence.trim())
console.log(sentences)
console.log(sentencesWithoutEmptyStrings)
console.log(trimmedSentencesWithoutEmptyStrings)

//5. Take a string and find if it contains a specific word. Return true or false.
//SV Ta en sträng och hitta om den innehåller ett specifikt ord. Returnera true eller false.
let wordTofind = "sky"
console.log("TXT1 includes", wordTofind, txt1.includes(wordTofind))
console.log("TXT2 includes", wordTofind, txt2.includes(wordTofind))

function ignoreCaseContainsWord(text = "", word = "") {
    return text.toLowerCase().includes(word.toLowerCase())
}
console.log("TXT2 includes Ignore case", "SKY", ignoreCaseContainsWord(txt1, "SKY"))


//extra 1. Take a string split it then filter for a spesific word and return the word and occurences
//SV Ta en sträng dela upp den och filtrera efter ett specifikt ord och returnera ordet och förekomsterna


wordTofind = "sun";
const words2 = txt2.split(" ")
const trimmedWords = words2.map(word => {
    return word.trim().replace(".","")
})
const foundWords = trimmedWords.filter(word => {
    return wordTofind.toLowerCase() === word.toLowerCase()
})

const occurences = foundWords.length;
console.log(words2)
console.log(trimmedWords)
console.log(occurences)

const baseCookie = "COOKIE=VALUE"
console.log(baseCookie.slice(7))
console.log(baseCookie.split("COOKIE=")[1])

const cookieKey = "hasAcceptedTerms"
document.cookie = `${cookieKey}=true`

console.log(document.cookie)
const cookies = document.cookie.split("; ") // Get cookies as an array
const selectedCookie = cookies.find(cookie => {
    return cookie.includes(cookieKey)
})
const selectedCookieValue = selectedCookie?.split("=")?.[1]

console.log(cookies)
console.log(selectedCookie)
console.log(selectedCookieValue, typeof selectedCookieValue)
if(selectedCookieValue){
    const interpolatedCookieValue = selectedCookieValue === "true"
    console.log(interpolatedCookieValue, typeof interpolatedCookieValue)
}

