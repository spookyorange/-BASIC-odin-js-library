let library = []; 

function Book(name, pageCount, author) {
  this.name = name;
  this.pageCount = pageCount;
  this.author = author;
  this.read = false;
}

function addBookToLibrary(book) {
  library.push(book);
}


const book1 = new Book('Brave New World', 300, 'Aldous Huxley');
const book2 = new Book('Thus Said Zarathustra', 270, 'Friedrich Nietzsche');
const book3 = new Book('Us', 200, 'Yevgeni Zamyatin');

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);


const booksTable = document.querySelector('#books-table')

library.forEach(book => {
  let tableRow = document.createElement('tr');
  tableRow = booksTable.insertRow(-1);
  bookName = tableRow.insertCell([0]);
  pageCount = tableRow.insertCell([1]);
  author = tableRow.insertCell([2]);
  read = tableRow.insertCell([3]);

  bookName.textContent = book.name;
  pageCount.textContent = book.pageCount;
  author.textContent = book.author;
  read.textContent = book.read;
});


const newBookButton = document.querySelector('#new-book-button')
const newBookForm = document.querySelector('#newBookForm')
const createBookButton = document.querySelector('#createBookButton')


newBookButton.addEventListener('click', () => {
  newBookForm.classList.toggle('hidden')
})

createBookButton.addEventListener('click', (event) => {
  event.preventDefault();
  let name = document.querySelector('#name')
  let pageCount = document.querySelector('#page-count')
  let author = document.querySelector('#author')
  let newBook = new Book(name.value, pageCount.value, author.value)
  library.push(newBook)

  tableRow = booksTable.insertRow(-1);
  bookName = tableRow.insertCell([0]);
  pageCount = tableRow.insertCell([1]);
  author = tableRow.insertCell([2]);
  read = tableRow.insertCell([3]);

  bookName.textContent = newBook.name;
  pageCount.textContent = newBook.pageCount;
  author.textContent = newBook.author;
  read.textContent = newBook.read;

})

