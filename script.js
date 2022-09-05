// Strict mode
'use strict';

// Selecting elements
const p11 = document.querySelector('.btn--11');
const p12 = document.querySelector('.btn--12');
const p13 = document.querySelector('.btn--13');
const p21 = document.querySelector('.btn--21');
const p22 = document.querySelector('.btn--22');
const p23 = document.querySelector('.btn--23');
const p31 = document.querySelector('.btn--31');
const p32 = document.querySelector('.btn--32');
const p33 = document.querySelector('.btn--33');
const win = document.querySelector('.winner');
let scoreX = document.querySelector('.score--1');
let scoreO = document.querySelector('.score--2');
const turnX = document.querySelector('.turnX');
const turnO = document.querySelector('.turnO');
const playAgain = document.querySelector('.again');
const resetGame = document.querySelector('.reset');

// Variables
let arr = [];
let i = 0;
let starter;

// Function for draw situation
function draw() {
  if (i === arr.length - 1) {
    turnO.classList.add('hidden');
    turnX.classList.add('hidden');
    win.textContent = `it's a tie!`;
    win.classList.remove('hidden');
    win.style.color = '#f00';
  }
}

// Function for each turn
function turn() {
  if (arr[i] === 'O') {
    turnX.classList.remove('hidden');
    turnO.classList.add('hidden');
  } else {
    turnO.classList.remove('hidden');
    turnX.classList.add('hidden');
  }
}

// Function for start situation
function start() {
  i = 0;
  //  Ask the user who is starting?
  starter = prompt('Who do you want to start the game? X or O?');
  // Validation
  while (
    starter !== 'x' &&
    starter !== 'x' &&
    starter !== 'O' &&
    starter !== 'o'
  ) {
    starter = prompt(
      'Something wrong! Who do you want to start the game? X or O?'
    );
  }
  // Save the correct array
  if (starter === 'X' || starter === 'x') {
    arr = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X', 'O'];
  } else if (starter === 'O' || starter === 'o') {
    arr = ['O', 'X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'];
  }
}
start();

// Function for finish situation
function finished() {
  turnO.classList.add('hidden');
  turnX.classList.add('hidden');
  win.style.color = '#ffd900';
  win.textContent = `${arr[i]} win's !!`;
  win.classList.remove('hidden');
  p11.disabled = true;
  p12.disabled = true;
  p13.disabled = true;
  p21.disabled = true;
  p22.disabled = true;
  p23.disabled = true;
  p31.disabled = true;
  p32.disabled = true;
  p33.disabled = true;
  if (arr[i] === 'X') {
    scoreX.textContent++;
  } else {
    scoreO.textContent++;
  }
}

// Function for reset the game situation
function againReset() {
  turnO.classList.add('hidden');
  turnX.classList.add('hidden');
  win.classList.add('hidden');
  p11.disabled = false;
  p12.disabled = false;
  p13.disabled = false;
  p21.disabled = false;
  p22.disabled = false;
  p23.disabled = false;
  p31.disabled = false;
  p32.disabled = false;
  p33.disabled = false;
  p11.textContent = null;
  p12.textContent = null;
  p13.textContent = null;
  p21.textContent = null;
  p22.textContent = null;
  p23.textContent = null;
  p31.textContent = null;
  p32.textContent = null;
  p33.textContent = null;
  p11.classList.remove('box--winner');
  p12.classList.remove('box--winner');
  p13.classList.remove('box--winner');
  p21.classList.remove('box--winner');
  p22.classList.remove('box--winner');
  p23.classList.remove('box--winner');
  p31.classList.remove('box--winner');
  p32.classList.remove('box--winner');
  p33.classList.remove('box--winner');
}

// Function for box color winner
function boxWinner(box) {
  box.classList.add('box--winner');
}

