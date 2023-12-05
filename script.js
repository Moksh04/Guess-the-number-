'use strict';

const num = document.querySelector('.number');
const guess = document.querySelector('.guess');
const message = document.querySelector('.message');
const chkBtn = document.querySelector('.check');
const score = document.querySelector('.score');
const bodyStyle = document.querySelector('body');
const restartBtn = document.querySelector('.again');
const hS = document.querySelector('.highscore');

let updateScore = 20;
let highscore = Number(hS.textContent);
var secretNum = Math.trunc(Math.random() * 20) + 1;
// num.textContent = secretNum;
console.log(secretNum);

// Resetting the game
restartBtn.addEventListener('click', function () {
  message.textContent = 'Start guessing...';
  bodyStyle.style.backgroundColor = '#222';
  updateScore = 20;
  num.textContent = '?';
  score.textContent = updateScore;
  num.style = 'width: 15rem; font-size: 6rem';
  guess.value = '';
  secretNum = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNum);
});

chkBtn.addEventListener('click', function () {
  if (updateScore > 1) {
    const guessedNum = Number(guess.value);
    // Executed if the input field is empty.
    if (!guessedNum) message.innerText = 'No Number!';
    // When the player wins
    else if (secretNum === guessedNum) {
      message.textContent = 'Correct Number! ;)';
      bodyStyle.style.backgroundColor = '#60b347';
      num.textContent = secretNum;
      num.style = 'width: 30rem; font-size: 8rem';
      if (updateScore > highscore) {
        highscore = updateScore;
        hS.textContent = updateScore;
      }
    }
    // Otherwise
    else if (secretNum !== guessedNum) {
      message.textContent =
        secretNum > guessedNum ? 'Too Low! :(' : 'Too High! :(';
      score.textContent = --updateScore;
    }
    // else if (secretNum > guessedNum) {
    //   message.textContent = 'Too Low! :(';
    //   score.textContent = --updateScore;
    // } else if (secretNum < guessedNum) {
    //   message.textContent = 'Too High! :(';
    //   score.textContent = --updateScore;
    // }
  }
  // If score reaches zero
  else {
    message.textContent = '!! GAME OVER !!';
    bodyStyle.style.backgroundColor = '#ff3030';
    score.textContent = 0;
  }
});
