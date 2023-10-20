/* You are given a binary string s that contains at least one '1'.

You have to rearrange the bits in such a way that the resulting binary number is the maximum odd binary number that can be created from this combination.

Return a string representing the maximum odd binary number that can be created from the given combination.

Note that the resulting string can have leading zeros.

  */

var maximumOddBinaryNumber = function (s) {
    let counter = 0;
    
    for (const char of s)
        if (char === '1')
            counter++;
    
    return '1'.repeat(counter - 1) + '0'.repeat(s.length - counter) + '1';
};

let s = "0101100101010";

console.log(maximumOddBinaryNumber(s));
