const bookShelf = document.querySelector(".bookShelf")

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

function render(item, index){
    const bookContainer = document.createElement('div');
	const bookTitle = document.createElement('div');
	const bookAuthor = document.createElement('div');
	const bookPages = document.createElement('div');
    const bookRead = document.createElement('div');
    
    bookTitle.textContent = item.title
    bookAuthor.textContent = item.author
    bookPages.textContent = item.pages
    bookRead.textContent = item.read
    

    bookContainer.classList.add("bookContainer")
    bookContainer.dataset.libraryIndex = index
    bookContainer.appendChild(bookTitle)
    bookContainer.appendChild(bookAuthor)
    bookContainer.appendChild(bookPages)
    bookContainer.appendChild(bookRead)

    bookShelf.appendChild(bookContainer)
    console.log(item.title)
}
console.table(library)

library.forEach((book, index) => render(book, index));