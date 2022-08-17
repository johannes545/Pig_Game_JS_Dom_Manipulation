'use strict';

const playerScore1 = document.querySelector("#score--0");
const playerScore2 = document.querySelector("#score--1");
const dice = document.querySelector(".dice");
const playerCurrent1 = document.querySelector("#current--0");
const playerCurrent2 = document.querySelector("#current--1");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let scores = [0,0]
let activePlayer = 0;
let currentScore = 0;

function switchPlayer() {
    if(activePlayer === 0){
        document.getElementById(`current--${activePlayer}`).textContent = 0
        // ku ha brugt toogle method, spørg John om logikken
        document.querySelector(".player--0").classList.remove("player--active");
        document.querySelector(".player--1").classList.add("player--active")
        activePlayer +=1;
        currentScore = 0;
    } else if(activePlayer === 1){
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        // ku ha brugt toogle. spørg Andersen om logikken
        document.querySelector(".player--1").classList.remove("player--active");
        document.querySelector(".player--0").classList.add("player--active")
        activePlayer -= 1;
        currentScore = 0;
    }
}

// starting conditions
playerScore1.textContent = 0;
playerScore2.textContent = 0;
dice.classList.add("hidden")


btnRoll.addEventListener("click", function(){
    let diceNumber = Math.trunc(Math.random()*6) + 1;
    dice.setAttribute("src","dice-" + diceNumber + ".png");
    dice.classList.remove("hidden");

    if(diceNumber !== 1) {
        currentScore += diceNumber
        document.getElementById(`current--${activePlayer}`).textContent = currentScore

    }else{
        switchPlayer();
    }
})

btnHold.addEventListener("click", function(){
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]

    if(scores[activePlayer] >= 100){
        document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
        document.querySelector(`.player--${activePlayer}`).classList.remove("player--active")
    }else{
        switchPlayer();
    }
})

btnNew.addEventListener("click", function(){
    playerScore1.textContent = 0;
    playerScore2.textContent = 0;
    playerCurrent1.textContent = 0;
    playerCurrent2.textContent = 0;
    dice.classList.add("hidden")
    activePlayer = 1;
    scores = [0,0]
    currentScore = 0;
    switchPlayer()
})