

// Function without argument

function call911() {
    console.log("Calling 911")
}

// Calling the function - call911

call911()

// Fucntions with arguments

function add(x, y) {
    console.log("X + Y:", x, y, x+y)
}

// Calling the add function - add(1,4)
add(1,6)
add(2,62)
add(5,97.2)
add("Hello ", "world")

// Functions with returns

function getSum(x, y) {
    return x + y
}

let sum = getSum(1,6)
console.log("SUM:",sum)
console.log("SUM:",getSum(2,8))

function getTodaysDate() {
    const today = new Date()

    return today.getDate()
}

console.log(getTodaysDate())
console.log(new Date().getDate())

const anna = 19; // age of user
const bertil = 8;
const markus = 64;

function userCanBuyEnergyDrinks(user){
    if(user >= 15){
        return true
    }
    else {
        return false
    }
    console.log("after return never visible")
}

console.log(
    userCanBuyEnergyDrinks(anna),
    userCanBuyEnergyDrinks(bertil),
    userCanBuyEnergyDrinks(markus),
)

function userCanBuyEnergyDrinks2(user){
    if(user >= 15){
        return true
    }
    return false;
    console.log("after return never visible")
}

function userCanBuyEnergyDrinksTernery(user){
    return user >= 15 ? true : false
}

function userCanBuyEnergyDrinksShortest(user){
    return user >= 15;
}

function hasSiblings(siblings) {
    if(!siblings) {
        return "No siblings"
    } 
    else if(siblings === 1) {
        return "Has 1 sibling"
    }
    return "Has siblings"
}

function hasSiblingsTernary(siblings) {
    if(siblings === 0) {
        return "No siblings"
    } 
    
    return siblings === 1 ? "Has 1 sibling" : `Has ${siblings} siblings`
}

//UNRECOMENDED
function hasSiblingsShortest(siblings) {
    
    return !siblings ? "Has no siblings" : siblings === 1 ? "Has 1 sibling" : `Has ${siblings} siblings`
}


console.log(hasSiblings())
console.log(hasSiblingsTernary())
console.log(hasSiblingsShortest())

// Functions with default arguments
// Default argument should not come before non defaulted arguments

const DATABASE_URL = "https://post.bin"
function getFromDatabase(url = DATABASE_URL, id = 0){
    return `${url}/post/${id}`
}

console.log(getFromDatabase())
console.log(getFromDatabase("http://nemo:8666"))
console.log(getFromDatabase(undefined,10))