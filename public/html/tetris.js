const gameBoard = document.querySelector('.game-board');

// Create game board
const board = [];
for (let row = 0; row < 20; row++) {
  board[row] = [];
  for (let col = 0; col < 10; col++) {
    board[row][col] = 0;
  }
}

// Create tetrominoes
const tetrominoes = [
  [[1, 1, 1, 1]],
  [
    [1, 1, 1],
    [0, 1, 0],
  ],
  [
    [1, 1, 0],
    [0, 1, 1],
  ],
  [
    [0, 1, 1],
    [1, 1, 0],
  ],
  [
    [1, 0, 0],
    [1, 1, 1],
  ],
  [
    [0, 0, 1],
    [1, 1, 1],
  ],
  [
    [1, 1],
    [1, 1],
  ],
];

// Initialize current tetromino and position
let currentTetromino = tetrominoes[0];
let currentPosition = { x: 3, y: 0 };

// Draw tetromino on board
function draw() {
  currentTetromino.forEach((row, y) => {
    console.log('draw y=> ', y);
    row.forEach((value, x) => {
      console.log(x);
      if (value !== 0) {
        gameBoard.children[(currentPosition.y + y) * 10 + (currentPosition.x + x)]?.classList.add('tetromino');
      }
    });
  });
}

// Undraw tetromino from board
function undraw() {
  currentTetromino.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value !== 0) {
        gameBoard.children[(currentPosition.y + y) * 10 + (currentPosition.x + x)]?.classList.remove('tetromino');
      }
    });
  });
}

// Move tetromino down
function moveDown() {
  undraw();
  currentPosition.y++;
  draw();
}

// Move tetromino left
function moveLeft() {
  undraw();
  currentPosition.x--;
  draw();
}

// Move tetromino right
function moveRight() {
  undraw();
  currentPosition.x++;
  draw();
}

// Rotate tetromino
function rotate() {
  undraw();
  currentTetromino = tetrominoes[(tetrominoes.indexOf(currentTetromino) + 1) % tetrominoes.length];
  draw();
}

// Handle keyboard input
document.addEventListener('keydown', event => {
  switch (event.keyCode) {
    case 37:
      moveLeft();
      break;
    case 38:
      rotate();
      break;
    case 39:
      moveRight();
      break;
    case 40:
      moveDown();
      break;
  }
});

// Initialize game
draw();

// Start game loop
setInterval(() => {
  moveDown();
}, 1000);
