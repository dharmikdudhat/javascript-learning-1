// Create a function getSecondsToTomorrow() that returns the number of seconds till tomorrow.

// For instance, if now is 23:00, then:

// getSecondsToTomorrow() == 3600
// P.S. The function should work at any day, the “today” is not hardcoded.

function getSecondsToTomorrow(){
    let now = new Date();
    
    let present = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
    
    let diff = present - now;

    return Math.round(diff / 1000);
}

console.log(getSecondsToTomorrow());