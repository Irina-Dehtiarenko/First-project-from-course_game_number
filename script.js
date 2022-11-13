'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

console.log(secretNumber);
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const changeStyle = (bgColor, secrNumber, width) => {
  document.querySelector('body').style.backgroundColor = bgColor;
  document.querySelector('.number').textContent = secrNumber;
  document.querySelector('.number').style.width = width;
};

const scoreValue = currentScore => {
  document.querySelector('.score').textContent = currentScore;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('❌ No number ');
  } else if (guess > 20 || guess < 0) {
    displayMessage('Please write some number from 1 to 20🙏');
  } else {
    if (guess === secretNumber) {
      score > highscore ? (highscore = score) : highscore;
      document.querySelector('.highscore').textContent = highscore;

      displayMessage('🎉 Correct number!');
      changeStyle('green', secretNumber, '30rem');
    } else {
      if (score > 1) {
        score--;
        scoreValue(score);
        displayMessage(guess > secretNumber ? '📈 Too hight!' : '📉 Too low!');
      } else {
        scoreValue(0);
        displayMessage('😥 You lost the game! ');
        changeStyle('rgb(160, 5, 5)', '😰😰😰', '45rem');
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  scoreValue(score);
  displayMessage('Start guessing...');
  changeStyle('#222', '?', '15rem');
});
