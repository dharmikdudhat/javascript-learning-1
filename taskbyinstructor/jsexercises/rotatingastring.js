// Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.


// Function that rotates s towards left by d
function leftrotate(str, d) 
{
    var ans = str.substring(d, str.length) + 
              str.substring(0, d);
    return ans;
}
 
// Function that rotates s towards right by d
function rightrotate(str, d)
{
    return leftrotate(str, str.length - d);
}