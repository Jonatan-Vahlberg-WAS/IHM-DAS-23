// key=VALUE" // What a cookie looks like

const cookieKey = "hasAcceptedTerms" // The key we want to use for our cookie
document.cookie = `${cookieKey}=true` // Set the cookie

console.log(document.cookie) // Get all cookies as a string
const cookies = document.cookie.split("; ") // Get cookies as an array
const selectedCookie = cookies.find(cookie => { // Find the cookie we want
    return cookie.includes(cookieKey)
})
const selectedCookieValue = selectedCookie?.split("=")?.[1] // Get the value of the cookie

console.log(cookies) // Log the cookies
console.log(selectedCookie) // Log the selected cookie
console.log(selectedCookieValue, typeof selectedCookieValue) // Log the value of the cookie and its type
if(selectedCookieValue){ // If the cookie has a value
    const interpolatedCookieValue = selectedCookieValue === "true" // Convert the string to a boolean
    console.log(interpolatedCookieValue, typeof interpolatedCookieValue) // Log the value of the cookie and its type
}

