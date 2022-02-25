const newBookBtn = document.getElementById("btn")
const addBtn = document.getElementById("add-btn")
const popUpForm = document.querySelector(".form-popup")

newBookBtn.addEventListener("click", () => popUpForm.style.display = "block")
addBtn.addEventListener("click", () => popUpForm.style.display = "none")

let myLibrary = ["Book1", "Book2"]

function Book(title, author, pages, hasRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.hadRead = hasRead
}

function addBookToLibary() {

}

function printAllBooks() {
    myLibrary.forEach(book => console.log(book))
}


printAllBooks()