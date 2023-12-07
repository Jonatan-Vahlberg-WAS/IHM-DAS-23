
console.log("Repition")

// Naming conventions
// js - camelCase
// variables should have descriptive names /= a = name
// variables should not include type in name /= nameString

// Variables
// string, number, boolean, object, function, date
// Only one variable of same name within same scope

var _name = "Jonatan";
let _age = 26;
let _course = "DAS23"
const _nrOfSiblings = 2;

const DATABASE_URL = ""

// Conditionals
// if else if else
if( _age >= 65) {
    // Is pensioner
}
if(_age < 18) {
    // Is adult
}
else {
 // IS child
}
// switch
switch(_course) {
    case "DAS23":
        console.log("Is attending DAS23")
        break; // Use break to signal end of case
    default: // For any non important values
        console.log("Is attending some other course")
}

// Conditional operators
// Equals == no type checking
if(23 == "23"){
    console.log("23 is 23 no type check")
}
// Equals === type checking
if(23 === "23"){
    console.log("23 is 23 with type check")
}
else {
    console.log("23 is not 23 with type checking")
}
// Greater than >
// Lesser than <
// Greater than equals >=
// Lesser than equals <=
// Conditional AND &&
if(_name === "Jonatan" && _age === 26){
    console.log("Is teacher")
}
// Conditional OR ||
if(_course === "DAS23" || _course === "FE23"){
    console.log("Have taught")
}

// Negative ! Positive !! 
// (!= negative without type check !== negative with type check)
// has no siblings 
if(_nrOfSiblings === 0){}
if(!_nrOfSiblings) {}

if(_name !== "Kalle") {
    console.log("Name is not kalle")
}

// Positive - Is used to determine a positive value
if(!!_name){ 
    // Is not an empty string ""
    console.log("We have a name", _name)
}