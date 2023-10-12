/* Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
Each row must contain the digits 1-9 without repetition.//done 
Each column must contain the digits 1-9 without repetition.//done
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Think at your own don't take help from others */

let board = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
// for rows

function check(m, n, l) {
  
  return board[m][n] !== "." && !l.has(board[m][n]) && board[m][n] >= 1 && board[m][n] <= 9;
}

function validSudoku(board) {
  for (let i = 0; i < 9; i++) {
    let x = new Set();
    let y = new Set();

    for (let j = 0; j < 9; j++) {
      /*   if (i % 3 === 0 || j % 3 === 0) {
        let z = new Set();
        for (let d = i; d < i + 3; d++) {
          for (let e = j; e < j + 3; e++) {
            if (check(d, e, z)) {
              z.add(board[d][e]);
            } else if (board[d][e] !== ".") {
              console.log(
                `wrong digit entered at ${d},${e} which is ${board[d][e]} `
              );
              return false;
            }
          }
        }
      } */
      if (check(i, j, x)) {
        x.add(board[i][j]);
      } else if (board[i][j] !== ".") {
        console.log(`Invalid value in row ${i}, column ${j}: ${board[i][j]}`);
        return false;
      }

      if (check(j, i, y)) {
        y.add(board[j][i]);
      } else if (board[j][i] !== ".") {
        console.log(`Invalid value in row ${i}, column ${j}: ${board[j][i]}`);
        return false;
      }
    }
  }

  /*  return true;
} */
  for (let row = 0; row < 3; row++) {
    for (let column = 0; column < 3; column++) {
      let z = new Set();
      for (let i = 3 * row; i < 3 * row + 3; i++) {
        for (let j = 3 * column; j < 3 * column + 3; j++) {
          if (check(i, j, z)) {
            z.add(board[i][j]);
          } else if (board[i][j] !== ".") {
            console.log(
              `wrong digit entered at ${(i, j)} which is ${board[i][j]} `
            );
            return false;
          }
        }
      }
    }
  }

  return true;
}

let m = validSudoku(board);
console.log(m);

// function box(row, column, array) {
//   let x = [];
//   for (let i = row; i < row + 3; i++) {
//     for (let j = column; j < column + 3; j++) {
//       if (
//         board[i][j] != "." &&
//         !x.includes(board[i][j]) &&
//         1 <= board[i][j] &&
//         board[i][j] <= 9
//       ) {
//         x.push(board[i][j]);
//       } else if (board[i][j] < 1 && board[i][j] > 9) {
//         console.log(
//           `wrong digit entered at ${(i, j)} which is ${board[i][j]} `
//         );
//       }
//     }
//   }
//   return true;
// }

// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     let x = box(3 * i, j * 3, board);
//     console.log(x);
//   }
//   console.log(i);
// }

/* function validate(arr){
  for (i=0;i<9;i++){
    let row = new Set();
    let col = new Set();
    let box = new Set();
    for(j=0;j<9;j++){
      
    }
  }
} */
