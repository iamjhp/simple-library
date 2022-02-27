const addBookBtn = document.getElementById("btn")
const addBookSubmitBtn = document.getElementById("add-btn")
const popUpForm = document.querySelector(".form-popup")

addBookBtn.addEventListener("click", () => popUpForm.style.display = "block")
addBookSubmitBtn.addEventListener("click", (e) => {
    if (!checkRequiredFormInputViaDOM()) {
        // not all required inputs are entered
        return
    }

    e.preventDefault() // prevents the page from reloading
    popUpForm.style.display = "none"

    addBookToLibary();
}) 


//popUpForm.style.display = "none")

let myLibrary = []


function Book(title, author, pages, hasRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.hadRead = hasRead
}

const book1 = new Book("ABC", "Hans Peter", 25, false)
const book2 = new Book("DEF", "Thomas Hey", 3000, true)
myLibrary.push(book1)
myLibrary.push(book2)

function addBookToLibary() {
    const newBookTitle = document.getElementById("title").value
    const newBookAuthor = document.getElementById("author").value
    const newBookPages = document.getElementById("pages").value
    const hasRead = document.getElementById("hasRead").checked

    const newBook = new Book(newBookTitle, newBookAuthor, newBookPages, hasRead)

    myLibrary.push(newBook)

    console.log(myLibrary)
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

function createBookCard() {
    
}

