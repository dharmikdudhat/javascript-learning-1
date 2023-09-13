/*task 1 Create a function createBook(title, author, isbn)
that takes in a book's title, author, 
and ISBN and returns an object with the given details 
and a default checkedOut status of false.*/

function createBook(book_title, book_author, book_ISBN){
     let book = {
        book_title,
        book_author,
        book_ISBN,
        checkOutStatus : false,
     }
     console.table(book);

     return book;   
}

const book1 = createBook("Story of my life", "Mr.x", 111111);
const book2 = createBook("nodejs", "Mr.y", 222222);
const book3 = createBook("javascript", "Mr.z", 333333);
const book4 = createBook("script", "Mr.w", 444444);

//task 2 Create an array library that will store all the book objects.
 
let library = [];

library.push(book1);
library.push(book2);
library.push(book3);
library.push(book4);

console.table(library);

function addBookToLibrary(book){
    
}