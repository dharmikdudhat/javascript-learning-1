let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  
//   function printList(list) {
//     let tmp = list;
  
//     while (tmp) {
//       alert(tmp.value);
//       tmp = tmp.next;
//     }
  
//   }
  
//   printList(list);

function printList(list) {

    console.log(list.value); // output the current item
  
    if (list.next) {
      printList(list.next); // do the same for the rest of the list
    }
  
  }
  
  printList(list);