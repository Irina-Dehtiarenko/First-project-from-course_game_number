'use strict';
// to jest DOM manipulation

// document.querySelector('.message')
// document.querySelector('.number')
// document.querySelector('.score')
// // 🎉

// document.querySelector('.guess').value

const btn = document.querySelector('.check');
const message = document.querySelector('.message');
const scoreValue = document.querySelector('.score');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;

btn.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, secretNumber);
  if (!guess) {
    message.textContent = '❌ No number ';
  } else if (guess > 20 || guess < 0) {
    message.textContent = 'Please write some number from 1 to 20🙏';
  } else if (guess === secretNumber) {
    message.textContent = '🎉 Correct number!';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
  } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = '📈 Too hight!';
      score--;
      scoreValue.textContent = score;
    } else {
      message.textContent = '😥 You lost the game! ';
      scoreValue.textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = '📉 Too low!';
      score--;
      scoreValue.textContent = score;
    } else {
      message.textContent = '😥 You lost the game! ';
      scoreValue.textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  message.textContent = 'Start guessing...';
  scoreValue.textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
