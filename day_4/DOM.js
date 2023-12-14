//! Getters
        // getElementById
        const title = document.getElementById("title")

        // querySelector
        const description = document.querySelector(
            ".description"
        )

        // querySelectorAll - gives nodelist (a lighter array of html elements)
        //const products = document.querySelectorAll(".product")

        const products = document.querySelector(".products")

        // getElementsByTagName
        const images = document.getElementsByTagName("img")

        const imagesArr = Array.from(images)

        // Edit elements
        if(title){
            title.textContent = `Dag 4 - ${new Date().toISOString()}`
            title.style.color = "red"
        }
        description.textContent = description.textContent.substring(1,100) + "..."

        imagesArr.forEach((image, index) => {
            image.style.filter = `grayscale(${index * 50}%)`
        })

        // Create element
       const productsSimple = [
        0,1,2,3,4,5,6,7,8,9,10
       ]
       
       const productsObj = [
        { title: "Apple", id: 0},
        { title: "Orange", id: 1},
        { title: "Pear", id: 2},
        { title: "Cherry", id: 3},
       ]

        function addProductToHtml(product) {
            const productEl = document.createElement("div")
            productEl.id = `product-${product.id}`
            productEl.classList.add("product")

            const productTitle = document.createElement("h3")
            productTitle.classList.add("product__title")
            productTitle.textContent = product.title

            const productButton = document.createElement("button")
            productButton.classList.add("product__button")
            productButton.textContent = "Buy"
            productButton.addEventListener("click",() => {
                productButton.textContent = "In cart"
                productButton.classList.add("product__button--clicked")
            })

            productEl.appendChild(productTitle)
            productEl.appendChild(productButton)

            products.appendChild(productEl)
        }

        productsObj.forEach(p => {
            addProductToHtml(p)
        })

        //1. change the background color of the description
        //SV. Ändra bakgrundsfärgen på description
        description.style.backgroundColor = "limegreen"

        //2. change the title case to uppercase
        //SV. Ändra titeln till uppercase
        
        //Solution 1: styling
        title.style.textTransform = "uppercase"

        //solution 2: change the text
        title.textContent = title.textContent.toUpperCase()
        
        //3. create a new paragraph with the text "Last updated: today's date" then add it to the document.body
        //SV. Skapa en ny paragraf med texten "Last updated: today's date" sen lägg till den i document.body
        const today = new Date()
        const timestampToday = `${today.getFullYear()} ${today.getMonth()+1} ${today.getDate()}`
        const lastUpdatedEl = document.createElement("p")
        lastUpdatedEl.style.fontWeight = 600
        lastUpdatedEl.textContent = `Last Updated: ${timestampToday}`
        title.insertAdjacentElement("afterend", lastUpdatedEl)
        
        //4. create a button with the text "Click me" when clicked it changes the text of the title to "I was clicked"
        //SV. Skapa en knapp med texten "Click me" som när den klickas på ändrar titeln till "I was clicked"
        const clickButton = document.querySelector(".clickable")
        clickButton.addEventListener("click", (e) => {
            //solution 1
            clickButton.textContent = "I was clicked"

            //Solution 2
            e.target.textContent = "I was clicked"
        })

