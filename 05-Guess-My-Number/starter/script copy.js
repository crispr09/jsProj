'use strict';

let randomVal = Math.floor(Math.random() * 20) + 1;
let score = 20,
  highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  let userValue = document.querySelector('.guess').value;
  console.log('user val = ' + userValue + typeof userValue);
  console.log('random val =' + randomVal + typeof randomVal);
  if (score > 0) {
    if (randomVal === parseInt(userValue)) {
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.message').textContent = 'you won !!!!!!!!';
      document.querySelector('.score').textContent = score;
      highScore = Number(document.querySelector('.highscore').textContent);
      if (score > highScore)
        document.querySelector('.highscore').textContent = score;
    } else if (randomVal >= userValue) {
      document.querySelector('.message').textContent = '........too low';
    } else {
      document.querySelector('.message').textContent = '........too high';
    }
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = 'you lost ..try again';
    score = 20;
    document.querySelector('body').style.backgroundColor = 'black';
  }
  //   console.log(randomVal);
});
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.guess').value = '';
  score = 20;
  randomVal = Math.floor(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = 'black';
  //   console.log(randomVal);
});
