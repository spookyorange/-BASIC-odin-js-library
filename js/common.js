let library = []; 

let bookCount = 0;

function Book(name, pageCount, author) {
  this.name = name;
  this.pageCount = pageCount;
  this.author = author;
  this.read = false;
}

function addBookToLibrary(book) {
  library.push(book);
  book.bookCount = bookCount
  bookCount += 1
}


const book1 = new Book('Brave New World', 300, 'Aldous Huxley');
addBookToLibrary(book1);

const book2 = new Book('Thus Said Zarathustra', 270, 'Friedrich Nietzsche');
addBookToLibrary(book2);

const book3 = new Book('Us', 200, 'Yevgeni Zamyatin');

addBookToLibrary(book3);


const booksTable = document.querySelector('#books-table')

library.forEach(book =>  {
  let tableRow = document.createElement('tr');
  tableRow = booksTable.insertRow(-1);
  tableRow.setAttribute("data-row", booksTable.rows.length)
  dataRow = booksTable.rows.length
  bookName = tableRow.insertCell([0]);
  pageCount = tableRow.insertCell([1]);
  author = tableRow.insertCell([2]);
  read = tableRow.insertCell([3]);
  deleteButton = tableRow.insertCell([4]);
  readButton = tableRow.insertCell([5]);

  bookName.textContent = book.name;
  pageCount.textContent = book.pageCount;
  author.textContent = book.author;
  read.textContent = book.read

  deleteButton.innerHTML = "<button>delete</button>"
  deleteButton.addEventListener('click', () => {
    tableRow.remove()
  })

  readButton.innerHTML = "<button>read</button>"
  readButton.addEventListener('click', () => {
    if (book.read === false) {
      book.read = true
      booksTable.rows[book.bookCount + 1].cells[3].textContent = book.read 
    }
    else {
      book.read = false
      booksTable.rows[book.bookCount + 1].cells[3].textContent = book.read
    }
  })
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
  addBookToLibrary(newBook)

  tableRow = booksTable.insertRow(-1);
  tableRow.setAttribute("data-row", booksTable.rows.length)
  dataRow = booksTable.rows.length
  newBook.dataRow = booksTable.rows.length
  bookName = tableRow.insertCell([0]);
  pageCount = tableRow.insertCell([1]);
  author = tableRow.insertCell([2]);
  read = tableRow.insertCell([3]);
  deleteButton = tableRow.insertCell([4]);
  readButton = tableRow.insertCell([5]);



  bookName.textContent = newBook.name;
  pageCount.textContent = newBook.pageCount;
  author.textContent = newBook.author;
  read.textContent = newBook.read;
  deleteButton.innerHTML = "<button>delete</button>"
  deleteButton.addEventListener('click', () => {
    document.querySelector(`[data-row='${newBook.dataRow}']`).remove()
  })

  readButton.innerHTML = "<button>read</button>"
  readButton.addEventListener('click', () => {
    if (newBook.read === false) {
      newBook.read = true
      booksTable.rows[newBook.bookCount + 1].cells[3].textContent = newBook.read
    }
    else {
      newBook.read = false
      booksTable.rows[newBook.bookCount + 1].cells[3].textContent = newBook.read
    }
  })
})

