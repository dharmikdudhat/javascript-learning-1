function hollowRectangle(a, b) {
    for (i = 1; i <= a; i++) {
      let row = "";
      for (j = 1; j <= i; j++) {
        if (i === 1 || i === a || j === 1 || j === i) {
          row += j;
        } else {
          row += " ";
        }
      }
      console.log(row);
    }
  }
  
  console.log(hollowRectangle(5, 5));
  