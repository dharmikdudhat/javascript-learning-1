/*task 1 Create a function createBook(title, author, isbn)
that takes in a book's title, author, 
and ISBN and returns an object with the given details 
and a default checkedOut status of false.*/

// Advanced task 1 part 1 : Each book can only be checked out a certain number of times. 
//Add a property checkoutCount to each book and a constant MAX_CHECKOUTS (e.g., set to 3).
//Advanced task 1 part 3 Allow users to rate books. Each book should have a rating property, which is an array of numbers. 
'use strict';

function createBook(title, author, ISBN){
     let book = {
        title,
        author,
        ISBN,
        checkOutStatus : false,
        checkOutCount : 0,
        dueDate : null,
        ratings : [],
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

// Advanced task 1 part 1 : When a book is checked out using checkoutBook(isbn), increment the count. 
//If it exceeds MAX_CHECKOUTS, don’t allow the checkout and inform the user

function checkoutBook(isbn){
   const bookToCheckOut = library.find((book) => book.ISBN === isbn);

      if (bookToCheckOut.ISBN === isbn){
         bookToCheckOut.checkOutCount += 1;
         if (bookToCheckOut.checkOutCount <= MAX_CHECKOUTS){
            if(bookToCheckOut.checkOutStatus === false){
               bookToCheckOut.checkOutStatus = true;
               const dueDate = new Date();
               dueDate.setDate(dueDate.getDate() + 1);
               //this.dueDate = dueDate;
               console.log("book is checked out");
            }else{
               console.log("book has been already cheched out so try latter");
            }
         }else{
         console.log(`This book is already been checked ${MAX_CHECKOUTS+1}`);
         bookToCheckOut.checkOutCount -= 1;
         bookToCheckOut.checkOutStatus = false;
          }
      }else{
         console.log('no any book with that isbn exist');
      }
    }

 checkoutBook(111111);
//  checkoutBook(111111, "2012-01-15");
//  checkoutBook(111111, "2012-01-16");
//  checkoutBook(111111, "2012-01-12");
//  checkoutBook(111111, "2012-01-12");

 console.table(library);

 /* task 5 Write a function returnBook(isbn) that takes an ISBN number,
 searches the library for a book with that ISBN, and changes its checkedOut status to false.*/

 function returnBook(isbn){
   const bookToReturn = library.find((book) => book.ISBN === isbn);
      if (bookToReturn.ISBN === isbn){
         if(bookToReturn.checkOutStatus === true){
            bookToReturn.checkOutStatus = false;
            console.log("book is returned");
         }else{
            console.log("book is already taken by someone");
         }
      }else{
         console.log('no any book with that isbn exist');
      }
   
}

returnBook(111111);


console.table(library);

/* task 6 Write a function findBooksByAuthor(author) that takes an author's name
 and returns an array of books written by that author.*/

function findBooksByAuthor(author){
   const bookOfAuthor = library.filter((book) => book.author === author);
  
}

const bookByAuthor = findBooksByAuthor("mr.x");
console.table(bookByAuthor);

// Advanced task 1 part 2 : Add a property dueDate to each book that gets set when a book is checked out. 
//Create a function listOverdueBooks() that returns books that are past their due date.

checkoutBook(111111);
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

// Advanced task 1 part 3 Create functions rateBook(isbn, rating) to add a rating (from 1 to 5) and getAverageRating(isbn) to calculate a book's average rating.

function rateBook(isbn , rating){
   const bookToRate = library.find((book) => book.ISBN === isbn);
   if (bookToRate.ISBN === isbn){
      if (rating >= 1 && rating <= 5){
         bookToRate.ratings.push(rating);
         console.log(`you have rated ${rating} to ${bookToRate.title}.`);
      }else{
         console.log("enter between 1 to 5 to rate a book");
      }
   }else{
      console.log('no such book exist');
   }
   console.table(bookToRate.ratings);
   //return ratings;
}

rateBook(111111 , 5);
rateBook(111111 , 3);
rateBook(111111 , 4);
rateBook(111111 , 2);
function getAverageRating(isbn) {
   const bookToBeRated = library.find((book) => book.ISBN === isbn);
   
   const averageRating = bookToBeRated.ratings.reduce((sum, rating) => sum + rating, 0) / bookToBeRated.ratings.length;
   
   console.log(averageRating);
   }

getAverageRating(111111);

// Write a function searchBooks(query) where query is a string.
// The function should return books where the title or author matches (or partially matches) the query. 
//Implement this search in a case-insensitive manner.

function searchBooks(query){
   const lowercaseQuery = query.toLowerCase();
   const matchedBooks = [];
   for (let i=0 ;i<library.length;i++){
      if (library[i].author.includes(lowercaseQuery)){
         matchedBooks.push({...library[i]});
      }else if(library[i].title.includes(lowercaseQuery)){
         matchedBooks.push({...library[i]});
      }else{
      console.log("book not found");
      }
   }
   console.table(matchedBooks);
}

searchBooks("mr.x");