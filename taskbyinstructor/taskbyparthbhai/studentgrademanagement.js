const students = [
  {
    id: 1,
    name: "parth",
    scores: [85, 90, 88, 92],
  },
  {
    id: 2,
    name: "Dhruvik",
    scores: [78, 86, 80, 88],
  },
  {
    id: 3,
    name: "Urva",
    scores: [92, 94, 89, 96],
  },
];

function average(arr){
    let sum =  arr.scores.reduce((a,b) => a+b);
    let average = sum / arr.scores.length;
    
}
