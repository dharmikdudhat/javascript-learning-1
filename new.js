function countAndPrintYears(input) {
    // Use a regular expression to match 4-digit years (e.g., 2023)
    const yearRegex = /\b\d{4}\b/g;
    
    // Use a regular expression to find all matches in the input text
    const yearMatches = input.match(yearRegex);
    
    // Create an object to store year counts
    const yearCount = {};
    
    // Count the occurrences of each year
    if (yearMatches) {
      yearMatches.forEach((year) => {
        if (yearCount[year]) {
          yearCount[year]++;
        } else {
          yearCount[year] = 1;
        }
      });
    }
    
    // Convert the yearCount object into an array of objects for sorting
    const yearCountArray = Object.keys(yearCount).map((year) => ({
      year: year,
      count: yearCount[year],
    }));
    
    // Sort the array in descending order based on the count
    yearCountArray.sort((a, b) => b.count - a.count);
    
    // Print the years and their counts
    yearCountArray.forEach((entry) => {
      console.log(`${entry.year}: ${entry.count} times`);
    });
  }
  
  // Example usage:
  const inputText = "I was born in 1990. My sister was born in 1992, and my brother in 1990. We started our business in 2020.";
  countAndPrintYears(inputText);