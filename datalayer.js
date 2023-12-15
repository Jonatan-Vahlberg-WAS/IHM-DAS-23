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
const limit = 5;
for(var i = 0; i < limit; i++) {
    let randomNumber = Math.floor(Math.random() * 3);
    console.log(courseCTAs[randomNumber]) // This will produce 0, 1, or 2
    courseCTAs[randomNumber].click()
}

//GEOLOCATION event

const dataLayerModelGeoLocaation = {
    event: "geoLocation",
    eventType: "geoLocation",
    indentifier: null,
    data: {
        location: "54.90297392397, 18.82738738",
        timestamp: new Date().toISOString(),
    }
}

//GEO-location
const geolocation = navigator.geolocation;


geo.getCurrentPosition((position) => {
    const event = {
        event: "geolocation",
        eventType: "geolocation",
        indentifier: null,
        data: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            timestamp: new Date(position.timestamp).toISOString()
        }
    }

    addToDataLayer(event)
}, (positionError) => {
    const event = {
        event: "geolocation",
        eventType: "geolocationError",
        indentifier: null,
        data: {
            timestamp: new Date().toISOString(),
            code: positionError.code,
            message: positionError.message
        }
    }
    addToDataLayer(event)
})



//FORM SUBMISSION event

const dataLayerModelFormSubmission = {
    event: "submit form",
    eventType: "newsletter - submit form",
    indentifier: "form...",
    data: {
        values: {

        },
        timestamp: new Date().toISOString(),
    }
}

// Find news letter form
const newsletterFormDl = document.querySelector(".newsletter form")

// listen to submit event
newsletterFormDl.addEventListener("submit", (e) => {
    const target = e.target;

    const emailInput = e.target.querySelector("#newsletter-email")

    const event = {
        event: "submit form",
        eventType: "newsletter - submit form",
        indentifier: getIdentifier(target),
        data: {
            timestamp: new Date().toISOString(),
            // get relevant data for event
            // get email from form
            values: {
                email: emailInput.value       
            }
        }
    }

    // add evernt to datalayer
    addToDataLayer(event)
})