const myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
function render() {
  let libraryEl = document.querySelector("#library");
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookEl = document.createElement("div");
    bookEl.innerHTML = `

    <div class="card-header">
      <h3 class="title">${book.title}</h3>
      <h5 class="author">${book.author}</h5>
    </div>
    <div class="card-body">
    <p class="pages">${book.pages} pages</p>
    <p class="read">${book.read ? "Read" : "Not Read"}</p>
    </div>
    `;
    libraryEl.appendChild(bookEl);
  }
  return libraryEl;
}

function addBookToLibrary() {
  // do stuff here
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").checked;
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  render();
}
let newBookBtn = document.querySelector("#new-book-btn");
newBookBtn.addEventListener("click", function () {
  let newBookForm = document.querySelector("#new-book-form");
  newBookForm.style.display = "block";
});
document.querySelector(".add-book").addEventListener("click", function (event) {
  event.preventDefault();
  addBookToLibrary();
});
