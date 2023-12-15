
// Get the contact us div
const contactDiv = document.getElementById("contact-us");

// Step 2 - All information is searchable on the web
// Add a date input to the form
// Add a tos checkbox (terms of service)
// Add a ticket id input field (number)
// Add a message text area not input
// Change the bank to a select instead

// Create data for form fields
const fields = [
    { name: "firstName", type: "text", placeholder: "First name"},
    { name: "lastName", type: "text", placeholder: "Last name"},
    { name: "email", type: "email", placeholder: "Email"},
    { name: "bank", type: "select", placeholder: "Select Bank", options: [
        {name: "Select Bank", value: ""},
        {name: "SEB", value: "seb"},
        {name: "Nordea", value: "nordea"},
        {name: "Swedbank", value: "swedbank"},
        {name: "Klarna", value: "klarna"},
    ]},
    { name: "date", type: "date", placeholder: "Enter date"},
    { name: "tos", type: "checkbox", placeholder: "Accept terms of service"},
    { name: "ticketId", type: "number", placeholder: "Enter ticket id (optional)"},
    { name: "message", type: "textarea", placeholder: "Enter message"}

]
// Step 1
// Create form for contact us 
const contactForm = document.createElement("form");

// Create submit button
const contactFormSubmitBtn = document.createElement("button")

// Add text to submit button
contactFormSubmitBtn.textContent = "Submit"

function createOptions(select, options = []) {
    options.forEach(option => {
        const optionEl = document.createElement("option")
        optionEl.value = option.value
        optionEl.textContent = option.name
        select.appendChild(optionEl)
    })
} 

function createField(field = {
    name: "", type: "", placeholder: ""
}) {
    let fieldInput = document.createElement("input");
    switch(field.type){
        case "select": 
            fieldInput = document.createElement("select")
            fieldInput.name = field.name
            createOptions(fieldInput, field.options)
            return fieldInput
        case "textarea":
            fieldInput = document.createElement("textarea")
            fieldInput.name = field.name
        default: 
            fieldInput.name = field.name
            fieldInput.type = field.type
            fieldInput.placeholder = field.placeholder
            return fieldInput
    }
}

// Add fields to form
 fields.forEach(field => {
    // Create wrapper
    const wrapper = document.createElement("div")

    // Create label
    const label = document.createElement("label")
    label.textContent = field.placeholder;
    
    // Create input with selected field data
    const fieldInput = createField(field)

    // Add label and input to wrapper
    wrapper.appendChild(label)
    wrapper.appendChild(document.createElement("br"))
    wrapper.appendChild(fieldInput)

    // Add wrapper to form
    contactForm.appendChild(wrapper)
 })

// Listen to form submit event
contactForm.addEventListener("submit", (e) => {
    // Prevent default behaviour which is to refresh the page with query params
    e.preventDefault()

    // Get all input fields
    const fieldInputs = e.target.querySelectorAll("input")
    const fieldSelects = e.target.querySelectorAll("select")
    const textAreas = e.target.querySelectorAll("textarea")
    const data = {}
    
    // Loop through all fields and add name and value to data object
    fieldInputs.forEach(element => {
        console.log("element type", element.type)
        if(element.type === "checkbox"){
            data[element.name] = element.checked
            console.log(element.checked)
        }
        else if(element.type === "number"){
            data[element.name] = Number(element.value)
        }
        else if(element.type === "date"){
            data[element.name] = new Date(element.value)
        }
        else {
            data[element.name] = element.value
        }
    })
    fieldSelects.forEach(element => {
        data[element.name] = element.value
    })

    textAreas.forEach(element => {
        
        data[element.name] = element.value
    })

    console.log({
        type: "submit",
        subType: "contactForm",
        data
    })
})

// get data from event with name of each field and value
// Insert into HTML
contactForm.appendChild(contactFormSubmitBtn)
contactDiv.appendChild(contactForm)



// Get all data correctly