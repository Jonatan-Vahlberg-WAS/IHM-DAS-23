

const day = new Date("2023-12-9 12:00").getDay(); //1-7 mon-sun
let representativeDay = "N/A"

switch(day) {
    case 1:
        representativeDay = "Monday"
        break;
    case 2:
        representativeDay = "Tuesday"
        break;
    case 3:
        representativeDay = "Wednesday"
        break;
    case 4:
        representativeDay = "Thursday"
        break;
    case 5:
        representativeDay = "Friday"
        break;
    case 6:
        representativeDay = "Saturday"
        break;
    case 7:
        representativeDay = "Sunday"
        break; 
}

console.log("Today is", representativeDay)

switch(representativeDay) {
    case "Saturday":
    case "Sunday":
        console.log("It is the weekend")
        break;
    default:
        console.log("It is a weekday")
}

switch(day) {
    case 6:
    case 7:
        console.log("It is the weekend Sunday")
        break;
    default:
        console.log("It is a weekday")
}

//Choose product switch ska logga en produkt som passar för prefrence eller "Ingen produkt finns"

function chooseProductSwitch(prefrence) {
    
}

chooseProductSwitch("bra pris") // Produkt A
chooseProductSwitch("hög kvalitet") // Produkt B
chooseProductSwitch("hållbarhet") // Produkt C
chooseProductSwitch("utan gluten") // Ingen produkt finns
