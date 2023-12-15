

console.log("window", window)


// User language 
const clientInfo = window.navigator;
const langauge = navigator.language;

console.log(langauge)

if(langauge === "sv"){
    // alert("Hej och väälkommen till min sida")
}
else {
    // alert("Hi and welcome to my page")
}


//GEO-location
const geo = navigator.geolocation;



function getCurrentPositionSuccess(position){

}

function getCurrentPositionError() {

}

geo.getCurrentPosition((position) => {
    console.log("Has given location permissions", position)
}, (positionError) => {
    console.log("Has not given location permissions", positionError)
})