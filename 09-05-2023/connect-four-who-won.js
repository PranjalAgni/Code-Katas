// Constants
const ROWS = 6;
const COLS = 7;

function checkColWinning(board, discType, row, col) {
  let startRow = row;
  let startCol = col;
  if (startCol + 3 >= COLS) return false;

  let end = startCol + 3;
  while (startCol <= end) {
    if (board[startRow][startCol] !== discType) {
      return false;
    }
    startCol += 1;
  }

  return true;
}

function checkRowWinning(board, discType, row, col) {
  let startRow = row;
  let startCol = col;
  if (startRow + 3 >= ROWS) return false;

  let end = startRow + 3;
  while (startRow <= end) {
    if (board[startRow][startCol] !== discType) {
      return false;
    }
    startRow += 1;
  }

  return true;
}

function checkLeftDiagonalWinning(board, discType, row, col) {
  let startRow = row;
  let startCol = col;
  if (startRow + 3 >= ROWS || startCol - 3 < 0) return false;
  let endRow = startRow + 3;
  let endCol = startCol - 3;

  while (startRow <= endRow && startCol >= endCol) {
    if (board[startRow][startCol] !== discType) {
      return false;
    }
    startRow += 1;
    startCol -= 1;
  }
  return true;
}

function checkRightDiagonalWinning(board, discType, row, col) {
  let startRow = row;
  let startCol = col;
  if (startRow + 3 >= ROWS || startCol + 3 >= COLS) return false;

  let endRow = startRow + 3;
  let endCol = startCol + 3;
  while (startRow <= endRow && startCol <= endCol) {
    if (board[startRow][startCol] !== discType) {
      return false;
    }
    startRow += 1;
    startCol += 1;
  }

  return true;
}

function connectFour(board) {
  // Your code goes here
  let isBoardFull = true;
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      let disc = board[row][col];
      if (disc === '-') {
        isBoardFull = false;
        continue;
      }

      if (
        checkRowWinning(board, disc, row, col) ||
        checkColWinning(board, disc, row, col) ||
        checkLeftDiagonalWinning(board, disc, row, col) ||
        checkRightDiagonalWinning(board, disc, row, col)
      ) {
        return disc;
      }
    }
  }

  if (isBoardFull) return 'draw';
  return 'in progress';
}

// R wins by horizontal
let board = [
  ['-', '-', '-', '-', '-', '-', '-'],
  ['-', '-', '-', '-', '-', '-', '-'],
  ['-', '-', '-', 'R', 'Y', 'R', 'R'],
  ['-', '-', '-', 'Y', 'Y', 'R', 'Y'],
  ['-', '-', '-', 'Y', 'R', 'Y', 'Y'],
  ['-', '-', 'Y', 'Y', 'R', 'R', 'R'],
];
console.log(connectFour(board), 'R');
