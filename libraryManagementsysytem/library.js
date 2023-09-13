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
 
for (let key in book){
    console.log(book[key]);
}
