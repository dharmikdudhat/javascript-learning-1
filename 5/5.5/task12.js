function unique(arr) {
  
    let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
  }
  
  let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O" , "ram"
  ];
  
  console.log( unique(strings) ); // Hare, Krishna, :-O