'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 10;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
   document.querySelector('.message').textContent = message;
}

//document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function() {
   const guess = Number(document.querySelector('.guess').value);
   console.log(guess, typeof guess);

   //When there is no input
   if(!guess) {
      displayMessage('❌ No number!');

      //When player wins
   } else if(guess === secretNumber) {
      //document.querySelector('.message').textContent = '💯 Correct number!';
      displayMessage('💯 Correct number!');
      document.querySelector('.number').textContent = secretNumber;

      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      if(score > highscore) {
         highscore = score;
         document.querySelector('.highscore').textContent = highscore;
      }

      //When guess is too high

   } else if(guess !== secretNumber) {
      if(score > 1) {
         displayMessage(guess > secretNumber ? '↗ Too high!' : '↘ Too low!');
         score--;
         document.querySelector('.score').textContent = score;
      } else {
         //document.querySelector('.message').textContent = '💥 You lost!';
         displayMessage('💥 You lost!');
         document.querySelector('.score').textContent = 0;
      }
   }

      //Reset game - button

      document.querySelector('.again').addEventListener('click', () => {
         score = 20;
         secretNumber = Math.trunc(Math.random() * 20) + 1;

         document.querySelector('.score').textContent = score;
         document.querySelector('.number').textContent = '?';
        // document.querySelector('.message').textContent = 'Start guessing...';
         displayMessage('Start guessing...');
         document.querySelector('.guess').value = '';
         document.querySelector('body').style.backgroundColor = '#222';
         document.querySelector('.number').style.width = '15rem';

      })
});