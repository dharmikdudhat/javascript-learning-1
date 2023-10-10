// //3) Capitalize each of an array of names
function capitalizeNames(arr){
  // your code here
  function capitalize(string) 
{
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
  let navo = arr.map(item => capitalize(item));
       return navo;

}



console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheime