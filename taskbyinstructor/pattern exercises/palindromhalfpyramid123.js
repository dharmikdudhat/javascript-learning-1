function hollowRectangle(a, b) {
    for (let i = 0; i <= a; i++) {
      let row = "";
      let j ; 
      for (j = 0; j <= i; j++) {
        
          row += j+1;
      
      }
      for(let k = j;k>1;k-- ){
        row += k-1;
      }
      console.log(row);
    }
  }
  
  console.log(hollowRectangle(5, 5));