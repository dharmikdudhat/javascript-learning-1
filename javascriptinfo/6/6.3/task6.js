// Write function sum that works like this: sum(a)(b) = a+b.

// Yes, exactly this way, using double parentheses (not a mistype).

// For instance:

 console.log(sum(1)(2)); //= 3
 console.log(sum(5)(-1)); //= 4

function sum(a){
    return function(b){
        return a+b;
    }
}