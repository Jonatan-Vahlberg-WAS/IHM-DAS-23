
console.log("Hello World")

// string - Texter
// number - Nummer
// boolean - true eller false
// object - Objekt Flera värden i en låda
// function - Avgränsad kod som kan köras på flera ställen
// Date - datum

// Camel case - hasObjectPermissions =/ hasobjectpermissions

// snake case - Python has_object_permissions

/*

Multi line comment

*/

// Veraiable declarations

// Old version - (var)
var name = "Jonatan";
var age = 26;
var isStudent = false // 0 eller 1

// New version - (let, const)
const courseName = "DAS23";
let courseScore = 15;
let courseIsActive = true;

//Global constant
const SCHOOL_NAME = "IHM"

const greeting = "Hi my name is " + name + " i am " + age + " old. Is student: " + isStudent;

const aproximateBirthYear = 2023 - age;

const studentCourseIsActive = isStudent && courseIsActive;

const todaysDate = new Date()

console.log(greeting)
console.log(aproximateBirthYear)
console.log(studentCourseIsActive)
console.log(todaysDate)

//Skriv några variabler som beskriver en hund
/*
    namn, kön, ålder, ålder i hund år (ålder * 7), ras, är koplad
*/ 

//Skriv en variabel som sammanställer all data i en text

//tex "det här är min hund NAMN den är ÅLDER gammal..."

let nameOfDog = "Fido";
let ageOfDog = 8;
let dogAgeOfDog = ageOfDog * 7
let genderOfDog = "Male";
let isLeashed = false;

const dogIntroduction = "This is my dog " +
    nameOfDog +
    " Gender: " +
    genderOfDog +
    " Dog age: " +
    dogAgeOfDog +
    " Is leashed: " +
    isLeashed

const dogIntroduction2 = `This is my dog ${nameOfDog} Gender: ${genderOfDog} Dog age: ${dogAgeOfDog} Is leashed: ${isLeashed} `;

const dogIntroduction3 = `This is my dog ${nameOfDog} ${genderOfDog === 'Male' ? "he is" : "she is"} Dog age: ${dogAgeOfDog} Is leashed: ${isLeashed} `;

console.log(dogIntroduction)
console.log(dogIntroduction2)
console.log(dogIntroduction3)

