function hollowRectangle(a, b) {
    for (i = 1; i <= a; i++) {
      let row = "";
      for (j = b; j >= i ; j--) {
        if (i === 1  || i === a - 1|| j === b || j === i ) {
            row += "*";
          } else {
            row += " ";
          }
      }
      console.log(row);
    }
  }
  
  console.log(hollowRectangle(5, 5));