//What’s the output of the code below?

let promise = new Promise(function(resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(alert);//1 as only first caal to resolve or reject is taken into account and rest are ignored