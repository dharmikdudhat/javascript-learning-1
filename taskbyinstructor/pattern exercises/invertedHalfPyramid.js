function hollowRectangle(a) {
    for (i = 1; i <= a; i++) {
      let row = "";
      for (j = b; j >= i ; j--) {
        
          row += "*";
      
      }
      console.log(row);
    }
  }
  
  console.log(hollowRectangle(5, 5));