
const websitePathname = document.location.pathname;
const navBarList = document.querySelector("#navbar #navbar-list");

const links = [
    { title: "Home", href: "/"},
    { title: "About", href: "/day_5_6/about.html"},
    { title: "Contact", href: "/day_5_6/contact.html"},
    { title: "Directions", href: "/day_5_6/directions.html"},
    { title: "Menu", href: "/day_5_6/menu.html"},
]

//Creating elemnts
links.forEach(link => {
    const listItem = document.createElement("li")

    const linkEl = document.createElement("a")
    linkEl.textContent = link.title
    linkEl.setAttribute("href", link.href)

    //Add active class
    if(websitePathname === link.href){
        linkEl.classList.add("active")
    }

    listItem.appendChild(linkEl)
    navBarList.appendChild(listItem)
})