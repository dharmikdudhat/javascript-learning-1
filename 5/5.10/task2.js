// There is a salaries object:

let salaaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
// Create the function topSalary(salaries) that returns the name of the top-paid person.

// If salaries is empty, it should return null.
// If there are multiple top-paid persons, return any of them.
// P.S. Use Object.entries and destructuring to iterate over key/value pairs.
function topSalaries(salaries){
  
  let max_salary = 0;
  let max_name = null;
  for (const [name , salary] of Object.entries(salaries)){
    if (max_salary < salary){
        max_salary = salary;
        max_name = name;
    }
  }  

  console.log(max_name);
}

topSalaries(salaaries);