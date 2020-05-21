const bookShelf = document.querySelector(".bookShelf")
const formContainer = document.querySelector("#formContainer")
const addNewBookFormButton = document.querySelector("#addNewBookFormButton")

// query selectors for the form data

addNewBookFormButton.addEventListener("click", renderNewBookForm);

let library = [
    new Book("The Hobbit", "J. R. R. Tolkien", 310, false),
    new Book("A Wizard of Earthsea", "Ursula K. Le Guin", 267, true),
    new Book("The Blade Itself", "Joe Abercrombie", 596, true)
];
//book object constructor
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

//Adds new book object into the library array
function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    return library.push(newBook)
}

function newBookFromForm(){//creates a new book object in the library from user input 
//These get the values from the form 
const newBookTitle = document.querySelector("#bookTitleInput").value
const newBookAuthor = document.querySelector("#bookAuthorInput").value
const newBookPages = document.querySelector("#bookPagesInput").value
const newBookRead  = (document.querySelector("#bookReadInput").checked)? true: false
//input sanitising
if (newBookTitle === "" || newBookAuthor === "" || newBookPages === ""){
    return alert("Please fill out all forms!")
}
addBookToLibrary(newBookTitle, newBookAuthor, newBookPages, newBookRead)
render(library[library.length -1], (library.length - 1))//appends the new book onto the bookshelf
//removes the input form and adds the new book form button back in
formContainer.innerHTML = `<button id="addNewBookFormButton">Add New Book!</button>` 
const addNewBookFormButton = document.querySelector("#addNewBookFormButton")
addNewBookFormButton.addEventListener("click", renderNewBookForm);
}

function renderNewBookForm(){ //creates a new book form
formContainer.innerHTML= `<div class="appendedFormContainer"><label for="bookTitleInput">Book Title:</label>
<input type= "text" id="bookTitleInput" name="bookTitleInput">
<label for="bookAuthorInput">Book Author:</label>
<input type= "text" id="bookAuthorInput" name="bookAuthorInput">
<label for="bookPagesInput">Number of Pages:</label>
<input type= "text" id="bookPagesInput" name="bookPagesInput">
<label for="bookReadInput">Read</label>
<input type="checkbox" id="bookReadInput" name="bookReadInput" value="read">
<button id="newBookSubmitButton">Submit</button></div>`
//adds an event listener that allow the user to create a new book object from the form
const newBookSubmitButton = document.querySelector("#newBookSubmitButton")
newBookSubmitButton.addEventListener("click", newBookFromForm);
}


function render(item, index){//renders a book object in html
    const bookContainer = document.createElement("div");
	const bookTitle = document.createElement("div");
	const bookAuthor = document.createElement("div");
	const bookPages = document.createElement("div");
    const bookRead = document.createElement("div");
    const deleteBookButton = document.createElement("button")
    
    bookTitle.textContent = item.title
    bookAuthor.textContent = item.author
    bookPages.textContent = `${item.pages} pages`
    bookRead.textContent = ((item.read)? "read" : "not read")
    deleteBookButton.textContent = "Delete"

    bookContainer.classList.add("bookContainer")
    bookRead.classList.add((item.read) ? "bookRead" : "bookNotRead")
    deleteBookButton.classList.add("deleteBookButton")

    deleteBookButton.addEventListener("click", deleteBook)
    deleteBookButton.dataset.libraryIndex = (index)


    bookContainer.appendChild(bookTitle)
    bookContainer.appendChild(bookAuthor)
    bookContainer.appendChild(bookPages)
    bookContainer.appendChild(bookRead)
    bookContainer.appendChild(deleteBookButton)

    bookShelf.appendChild(bookContainer)
    console.log(item.title)
}

function deleteBook(){
    let bookIndex = event.target.dataset.libraryIndex
    library.splice(bookIndex, 1);
    removeAllChildren(bookShelf);
    renderLibrary();
}
function renderLibrary(){
    library.forEach((book, index) => render(book, index));
}

function removeAllChildren(parentNode){
    while (parentNode.firstChild) {
        parentNode.removeChild(parentNode.lastChild);
    }
}


renderLibrary();