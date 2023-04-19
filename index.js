function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  //shorter way to return response and then send it to my renderBoks or passing to the DOM
  return fetch('https://anapioficeandfire.com/api/books')
  .then(res => res.json())
  .then(data => renderBooks(data))
  
  
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
