function hollowRectangle(a) {
    let row = "";
    for (i = 1; i <= a; i++) {
      
     if(i==0 || i == a){
        row += '*';
     }else{
        row+= " ";
     }
     console.log(row);
  }
}
  console.log(hollowRectangle(5, 5));