// DATA LAYER
window.dataLayer = window.dataLayer || []


const dataLayerModelClick = {
    event: "click",
    eventType: "CTA",
    indentifier: "button#cta-new-course",
    data: {
        courseId: "22323",
        text: "A new course has dropped get it now!!!"
    }
}

//CLICK event

//GEOLOCATION event

const dataLayerModelGeoLocaation = {
    event: "geoLocation",
    eventType: "geoLocation",
    indentifier: null,
    data: {
        location: "54.90297392397, 18.82738738",
        timestamp: 12323872738278,
    }
}

const courseCTAs = document.querySelectorAll(".cta-course")
console.log("c", courseCTAs)

function getIdentifier (element) {
    let indentifier = element.tagName;

    if(element.className) {
        indentifier += `.${element.className}`
    }
    if(element.id) {
        indentifier += `#${element.id}`
    }
    console.log(indentifier)
    return indentifier
}

function addToDataLayer(event) {
    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push(event)

    console.log("DATA LAYER: ",window.dataLayer)
    const eventsClickedCourse1800 = window.dataLayer.filter(event => event.data?.course == 1800)
    console.log(eventsClickedCourse1800)
}

courseCTAs.forEach(courseCTA => {
    courseCTA.addEventListener("click", (e) => {
        const target = e.target
        const course = e.target.getAttribute("data-course")
        const event = {
            event: "click",
            eventType: "CTA",
            indentifier: getIdentifier(target),
            data: {
                course: course,
                timestamp: new Date().toISOString()
            }
        }
        addToDataLayer(event)
    })
    
})
const limit = 100;
for(var i = 0; i < limit; i++) {
    let randomNumber = Math.floor(Math.random() * 3);
    console.log(courseCTAs[randomNumber]) // This will produce 0, 1, or 2
    courseCTAs[randomNumber].click()
}


//NAVIGATION event