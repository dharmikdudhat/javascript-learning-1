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

//console.table(library);

//Write a function addBookToLibrary(book) that takes a book object and adds it to the library array

function addBookToLibrary(book){
   library.push(book);
}

const book5 = createBook( "To Kill a Mockingbird","Harper Lee","978-0-06-112008-4");
addBookToLibrary(book5);

console.table(library);

//Write a function checkoutBook(isbn) that takes an ISBN number,
// searches the library for a book with that ISBN, and changes its checkedOut status to true.

function checkoutBook(isbn){
   for (i=0 ; i<library.length ; i++){
      if (library[i].book_ISBN === isbn){
         library[i].checkOutStatus = true;
         console.log("book is checked out");
         break;
      }else{
         console.log('no any book with that isbn exist');
      }
   }
}
 checkoutBook(111111);

 console.table(library);

 //Write a function returnBook(isbn) that takes an ISBN number,
 // searches the library for a book with that ISBN, and changes its checkedOut status to false.

 function returnBook(isbn){
   for (i=0 ; i<library.length ; ++i){
      if (library[i].book_ISBN === isbn){
         library[i].checkOutStatus = false;
         console.log("book is returned");
         break;
      }else{
         console.log('no any book with that isbn exist');
      }
   }
}

returnBook(111111);


console.table(library);

//Write a function findBooksByAuthor(author) that takes an author's name
// and returns an array of books written by that author.

function findBooksByAuthor(author){
   let bookByAuthor = [];
   for (let j in library ){
      if (library[j].book_author.toLowerCase() === author){
         bookByAuthor.push(library[j]);
         break;
      }else{
         console.log("no book with that author name exist");
      }

      
   }
   console.table(bookByAuthor);
}

findBooksByAuthor("mr.x");