// Function for win situation
function winner() {
  if (
    p11.textContent === arr[i] &&
    p12.textContent === arr[i] &&
    p13.textContent === arr[i]
  ) {
    boxWinner(p11);
    boxWinner(p12);
    boxWinner(p13);
    finished();
  } else if (
    p21.textContent === arr[i] &&
    p22.textContent === arr[i] &&
    p23.textContent === arr[i]
  ) {
    boxWinner(p21);
    boxWinner(p22);
    boxWinner(p23);
    finished();
  } else if (
    p31.textContent === arr[i] &&
    p32.textContent === arr[i] &&
    p33.textContent === arr[i]
  ) {
    boxWinner(p31);
    boxWinner(p32);
    boxWinner(p33);
    finished();
  } else if (
    p11.textContent === arr[i] &&
    p21.textContent === arr[i] &&
    p31.textContent === arr[i]
  ) {
    boxWinner(p11);
    boxWinner(p21);
    boxWinner(p31);
    finished();
  } else if (
    p12.textContent === arr[i] &&
    p22.textContent === arr[i] &&
    p32.textContent === arr[i]
  ) {
    boxWinner(p12);
    boxWinner(p22);
    boxWinner(p32);
    finished();
  } else if (
    p13.textContent === arr[i] &&
    p23.textContent === arr[i] &&
    p33.textContent === arr[i]
  ) {
    boxWinner(p13);
    boxWinner(p23);
    boxWinner(p33);
    finished();
  } else if (
    p11.textContent === arr[i] &&
    p22.textContent === arr[i] &&
    p33.textContent === arr[i]
  ) {
    boxWinner(p11);
    boxWinner(p22);
    boxWinner(p33);
    finished();
  } else if (
    p13.textContent === arr[i] &&
    p22.textContent === arr[i] &&
    p31.textContent === arr[i]
  ) {
    boxWinner(p13);
    boxWinner(p22);
    boxWinner(p31);
    finished();
  }
}

// Click X or O situation
p11.addEventListener('click', function () {
  turn();
  p11.textContent = arr[i];
  winner();
  i++;
  draw();
  p11.disabled = true;
});
p12.addEventListener('click', function () {
  turn();
  p12.textContent = arr[i];
  winner();
  i++;
  draw();
  p12.disabled = true;
});
p13.addEventListener('click', function () {
  turn();
  p13.textContent = arr[i];
  winner();
  i++;
  draw();
  p13.disabled = true;
});
p21.addEventListener('click', function () {
  turn();
  p21.textContent = arr[i];
  winner();
  i++;
  draw();
  p21.disabled = true;
});
p22.addEventListener('click', function () {
  turn();
  p22.textContent = arr[i];
  winner();
  i++;
  draw();
  p22.disabled = true;
});
p23.addEventListener('click', function () {
  turn();
  p23.textContent = arr[i];
  winner();
  i++;
  draw();
  p23.disabled = true;
});
p31.addEventListener('click', function () {
  turn();
  p31.textContent = arr[i];
  winner();
  i++;
  draw();
  p31.disabled = true;
});
p32.addEventListener('click', function () {
  turn();
  p32.textContent = arr[i];
  winner();
  i++;
  draw();
  p32.disabled = true;
});
p33.addEventListener('click', function () {
  turn();
  p33.textContent = arr[i];
  winner();
  i++;
  draw();
  p33.disabled = true;
});

// Click 'play again' situation
playAgain.addEventListener('click', function () {
  start();
  againReset();
});

// Click 'reset the game' situation
resetGame.addEventListener('click', function () {
  scoreO.textContent = 0;
  scoreX.textContent = 0;
  start();
  againReset();
});

// How to play function
const how = document.querySelector('.how');
const overlay = document.querySelector('.overlay');
const btnCloseHow = document.querySelector('.close-how');
const btnOpenHow = document.querySelector('.show-how');

const openHow = function () {
  how.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeHow = function () {
  how.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnOpenHow.addEventListener('click', openHow);
btnCloseHow.addEventListener('click', closeHow);
overlay.addEventListener('click', closeHow);
