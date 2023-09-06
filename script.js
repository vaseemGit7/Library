const addButton = document.getElementById('addButton');
const submitButton = document.getElementById('submitButton');
const closeButton = document.getElementById('closeButton');

const dialogModal = document.getElementById('dialogModal');

addButton.addEventListener('click',(e) =>{
    e.preventDefault();
    dialogModal.showModal();
})

closeButton.addEventListener('click',(e)=>{
    e.preventDefault();
    dialogModal.close();
})

submitButton.addEventListener('click',(e)=>{
    e.preventDefault();
    addBookToLibrary();
})

const myLibrary = [];

function Book(title,author,pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function createBook(){
    const newBook = Object.create(Book);
    newBook.title = document.getElementById('titleInput').value;
    newBook.author = document.getElementById('authorInput').value;
    newBook.pages = document.getElementById('pagesInput').value;
    return newBook;
}

function addBookToLibrary(){
    myLibrary.push(createBook());
    showBooks();
}

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
