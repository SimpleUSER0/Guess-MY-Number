'use strict';
let score = 20;
let secretNumber = Math.trunc(Math.random()*20 +1);
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}
const displayScore = function (score) {
    document.querySelector('.score').textContent = score;
}

document.querySelector('.check').addEventListener('click', function() {
    
    const guess = Number(document.querySelector('.guess').value);

    if(!guess) {
        displayMessage('no Number!');
       
    } else if(guess === secretNumber) {
        displayMessage('Correct Number!');
        document.querySelector('body').style.backgroundColor= '#60b347';
        document.querySelector('.number').style.width = "30rem"
       // document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.highscore').textContent = score;

        if (highScore > score) {
            highScore = score;
        }
    }

    else if(guess !== secretNumber) {
        displayMessage( guess > secretNumber ? 'Too High!': 'Too low!');
        score--;
        displayScore(score);
    } else {
        displayMessage('You loose the game!');
        displayScore('0');
    }
    
});


document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random()*20 +1);

    displayMessage('Start guessing..');
    displayScore(score);
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
    

});





    // } else if(guess > secretNumber) {

    //     if(score > 1) {
    //         document.querySelector('.message').textContent = 'Too High!'
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You loose the game!'
    //         document.querySelector('.score').textContent = '0';
    //     }
            

    //  else  if(guess < secretNumber) {
        
    //     if(score > 1) {
    //         document.querySelector('.message').textContent = 'Too Low!'
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You loose the game!'

    //         document.querySelector('.score').textContent = '0';
    //     }
    // }
