const addButton = document.getElementById('addButton');
const submitButton = document.getElementById('submitButton');
const closeButton = document.getElementById('closeButton');

const dialogModal = document.getElementById('dialogModal');
const form = document.querySelector('.form');

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
    form.reset();
    dialogModal.close();
})

const myLibrary = [];

function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function createBook(){
    const newBook = Object.create(Book);
    const title = document.getElementById('titleInput').value;
    const author = document.getElementById('authorInput').value;
    const pages = document.getElementById('pagesInput').value;

    if(title === ""){
        newBook.title ="Unknown";
    }
    if(author === ""){
        newBook.author ="Unknown";
    }
    if(pages === ""){
        newBook.pages = "Unknown";
    }
    else{
    newBook.title = title;
    newBook.author = author; 
    newBook.pages = pages;
    }
    newBook.read = document.getElementById('checkboxInput').checked;
    return newBook;
}

function addBookToLibrary(){
    myLibrary.push(createBook());
    render();
}

function render(){
    const booksContainer = document.querySelector('#booksContainer');
    booksContainer.innerHTML = ''; 
    
    for(let i=0;i<myLibrary.length;i++){
        displayCard(myLibrary[i]);
    }
}

function displayCard(book){
   const booksContainer = document.querySelector("#booksContainer");
   const docFrag = document.createDocumentFragment();
   const bookCard = document.createElement('div');
   const bookTitle = document.createElement('div');
   const bookAuthor = document.createElement('div');
   const bookPages = document.createElement('div');
   const readButton = document.createElement('button');
   const removeButton = document.createElement('button');

   bookCard.setAttribute('id',`book-${myLibrary.indexOf(book)}`);
   bookCard.classList.add('book-card');
   
   bookTitle.textContent = book.title;
   bookTitle.classList.add('book-title', 'book-info');
   bookCard.appendChild(bookTitle);

   bookAuthor.textContent = book.author;
   bookAuthor.classList.add('book-author', 'book-info');
   bookCard.appendChild(bookAuthor);

   bookPages.textContent = book.pages;
   bookPages.classList.add('book-pages', 'book-info');
   bookCard.appendChild(bookPages);

   if(book.read === true){
    readButton.textContent = "Read";
    readButton.classList.add('read-button');
   }
   if(book.read === false){
    readButton.textContent = "Not Read";
    readButton.classList.add('unread-button');
   }
   bookCard.appendChild(readButton);

   removeButton.textContent = "Remove";
   removeButton.classList.add('remove-button');
   bookCard.appendChild(removeButton);

   docFrag.appendChild(bookCard);
   booksContainer.appendChild(docFrag);

   removeButton.addEventListener('click',()=>{
    myLibrary.splice(myLibrary.indexOf(book),1);
    render();
   })

   readButton.addEventListener('click',()=>{
    book.read = !book.read;
    render();
   })
}
