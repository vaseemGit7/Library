const myLibrary = [];

function Book(title,author,pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function getUserInput(){
    const book = Object.create(Book);
    book.title = prompt("Enter the title");
    book.author = prompt("Enter author name");
    book.pages = parseInt(prompt("Enter the number of pages"));
    return book;
}


function addBookToLibrary(){
    return myLibrary.push(getUserInput());
}

addBookToLibrary();
addBookToLibrary();
addBookToLibrary();

console.log(myLibrary);
