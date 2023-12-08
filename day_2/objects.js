

let person = {
    name: "Jonatan Vahlberg",
    nameLengh: "Jonatan Vahlberg".length, 
    age: 26,
    role: "Teacher",
    greet: () => {
        console.log("Hello world")
    },
    sibling: null
}

console.log(person.name)
console.log(person)
person.greet()

// Undefined
console.log(person.sibling)

// Error
// console.log(person.sibling.height)

person.sibling = {
    height: 195
}

console.log(person.sibling)
console.log(person.sibling.height)

//
person = {};


const city = {
    name: "Stockholm",
    slogan: "Skandinaviens Venedig",

    hospital: {
        activeNurses: 24,
        activeDoctors: 12,

        address: {
            postalCode: 14826,
            postalArea: "Solna",
            address: "Solnavägen 27"
        }
    }
}

// Create a garage with its height, width, deaph, car that contains, model, isElectric, make,
//SV: Skapa en garage med dess höjd, bredd, djup, bil som innehåller, modell, är elektrisk, skapare,

const car1 = {
    make: "Tesla",
    model: "Model S",
    isElectric: true
}

const garage = {
    height: 250,
    width: 400,
    djup: 800,
    unit: "cm",
    car: car1
}

// Create a function that accesses the car make of a garage car
//SV: Skapa en funktion som får tillgång till bilens tillverkning av en garagebil

function getCarMakeFromGarage(garage){
    if(!garage || !garage.car) {
        return "Garage does not have a car";
    }
    return garage.car.make
}

console.log(getCarMakeFromGarage())
console.log(getCarMakeFromGarage(garage))

// create a function that changes car based on a argument of car passed in
//i.e function changeCar(garage, car) (code along)
//SV: skapa en funktion som ändrar bil baserat på en argument av bil som passerar in
// dvs funktion changeCar (garage, bil) (koda tillsammans)

function changeCarInGarage(garage, newCar = {
    make: "",
    model: "",
    isElectric: false
}
){
    if(!garage) {
        return "No garage found"
    }

    garage.car = newCar
    return "Car was replaced"
}
console.log("GARAGE CAR 1:", garage.car)
console.log(changeCarInGarage())

console.log(
    changeCarInGarage(garage, {
        make: "Volvo",
        model: "V75",
        isElectric: false
    })
)
console.log("GARAGE CAR 2:", garage.car)



//Optional Chaining


const cheese = {
    aged: 18,
    origin: "Italy",
    tasteProfile: "Salty"
}

const fridge = {
    brand: "samsung",

    specs: {
        coolingAgent: "8127",
    },
    cheese: null,
}
// optional chaining ?
console.log("GET CHESE TASTE PROFILE", fridge.cheese?.tasteProfile)

fridge.cheese = cheese

console.log("GET CHESE TASTE PROFILE", fridge.cheese.tasteProfile)

const person1 = {
    name: "Kalle",
    child: {
        name: "Kalle jr",
        child: {
            name: "Kalle den tredje",
            child: null
        }
    }
}


const person2 = {
    name: "Oscar",
    child: {
        name: "Oscar den andre"
    }
}

console.log("GET grandchildren",
    person1.name,
    person1.child.name,
    person1.child.child.name,
)

console.log("GET grandchildren",
    person2.name,
    person2.child?.name,
    person2.child?.child?.name,
)