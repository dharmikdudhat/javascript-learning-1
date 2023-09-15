// let now = new Date();
// console.log( now ); //shows current time and date

// // 0 means 01.01.1970 UTC+0
// let Jan01_1970 = new Date(0);
// console.log( Jan01_1970 );

// // now add 24 hours, get 02.01.1970 UTC+0
// let Jan02_1970 = new Date(24 * 3600 * 1000);
// console.log( Jan02_1970 );

// new Date(year, month, date, hours, minutes, seconds, ms)
// Create the date with the given components in the local time zone. Only the first two arguments are obligatory.

// The year should have 4 digits. For compatibility, 2 digits are also accepted and considered 19xx, e.g. 98 is the same as 1998 here, but always using 4 digits is strongly encouraged.
// The month count starts with 0 (Jan), up to 11 (Dec).
// The date parameter is actually the day of month, if absent then 1 is assumed.
// If hours/minutes/seconds/ms is absent, they are assumed to be equal 0.

// getFullYear()
// Get the year (4 digits)
// getMonth()
// Get the month, from 0 to 11.
// getDate()
// Get the day of month, from 1 to 31, the name of the method does look a little bit strange.
// getHours(), getMinutes(), getSeconds(), getMilliseconds()
// Get the corresponding time components.
// getDay()
// Get the day of week, from 0 (Sunday) to 6 (Saturday). The first day is always Sunday, in some countries that’s not so, but can’t be changed.

// There are also their UTC-counterparts, that return day, month, year and so on for the time zone UTC+0: getUTCFullYear(), getUTCMonth(), getUTCDay(). Just insert the "UTC" right after "get".

// If your local time zone is shifted relative to UTC, then the code below shows different hours:

// // current date
// let date = new Date();

// // the hour in your current time zone
// console.log( date.getHours() );

// // the hour in UTC+0 time zone (London time without daylight savings)
// console.log( date.getUTCHours() );

// getTime()
// Returns the timestamp for the date – a number of milliseconds passed from the January 1st of 1970 UTC+0.

// getTimezoneOffset()
// Returns the difference between UTC and the local time zone, in minutes:

// // if you are in timezone UTC-1, outputs 60
// // if you are in timezone UTC+3, outputs -180
// console.log( new Date().getTimezoneOffset() );

// setFullYear(year, [month], [date])
// setMonth(month, [date])
// setDate(date)
// setHours(hour, [min], [sec], [ms])
// setMinutes(min, [sec], [ms])
// setSeconds(sec, [ms])
// setMilliseconds(ms)
// setTime(milliseconds) (sets the whole date by milliseconds since 01.01.1970 UTC)
// Every one of them except setTime() has a UTC-variant, for instance: setUTCHours().

// As we can see, some methods can set multiple components at once, for example setHours. The components that are not mentioned are not modified.

// let date = new Date(2013, 0, 32); // 32 Jan 2013 ?!?
// console.log(date); // ...is 1st Feb 2013!// it will autocorrect the date 

// let date = new Date(2016, 1, 28);
// date.setDate(date.getDate() + 2);

// console.log( date ); // 1 Mar 2016

// Date.now()
// If we only want to measure time, we don’t need the Date object.

// There’s a special method Date.now() that returns the current timestamp.

// It is semantically equivalent to new Date().getTime(), but it doesn’t create an intermediate Date object. So it’s faster and doesn’t put pressure on garbage collection.

// let start = Date.now(); // milliseconds count from 1 Jan 1970

// // do the job
// for (let i = 0; i < 100000; i++) {
//   let doSomething = i * i * i;
// }

// let end = Date.now(); // done

// console.log( `The loop took ${end - start} ms` );

// function diffSubtract(date1, date2) {
//     return date2 - date1;
//   }
  
//   function diffGetTime(date1, date2) {
//     return date2.getTime() - date1.getTime();
//   }
  
//   function bench(f) {
//     let date1 = new Date(0);
//     let date2 = new Date();
  
//     let start = Date.now();
//     for (let i = 0; i < 100000; i++) f(date1, date2);
//     return Date.now() - start;
//   }
  
//   console.log( 'Time of diffSubtract: ' + bench(diffSubtract) + 'ms' );
//   console.log( 'Time of diffGetTime: ' + bench(diffGetTime) + 'ms' );

// The great pack of articles about V8 can be found at https://mrale.ph.

// Date.parse from a string
// The method Date.parse(str) can read a date from a string.

// The string format should be: YYYY-MM-DDTHH:mm:ss.sssZ, where:

// YYYY-MM-DD – is the date: year-month-day.
// The character "T" is used as the delimiter.
// HH:mm:ss.sss – is the time: hours, minutes, seconds and milliseconds.
// The optional 'Z' part denotes the time zone in the format +-hh:mm. A single letter Z would mean UTC+0.
// Shorter variants are also possible, like YYYY-MM-DD or YYYY-MM or even YYYY.

// The call to Date.parse(str) parses the string in the given format and returns the timestamp (number of milliseconds from 1 Jan 1970 UTC+0). If the format is invalid, returns NaN.

// For instance:

// let ms = Date.parse('2012-01-26T13:51:50.417-07:00');

// alert(ms); // 1327611110417  (timestamp)

let date = new Date(2013, 0, 32); // 32 Jan 2013 ?!?
console.log(date); // ...is 1st Feb 2013!