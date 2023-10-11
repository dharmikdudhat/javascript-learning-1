/* Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
Each row must contain the digits 1-9 without repetition.//done 
Each column must contain the digits 1-9 without repetition.//done
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Think at your own don't take help from others */

let board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
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

for (i = 0; i < 9; i++) {
  for (j = 0; j < 9; j++) {
    let x = [];
    if (
      board[i][j] != "." &&
      !x.includes(board[i][j]) &&
      1 <= board[i][j] &&
      board[i][j] <= 9
    ) {
      x.push(board[i][j]);
    } else if (board[i][j] < 1 && board[i][j] > 9) {
      console.log(`wrong digit entered at ${(i, j)} which is ${board[i][j]} `);
    } /* else{
        console.log("already written number in row");
    } */
  }
}

for (i = 0; i < 9; i++) {
  let x = [];
  for (j = 0; j < 9; j++) {
    if (
      board[j][i] != "." &&
      !x.includes(board[j][i]) &&
      1 <= board[j][i] &&
      board[j][i] <= 9
    ) {
      x.push(board[j][i]);
    } else if (board[j][i] < 1 && board[j][i] > 9) {
      console.log(`wrong digit entered at ${(i, j)} which is ${board[j][i]} `);
    } /* else{
          console.log("already written number in row");
      } */
  }
  //console.log(x);
}


function box(row, column, array) {
  let x = [];
  for (i = row; i < row + 3; i++) {
    for (j = column; j < column + 3; j++) {
      if (
        board[i][j] != "." &&
        !x.includes(board[i][j]) &&
        1 <= board[i][j] &&
        board[i][j] <= 9
      ) {
        x.push(board[i][j]);
      } else if (board[i][j] < 1 && board[i][j] > 9) {
        console.log(
          `wrong digit entered at ${(i, j)} which is ${board[i][j]} `
        );
      }
    }
  }
  return x;
}

let x = box(0, 0, board);
console.log(x);
