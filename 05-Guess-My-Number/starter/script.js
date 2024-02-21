'use strict';

let randomVal = getRandomValue(1, 20);
let score = 20,
  highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  let userValue = document.querySelector('.guess').value;

  if (score > 0) {
    if (randomVal === parseInt(userValue)) {
      setBackGroundColor('#60b347');
      setMessage('🎉 Correct Number!');
      setScore(score);
      highScore = Number(getHighScore());
      if (score > highScore) setHighScore(score);
    } else if (randomVal >= userValue) {
      setMessage('📉 Too low!');
    } else {
      setMessage('📈 Too high!');
    }
    score--;
    setScore(score);
  } else {
    setMessage('💥 You lost the game!');
    score = 20;
    setScore(0);
    setBackGroundColor('black');
  }
  //   console.log(randomVal);
});
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.guess').value = '';
  score = 20;
  randomVal = getRandomValue(1, 20);
  setMessage('Start guessing...');
  setBackGroundColor('black');
  //   console.log(randomVal);
});
function setMessage(message) {
  document.querySelector('.message').textContent = message;
}
function setScore(score) {
  document.querySelector('.score').textContent = score;
}
function setBackGroundColor(color) {
  document.querySelector('body').style.backgroundColor = color;
}
function setHighScore(score) {
  document.querySelector('.highscore').textContent = score;
}
function getHighScore() {
  return document.querySelector('.highscore').textContent;
}
function getRandomValue(start, end) {
  return Math.floor(Math.random() * end) + start;
}
