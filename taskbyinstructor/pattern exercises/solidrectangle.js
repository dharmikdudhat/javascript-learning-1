function soligRectangle(a,b) {
  for (i = 0; i < a; i++) {
    let row = "";
    for (j = 0; j < b; j++) {
        
      row += "*";
    }
    console.log(row);
  }
}

console.log(soligRectangle(5,5));
