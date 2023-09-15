// // // a number in JSON is just a number
// // console.log( JSON.stringify(1) ) // 1

// // // a string in JSON is still a string, but double-quoted
// // console.log( JSON.stringify('test') ) // "test"

// // console.log( JSON.stringify(true) ); // true

// // console.log( JSON.stringify([1, 2, 3]) ); // [1,2,3]

// let room = {
//     number: 23
//   };
  
//   let meetup = {
//     title: "Conference",
//     participants: [{name: "John"}, {name: "Alice"}],
//     place: room // meetup references room
//   };
  
//   room.occupiedBy = meetup; // room references meetup
  
//   alert( JSON.stringify(meetup, ['title', 'participants']) );
//   // {"title":"Conference","participants":[{},{}]}

// let meetup = {
//     title: "Conferenc",
//     participants: [{name: "Joh"}, {name: "Alic"}],
//     //place: room // meetup references room
//   };

// let room = {
//     number: 23,
//     place: meetup
//   };
  
// //    meetup = {
// //     title: "Conference",
// //     participants: [{name: "John"}, {name: "Alice"}],
// //     place: room // meetup references room
// //   };
  
  //room.occupiedBy = meetup; // room references meetup
  
  //console.log( JSON.stringify(meetup, ['title', 'participants']) );
  // {"title":"Conference","participants":[{},{}]}

//   let user = {
//     name: "John",
//     age: 25,
//     roles: {
//       isAdmin: false,
//       isEditor: true
//     }
//   };
  
//   alert(JSON.stringify(user, null, 2));
  /* two-space indents:
  {
    "name": "John",
    "age": 25,
    "roles": {
      "isAdmin": false,
      "isEditor": true
    }
  }
  */
  
  /* for JSON.stringify(user, null, 4) the result would be more indented:
  {
      "name": "John",
      "age": 25,
      "roles": {
          "isAdmin": false,
          "isEditor": true
      }
  }
  */

//   let room = {
//     number: 23
//   };
  
//   let meetup = {
//     title: "Conference",
//     date: new Date(Date.UTC(2017, 0, 1)),
//     room
//   };
  
//   alert( JSON.stringify(meetup) );
//   /*
//     {
//       "title":"Conference",
//       "date":"2017-01-01T00:00:00.000Z",  // (1)
//       "room": {"number":23}               // (2)
//     }
//   */

// let numbers = "[0, 1, 2, 3]";

// numbers = JSON.parse(numbers);

// alert( numbers[1] ); // 1







// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

// let meetup = JSON.parse(str);

// alert( meetup.date.getDate() ); // Error!

// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

// let meetup = JSON.parse(str, function(key, value) {
//   if (key == 'date') return new Date(value);
//   return value;
// });