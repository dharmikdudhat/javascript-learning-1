// Write the function sumInput() that:

// Asks the user for values using prompt and stores the values in the array.
// Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
// Calculates and returns the sum of array items.

function sumInput(){
    let input = [];
    let totalsum;
    while(true){
        let num = prompt("enter the number", 0);
        if (num === "" || isNaN(+num)){
            break;
        }else{
            input.push(num);
            totalsum += num;
        }
        return totalsum;
    };

}