//5. Write a function to sort an array of objects based on a given property.

function sortObjectsByProperty(array, property) {
    array.sort((a, b) => a[property] - b[property]);
  }