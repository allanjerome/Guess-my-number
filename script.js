'use strict';
let secretNumber=Math.trunc(Math.random() *21)
let score=20;
let highscore=0;

document.querySelector('.check').addEventListener
('click' ,function(){
    const guess=Number( document.querySelector('.guess').value);

    if (!guess){
        document.querySelector('.message').textContent=" No Number 👿"
    }
    else if(guess===secretNumber){
        document.querySelector(".message").textContent="🎉 Correct Number"
        document.querySelector('.number').textContent=secretNumber;
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem'
        if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=score;
        }
    }
    else if(guess > secretNumber){
        if (score > 1){
        document.querySelector('.message').textContent='Too High!';
        score--;
        document.querySelector('.score').textContent=score;
        }
        else{
            document.querySelector('.message').textContent='You lost the Game 💥'
        }
    }
    else if(guess < secretNumber){
        if (score > 1){
        document.querySelector('.message').textContent='Too Low!'
        score--;
        document.querySelector('.score').textContent=score;
    }
    else{
        document.querySelector('.message').textContent='You lost the Game 💥'
        }

    }

    
})

document.querySelector('.again').addEventListener 
('click',function(){
    score=20;
    secretNumber=Math.trunc(Math.random() *21)
    document.querySelector('.number').textContent='?'
    document.querySelector('.message').textContent='Start Guessing....!'
    document.querySelector('.score').textContent=score;
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

})
