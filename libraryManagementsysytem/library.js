/*task 1 Create a function createBook(title, author, isbn)
that takes in a book's title, author, 
and ISBN and returns an object with the given details 
and a default checkedOut status of false.*/

// Advanced task 1 part 1 : Each book can only be checked out a certain number of times. Add a property checkoutCount to each book and a constant MAX_CHECKOUTS (e.g., set to 3). 

function createBook(book_title, book_author, book_ISBN){
     let book = {
        book_title,
        book_author,
        book_ISBN,
        checkOutStatus : false,
        checkOutCount : 0,
        dueDate : null,
     }
     console.table(book);

     return book;   
}

const MAX_CHECKOUTS = 3;
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

//task 3 Write a function addBookToLibrary(book) that takes a book object and adds it to the library array

function addBookToLibrary(book){
   library.push(book);
}

const book5 = createBook( "To Kill a Mockingbird","Harper Lee","978-0-06-112008-4");
addBookToLibrary(book5);

console.table(library);

/* task 4 Write a function checkoutBook(isbn) that takes an ISBN number,
searches the library for a book with that ISBN, and changes its checkedOut status to true.*/

// Advanced task 1 part 1 : When a book is checked out using checkoutBook(isbn), increment the count. If it exceeds MAX_CHECKOUTS, don’t allow the checkout and inform the user

function checkoutBook(isbn, dueDate){
   for (i = 0 ; i < library.length ; i++){
      if (library[i].book_ISBN === isbn){
         library[i].checkOutCount += 1;
         if (library[i].checkOutCount <= MAX_CHECKOUTS){
         library[i].checkOutStatus = true;
         library[i].dueDate = dueDate;
         console.log("book is checked out");
       
         break;
      }else{
         console.log(`This book is already been checked ${MAX_CHECKOUTS+1}`);
         library[i].checkOutCount -= 1;
         library[i].checkOutStatus = false;
         break;
      }
      break;
      }else{
         console.log('no any book with that isbn exist');
      }
   }
}
 checkoutBook(111111, "2012-01-12");
 checkoutBook(111111, "2012-01-15");
 checkoutBook(111111, "2012-01-16");
 checkoutBook(111111, "2012-01-12");
 checkoutBook(111111, "2012-01-12");

 console.table(library);

 /* task 5 Write a function returnBook(isbn) that takes an ISBN number,
 searches the library for a book with that ISBN, and changes its checkedOut status to false.*/

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

/* task 6 Write a function findBooksByAuthor(author) that takes an author's name
 and returns an array of books written by that author.*/

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

// Add a property dueDate to each book that gets set when a book is checked out. Create a function listOverdueBooks() that returns books that are past their due date.


function listOverdueBooks() {
   const currentDate = new Date();
   const overdueBooks = [];
 
   for (const book of library) {
     if (book.dueDate && currentDate > new Date(book.dueDate)) {
       overdueBooks.push(book);
     }
   }

   console.table(overdueBooks);
 
   return overdueBooks;
 }
 
listOverdueBooks();



