let board = ["", "", "", "", "", "", "", "", ""];
let playerTime = 0;
let symbols = ["o", "x"];
let gameOver = false;

function Move(position) {
  if (gameOver) {
    return;
  }

  if (board[position] == "") {
    board[position] = symbols[playerTime];

    gameOver = isWin();

    playerTime = playerTime == 0 ? 1 : 0;
  }

  return gameOver;
}

function isWin() {
  let winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let index = 0; index < winStates.length; index++) {
    let sequencia = winStates[index];
    let pos01 = sequencia[0];
    let pos02 = sequencia[1];
    let pos03 = sequencia[2];

    if (
      board[pos01] == board[pos02] &&
      board[pos01] == board[pos03] &&
      board[pos01] != ""
    ) {
      return true;
    }
  }
  return false;
}
