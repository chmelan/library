const bookTable = document.querySelector(".bookTable")

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

function render(book){
    const row = document.createElement('tr');
	const bookTitle = document.createElement('th');
	const bookAuthor = document.createElement('th');
	const bookPages = document.createElement('th');
    const bookRead = document.createElement('th');
    

    bookTitle.textContent = book.title
    bookAuthor.textContent = book.author
    bookPages.textContent = book.pages
    bookRead.textContent = book.read
    
    bookTable.appendChild(row)
    row.appendChildren(
		bookTitle,
		bookAuthor,
		bookPages,
		bookRead
    )
    
}
console.table(library)
library.forEach(render(Book));