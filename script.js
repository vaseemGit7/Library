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

function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function createBook(){
    const newBook = Object.create(Book);
    newBook.title = document.getElementById('titleInput').value;
    newBook.author = document.getElementById('authorInput').value;
    newBook.pages = document.getElementById('pagesInput').value;
    newBook.read = document.getElementById('checkboxInput').checked;
    return newBook;
}

function addBookToLibrary(){
    myLibrary.push(createBook());
    clearBooks();
    showBooks();
}

function clearBooks(){
    const booksContainer = document.querySelector('#booksContainer');
    booksContainer.innerHTML = ''; 
}

function showBooks(){
    for(let i=0;i<myLibrary.length;i++){
        displayCard(myLibrary[i]);
        console.log(myLibrary[i]);
        console.log('called :' + i);
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
    clearBooks();
    showBooks();
   })

   readButton.addEventListener('click',()=>{
    book.read = !book.read;
    clearBooks();
    showBooks();
   })
}
