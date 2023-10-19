function hollowRectangle(a, b) {
    for (i = 1; i <= a; i++) {
      let row = "";
      for (j = b; j >= i ; j--) {
        
          row += (b-j)+1;
      
      }
      console.log(row);
    }
  }
  
  console.log(hollowRectangle(5, 5));