let arr = [7,1,5,6,4,3,2];
function find(array) {
    
    let min = array[0];
    let Max = array[0];
    
  
    for (let i = 1; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
       
      }
    //   function x(min){
        
    //     return min.value;
    //    }
    }

    // let index11 = array.indexOf(min);
    // console.log(index11);
  
   
    for (let j = array.indexOf(min); j < array.length; j++) {
      if (array[j] > min && array[j] > Max) {
        Max = array[j];
      }
    }

    let result = Max - min;
    Max = array[array.indexOf(min) + 1];
    result = result - Max;

    console.log(result);

    
   
    
}

find(arr);

// console.log(arr[0]);