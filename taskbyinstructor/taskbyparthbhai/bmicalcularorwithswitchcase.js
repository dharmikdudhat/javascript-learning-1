// // Write a function to find the most frequent element in an array.

function mostfre(arr){

}

//make a bmi calculator using switch case

let weight  = 60;
let height  = 1.25;
 let BMI = ( weight / (height * height) );
 console.log(`BMI = ${BMI} kg/(m*m)`);

switch (true) {
  case (BMI <= 16) :
    console.log("Severe Thinness");
    break;
    case (BMI <= 17) :
      console.log("Moderate Thinness");
         break;
      case (BMI <= 18) :
      console.log("Mild Thinness");
        break;
      case (BMI <= 25) :
      console.log("Normal");
        break;
      case (BMI <= 30) :
      console.log("Overweight");
        break;
      case (BMI <= 35) :
      console.log("Obese Class I");
        break;
      case (BMI <= 40) :
      console.log("Obese Class II");
        break;
      case (BMI > 40) :
      console.log("Obese Class III");
        break;
};
