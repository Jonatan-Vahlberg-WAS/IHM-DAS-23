
// Creates a newsletter element that sends a email request on submit
const newsletter = document.querySelector(".newsletter")

// // Create Form
// const newsletterForm = document.createElement("form")
// const newsLetterEmailInput = document.createElement("input")

const newsletterForm = newsletter.querySelector(".newsletter-form")
const newsletterEmailInput = newsletterForm.querySelector("#newsletter-email")

console.log(newsletterForm, newsletterEmailInput)

//Input inputevent
newsletterEmailInput.addEventListener("input", (event) => {
    console.log("Input element from target", event.target)
    console.log("Email current value", event.target.value)
})

//form on submit
newsletterForm.addEventListener("submit", (event) => {
    const fields = event.target.querySelectorAll("input")
    event.preventDefault() // Stops event from changing page
    console.log("newsletter was submitted", fields)
    const data = {}
    fields.forEach(field => {
        //name
        const fieldName = field.name
        //value
        const fieldValue = field.value
        data[fieldName] = fieldValue
    })
    console.log("FORM DATA is: ",data)
})