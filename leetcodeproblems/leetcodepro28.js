/* Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.  */

let haystack = "sadbutsad", needle = "sad";

var strStr = function(haystack, needle) {
    
    return haystack.indexOf(needle);
};

console.log(strStr(haystack,needle));