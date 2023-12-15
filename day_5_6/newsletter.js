
// Creates a newsletter element that sends a email request on submit
const newsletter = document.querySelector(".newsletter")

// Create Form


const newsletterForm = document.createElement("form")
const newsLetterEmailInput = document.createElement("input")
const newsLetterButton = document.createElement("button")

newsLetterEmailInput.name = "email";
newsLetterEmailInput.id = "newsletter-email"
newsLetterEmailInput.type = "email"
newsLetterEmailInput.placeholder = "Enter your mail"
newsLetterEmailInput.required = true;

newsLetterButton.textContent = "Subscribe"
newsLetterButton.type = "submit"

newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault() // Stops event from changing page
    const fields = e.target.querySelectorAll("input")
    const data = {}
    fields.forEach(field => {
        //name
        const fieldName = field.name
        //value
        const fieldValue = field.value
        data[fieldName] = fieldValue
    })
    console.log("Newsletter was submitted with", data)
    alert("Thank you for subscribing to our news letter")
    newsletter.removeChild(newsletterForm)
})

newsletterForm.appendChild(newsLetterEmailInput)
newsletterForm.appendChild(newsLetterButton)

newsletter.appendChild(newsletterForm)


// const newsletterForm = newsletter.querySelector(".newsletter-form")
// const newsletterEmailInput = newsletterForm.querySelector("#newsletter-email")

// console.log(newsletterForm, newsletterEmailInput)

// //Input inputevent
// newsletterEmailInput.addEventListener("input", (event) => {
//     console.log("Input element from target", event.target)
//     console.log("Email current value", event.target.value)
// })

// //form on submit
// newsletterForm.addEventListener("submit", (event) => {
//     const fields = event.target.querySelectorAll("input")
//     event.preventDefault() // Stops event from changing page
//     console.log("newsletter was submitted", fields)
//     const data = {}
//     fields.forEach(field => {
//         //name
//         const fieldName = field.name
//         //value
//         const fieldValue = field.value
//         data[fieldName] = fieldValue
//     })
//     console.log("FORM DATA is: ",data)
// })