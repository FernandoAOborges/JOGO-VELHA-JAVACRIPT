document.addEventListener("DOMContentLoaded", () => {
  let squares = document.querySelectorAll(".celulas");

  squares.forEach((celula) => {
    celula.addEventListener("click", verificaClique);
  });

  function verificaClique(event) {
    let celulaEscolhida = event.target;
    let position = celulaEscolhida.id;

    if (Move(position)) {
      setTimeout(() => {
        alert("acabou");
      }, 10);
    }

    updateCelulas(position);
  }
});

function updateCelulas(position) {
  if (position !== "") {
    let squares = document.querySelectorAll(".celulas")[position];
    let elementoID = squares.id;
    let simbulo = board[elementoID];

    squares.innerHTML = `<div class='${simbulo}'></div>`;
  }
}

function resetaTabuleiro() {
  let squares = document.querySelectorAll(".celulas");

  squares.forEach((elemento) => {
    elemento.innerHTML = " ";
  });

  board = ["", "", "", "", "", "", "", "", ""];
  playerTime = 0;
  symbols = ["o", "x"];
  gameOver = false;
}
