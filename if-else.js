

// alert("IF ELSE")

// if - gör något om "statement" är sant
// else - gör något om "statement" inte är sant

let age = 18;
let _name = "Jonatan"

// equals - == eller ===
if(_name == "Jonatan"){
    console.log("Name is jonatan")
}
if(age === "26") {
    console.log("Age is 26 and a string")
}
else if(age === 26) {
    console.log("Age is 26 and a number")
}
else {
    console.log("Age is not 26")
}

// greater than less than - > <
if(age > 18) {
    console.log("Is an adult")
}

if(_name.length < 10) {
    console.log("Name length is less than 10")
}

// GTE LTE - >= <=

if(age >= 18){
    console.log("Is actually an adult")
}

if(_name.length <= 10) {
    console.log("Name is less than or equals 10", _name.length)
}

// Conditional AND - statement 1 and statement 2 is true

const today = new Date()
// const today = new Date("2023-12-8 18:00")
const day = today.getDay()

const hour = today.getHours()
console.log("DAY: ",day, "HOUR: ", hour);

// Is workday
// Is weekend
// Is off time
if(day <= 5 && hour < 17 && hour >= 9){
    console.log("is Workday: ", day)
}
else if( day > 5){
    console.log("Is Weekend")
}
else {
    console.log("Is offtime")
}

// Conditional OR - ||
let favoriteFood = "Pizza";

if(favoriteFood === "Pizza" || favoriteFood === "Tacos") {
    console.log("Favorite food is greasy")
}

//Negate / inverse - !
//Double negate / inverse inverse - !!

const password = "123123"
const confirmPassword = "12312"

//NON TRUTHY VALUES
// 0, "", undefined, null, NaN, false
if(!password) {
    console.log("No password inputted")
}
else if(password !== confirmPassword){
    console.log("Passwords do not match")
}
else {
    console.log("Passwords do match")
}

function checkPassword(password, confirmPassword){
    if(!password) {
        console.log("No password inputted")
    }
    else if(password !== confirmPassword){
        console.log("Passwords do not match", password, confirmPassword)
    }
    else {
        console.log("Passwords do match")
    }
}
// console.clear()
checkPassword("password", "pass")
checkPassword("", "password")
checkPassword("password", "password")







// is offtime