const myLibrary = [];

function Book(title,author,pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function getUserInput(){
    const newBook = Object.create(Book);
    newBook.title = prompt("Enter the title");
    newBook.author = prompt("Enter author name");
    newBook.pages = parseInt(prompt("Enter the number of pages"));
    return newBook;
}

function addBookToLibrary(){
    myLibrary.push(getUserInput());
    console.clear();
    showBooks();
}

// for(let i=0;i<2;i++){
//     addBookToLibrary();
// }

function showBooks(){
    for(let i=0;i<myLibrary.length;i++){
        displayInfo(myLibrary[i]);
    }
}


function displayInfo(book){
    for(const key in book){
        console.log("key: "+key+" value: "+book[key]);
    }
}
