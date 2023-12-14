
// Get the contact us div
const contactDiv = document.getElementById("contact-us");

// Create data for form fields
const fields = [
    { name: "firstName", type: "text", placeholder: "First name"},
    { name: "lastName", type: "text", placeholder: "Last name"},
    { name: "email", type: "email", placeholder: "Email"},
    { name: "bank", type: "text", placeholder: "Bank"},
]
// Step 1
// Create form for contact us 
const contactForm = document.createElement("form");

// Create submit button
const contactFormSubmitBtn = document.createElement("button")

// Add text to submit button
contactFormSubmitBtn.textContent = "Submit"

// Add fields to form
 fields.forEach(field => {
    // Create wrapper
    const wrapper = document.createElement("div")

    // Create label
    const label = document.createElement("label")
    label.textContent = field.placeholder;
    
    // Create input with selected field data
    const fieldInput = document.createElement("input");
    fieldInput.name = field.name
    fieldInput.type = field.type
    fieldInput.placeholder = field.placeholder

    // Add label and input to wrapper
    wrapper.appendChild(label)
    wrapper.appendChild(document.createElement("br"))
    wrapper.appendChild(fieldInput)

    // Add wrapper to form
    contactForm.appendChild(wrapper)
 })   
// Listen to form submit event
contactForm.addEventListener("submit", (e) => {
    // Prevent default behaviour
    e.preventDefault()

    // Get all input fields
    const fieldElements = e.target.querySelectorAll("input")
    const data = {}
    
    // Loop through all fields and add name and value to data object
    fieldElements.forEach(element => {
        data[element.name] = element.value
    })
})

// get data from event with name of each field and value
// Insert into HTML
contactForm.appendChild(contactFormSubmitBtn)
contactDiv.appendChild(contactForm)

// Step 2 - All information is searchable on the web
// Add a date input to the form
// Add a tos checkbox (terms of service)
// Add a ticket id input field (number)
// Add a message text area not input
// Change the bank to a select instead

// Get all data correctly