

const names = ["Adam", "Albert", "August"]

console.log(names[0])
console.log(names[1])
console.log(names[2])
console.log(names[3]) // No value
console.log(names[3]?.charAt(0)) // No value use optional chainging

const ages = [34, 17, 43]

console.log(ages[0], ages[1], ages[2])

// Create a array of days i.e "Monday"
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

// Access tuesday and saturday
const tuesday = days[1]
const saturday = days[5]

// length push och pop


// length - Get array length
console.log("Days length:", days.length)
days.length = 0
console.log("Days", days)


const names2 = ["Adam", "Albert", "August"]

//Push - Adds an item to end of array
names2.push("Alicia")
console.log(names2)

//Unshift - Adds an item to start of array
names2.unshift("Anders")
console.log(names2)

//Pop
const removedName = names2.pop()
console.log(names2, removedName)

//shift
names2.shift()
const removedFirst = names2.shift()
console.log(names2, removedFirst)

// Create a cue of names
const cue = names

// create a funtion to handle first in cue logging either "customer NAME has exited the cue" or "no more customers in cue"
//SV: skapa en funktion för att hantera första personen i kön loggar antingen "kundnamn har lämnat kön" eller "inga fler kunder i kön"

function handleFirstInCue(cue = []){
    const firstInCue = cue.shift()
    console.log("first in cue", firstInCue)
    if(firstInCue){
        return `${firstInCue} har lämnat kön`
    }

    return "inga fler kunder i kön"
}

console.log(handleFirstInCue(cue))
console.log(handleFirstInCue(cue))
console.log(handleFirstInCue(cue))
console.log(handleFirstInCue(cue))
console.log(handleFirstInCue(cue))



const data = [1200, 400, 899, "ERROR", 782.5]
console.log(data)

//Splice

//Splice for removal
data.splice(3,1)
console.log(data)

//Splice for adding
data.splice(3, 0, 239)
console.log(data)

//Splice for replace
data.splice(4, 1, 782)
console.log(data)

//Concat

let fruits = ["Apple", "Orange", "Bannana"]
console.log(fruits)


const vegetables = ["Tomato", "Carrot", "Potato"]

const fruitsAndVegetables = fruits.concat(vegetables)

console.log(fruitsAndVegetables)

// Concat spread
const fAV1 = [...vegetables, ...vegetables]
console.log(fAV1)

// reverse
console.log(fruitsAndVegetables.reverse())

// sort
const sortedFruitsAndVegetables = fruitsAndVegetables.sort()

console.log(sortedFruitsAndVegetables)
console.log(data.sort())
console.log(data.sort((a,b) => {
    return b-a
}))

// slice
const sortedData = data.sort((a,b) => {
    return b-a
})

const thirdLargestData = sortedData.slice(0,3)
console.log(thirdLargestData)