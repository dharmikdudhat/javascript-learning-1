function fullPyramid(a) {
    for (i = 1; i < a; i++) {
      let row = "";
      
       for (let j = 1; j<=a-i;j++){ 
      
          row += " ";
        } 
  
        for (let k = 1;k<=2*i-1;k++){
          row+= k+i;
        }
     
      console.log(row);
    }
  }
  
  console.log(fullPyramid(5, 5));
  