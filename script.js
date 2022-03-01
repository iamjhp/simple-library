const addBookBtn = document.getElementById("btn")
const addBookSubmitBtn = document.getElementById("add-btn")
const popUpForm = document.querySelector(".form-popup")
const libraryForm = document.querySelector(".form-container")
const libraryContainer = document.querySelector(".library-container")
const body = document.querySelector("body")

let myLibrary = []
let id = 0;

addBookBtn.addEventListener("click", () => {
    libraryForm.reset()
    popUpForm.style.display = "block"
})

addBookSubmitBtn.addEventListener("click", (e) => {
    if (!checkRequiredFormInputViaDOM()) {
        // not all required inputs are entered
        return
    }

    e.preventDefault() // prevents the page from reloading
    popUpForm.style.display = "none"

    addBookToLibary();
})

body.addEventListener("click", (e) => {
    closeFormPopUp(e)
})

function Book(title, author, pages, hasRead, id) {
    this.title = title
    this.author = author
    this.pages = pages
    this.hadRead = hasRead
    this.id = id
}

Book.prototype.getId = function() {
    console.log(this.id)
}

//myLibrary.filter(el => el.id == 2)

function addBookToLibary() {
    const newBookTitle = document.getElementById("title").value
    const newBookAuthor = document.getElementById("author").value
    const newBookPages = document.getElementById("pages").value
    const hasRead = document.getElementById("hasRead").checked
    const newBook = new Book(newBookTitle, newBookAuthor, newBookPages, hasRead, id)

    myLibrary.push(newBook)
    createBookCard(newBookTitle, newBookAuthor, newBookPages, hasRead, id)
    id++
}

function printAllBooks() {
    myLibrary.forEach(book => console.log(book))
}

// check if all form required inputs have been entered
function checkRequiredFormInputViaDOM() {
    let requiredForm = document.querySelector('form').querySelectorAll("[required]")
    for (let el of requiredForm) {
        if (!el.reportValidity()) {
            return false;
        }
    }
    return true;
}

function createBookCard(title, author, pages, hasRead, id) {
    // create a book-card div 
    const newDiv = document.createElement("div")
    newDiv.classList.add("book-card")
    newDiv.setAttribute("id", id)

    // append the newDiv to the library-container
    const libContainerDiv = document.querySelector(".library-container")
    libContainerDiv.appendChild(newDiv)

    // create the title-div
    const titleDiv = document.createElement("div")
    const titleContent = document.createTextNode(title)
    titleDiv.classList.add("title")
    titleDiv.appendChild(titleContent)
    newDiv.appendChild(titleDiv)

    // create the author-div
    const authorDiv = document.createElement("div")
    const authorContent = document.createTextNode(author)
    authorDiv.classList.add("author")
    authorDiv.appendChild(authorContent)
    newDiv.appendChild(authorDiv)

    // create the pages-div
    const pagesDiv = document.createElement("div")
    const pagesContent = document.createTextNode(pages)
    pagesDiv.classList.add(pages)
    pagesDiv.appendChild(pagesContent)
    newDiv.appendChild(pagesDiv)

    // create the read-button
    const readButtonDiv = document.createElement("div")
    const readButton = document.createElement("button")
    readButton.innerText = "Read"
    readButton.classList.add("read-button")
    readButton.classList.add("read-" + hasRead)
    readButtonDiv.appendChild(readButton)
    newDiv.appendChild(readButtonDiv)

    // create the remove-button
    const removeButtonDiv = document.createElement("div")
    const removeButton = document.createElement("button")
    removeButton.innerText = "Remove"
    removeButton.classList.add("remove-button")
    removeButtonDiv.appendChild(removeButton)
    newDiv.appendChild(removeButtonDiv)

    // add EventListener for remove-button
    addEventListenerForRemoveButton(removeButton, id)

}

function addEventListenerForRemoveButton(removeButton, id) {
    removeButton.addEventListener("click", () => {
        deleteBookCard(id)
    })
}

// close form popup window if the area outside the form or the "Add button" was pressed
function closeFormPopUp(e) {
    if(e.target != addBookBtn && !libraryForm.contains(e.target)) {
        // close popup window 
        popUpForm.style.display = "none"   
    }
}

function deleteBookFromLibrary() {
    
}

function deleteBookCard(id) {
    const bookCard = document.getElementById(id)
    libraryContainer.removeChild(bookCard)
}
