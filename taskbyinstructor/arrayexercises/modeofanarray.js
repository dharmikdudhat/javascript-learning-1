
// Write a function to find the mode of an array.

function mode(arr){
   // let count = 0;
   let frequencyMap = new Map();
    for (const element of arr) {
        if (frequencyMap.has(element)) {
          frequencyMap.set(element, frequencyMap.get(element) + 1);
        } else {
          frequencyMap.set(element, 1);
        }
      }
    
      // Find the mode of the array.
      let mode = null;
      let maxFrequency = 0;
      for (const [element, frequency] of frequencyMap.entries()) {
        if (frequency > maxFrequency) {
          mode = element;
          maxFrequency = frequency;
        }
      }
      console.log(mode , maxFrequency);
      console.log(frequencyMap);
    
}

let arra = [1,23,3,4,5,6,2,1,3,2,1,232,1,2,3,2,1,1,2,3,2,2,3];
console.log(mode(arra)); 

