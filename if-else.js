

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


// TASK conditionals

/*
    skriv två värden grade (number) dueDate (date)
        ?dueDate deklareras med en initialt värde för att inte vara samma som idag tex "2023-12-10 23:59"
    Skriv en "conditional" som uppfyller nedan krav
    1.  om grade lägre än 60 console log IG
    2.  om grade högre än eller lika med 60 OCH mindre än eller likamed 85 console log G
    3.  om grade högre en 85 console log VG

    1. om dueDate dag är mindre än idag dag console log sen inlämning
    2. om dueDate dag är större än idag dag console log inlämning
    3. annars console log Sista minuten inlämning

*/

// grade checker
let grade = 87;

if( grade < 60 ) {
    console.log("IG")
}
else if( grade >= 60 && grade <= 85) {
    console.log("G")
}
else if(grade > 85){
    console.log("VG")
} 

//assignment due
const dueDate = new Date("2023-12-6 23:59");

if(dueDate.getDate() < today.getDate()) {
    console.log("Sen inlämning")
}
else if(dueDate.getDate() > today.getDate()){
    console.log("Inlämning")
}
else {
    console.log("Sista minuten inlämning")
}

//Om ni fastnar på hur man får ut datum sök "JS get date from new Date()" på google och välj stackoverflow svar
