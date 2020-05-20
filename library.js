const bookShelf = document.querySelector(".bookShelf")
const formContainer = document.querySelector(".formContainer")
// query selectors for the form data
const bookTitleInput = document.querySelector("#bookTitleInput")
const bookAuthorInput = document.querySelector("#bookAuthorInput")
const bookPagesInput = document.querySelector("#bookPagesInput")
const bookReadInput = document.querySelector("#bookReadInput")
const newBookSubmitButton = document.querySelector("#newBookSubmitButton")

newBookSubmitButton.addEventListener("click", newBookFromForm);

let library = [
    new Book("The Hobbit", "J. R. R. Tolkien", 310, false),
    new Book("A Wizard of Earthsea", "Ursula K. Le Guin", 267, true),
    new Book("The Blade Itself", "Joe Abercrombie", 596, true)
];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}


function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    return library.push(newBook)
}

function newBookFromForm(){
let newBookTitle = bookTitleInput.value
let newBookAuthor = bookAuthorInput.value
let newBookPages = bookPagesInput.value
let newBookRead = (bookReadInput.checked) ? true: false
addBookToLibrary(newBookTitle, newBookAuthor, newBookPages, newBookRead)
render(library[library.length -1], (library.length - 1))
}


function render(item, index){
    const bookContainer = document.createElement('div');
	const bookTitle = document.createElement('div');
	const bookAuthor = document.createElement('div');
	const bookPages = document.createElement('div');
    const bookRead = document.createElement('div');
    
    bookTitle.textContent = item.title
    bookAuthor.textContent = item.author
    bookPages.textContent = `${item.pages} pages`
    bookRead.textContent = ((item.read)? "read" : "not read")
    

    bookContainer.classList.add("bookContainer")
    bookRead.classList.add((item.read) ? "bookRead" : "bookNotRead")

    bookContainer.dataset.libraryIndex = index


    bookContainer.appendChild(bookTitle)
    bookContainer.appendChild(bookAuthor)
    bookContainer.appendChild(bookPages)
    bookContainer.appendChild(bookRead)

    bookShelf.appendChild(bookContainer)
    console.log(item.title)
}

function renderLibrary(){
    library.forEach((book, index) => render(book, index));
}

renderLibrary();