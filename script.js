const POSSIBLE = ["rock", "paper", "scissors"];

let computer_play = () => {;
    return POSSIBLE[getRndInteger(0, 3)];
};

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }


function round (player) {
    // console.log("Rock is 0, Paper is 1 and Scissors is 2");
    
    const computer = computer_play()

    updateGame(player,computer);

    return check_victory(player, computer);

  }

function check_victory(player, computer) {
    if (player == computer) {
        console.log(`Draw, both played ${player}`);
        updateResult("draw");
    } else if (
        player == POSSIBLE[0] && computer == POSSIBLE[2] ||
        player == POSSIBLE[1] && computer == POSSIBLE[0] ||
        player == POSSIBLE[2] && computer == POSSIBLE[1]
        ) {
        console.log("You win");
        updateResult('player');
    } else {
        console.log("You lose");
        updateResult('pc');
    }
  }

function updateResult(result){
    const score = document.querySelector(`#results #${result}`);
    score.textContent = parseInt(score.textContent) + 1;
}

function updateGame(player, pc) {
    const playerCurrent = document.querySelector("#current-player");
    const pcCurrent = document.querySelector("#current-pc");

    playerCurrent.textContent = player;
    pcCurrent.textContent = pc;
}

function game(rounds=5) {
    let results = [];

    for (let i = 0; i < rounds; i++){
        results.push(round())
    }
    console.log(results)
    alert(results)
}

const playerSelection = event => {
    round(event.target.id);
};

const buttons = document.querySelectorAll("button");
buttons.forEach(
    (button) => {
        button.addEventListener("click", playerSelection);
    }
);