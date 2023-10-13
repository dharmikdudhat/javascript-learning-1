// European countries have days of week starting with Monday (number 1), then Tuesday (number 2) and till Sunday (number 7). Write a function getLocalDay(date) that returns the “European” day of week for date.

let date = new Date(2012, 0, 1);  // 1 Jan 2012

function getLocalDay(data){
    let day = data.getDay();

    if (day == 0){
        day = 7;
    }

    return day;
}
console.log( getLocalDay(date) ); 