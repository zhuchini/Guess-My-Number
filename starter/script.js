'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;
let score = 20;
let gameOverScore = 0;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('No Number!');
    return;
    // When player wins.
  } else if (guess === secretNumber) {
    displayMessage('Correct!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    return;
  }

  // remove 1 from score as long as it is > 0
  if (score > 0) score--;

  document.querySelector('.score').textContent = score;

  var isGameOver = score === gameOverScore;
  if (isGameOver) {
    displayMessage('Game Over.');
    return
  };

  if (guess > secretNumber) {
    displayMessage('TOO HIGH!!');
  } else if (guess < secretNumber) {
    displayMessage('TOO LOW!!');
  }

});

document.querySelector('.again').addEventListener('click', resetGameBoard);

function resetGameBoard() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  initializeUI();  
}

function initializeUI() {
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem'  
}

function displayMessage(text) {
  document.querySelector('.message').textContent = text;
}