const board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

let isValidSudoku = function (board) {
  for (let i = 0; i < board.length; i++) {
    const set = new Set();
    for (let j = 0; j < board[i].length; j++) {
      const cell = board[i][j];
      if (cell === '.') continue;
      if (set.has(cell)) return false;
      set.add(cell);
    }
  }

  for (let i = 0; i < board.length; i++) {
    const set = new Set();
    for (let j = 0; j < board[i].length; j++) {
      const cell = board[j][i];
      if (cell === '.') continue;
      if (set.has(cell)) return false;
      set.add(cell);
    }
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const set = new Set();

