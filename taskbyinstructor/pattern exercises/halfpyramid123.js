function hollowRectangle(a, b) {
    for (i = 1; i <= a; i++) {
      let row = "";
      for (j = 1; j <= i; j++) {
        
          row += j;
      
      }
      console.log(row);
    }
  }
  
  console.log(hollowRectangle(5, 5));