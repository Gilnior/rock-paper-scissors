const POSSIBLE = ["Rock", "Paper", "Scissors"];

let computer_play = () => {;
    return POSSIBLE[getRndInteger(0, 3)];
};

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }


function round () {
    console.log("Rock is 0, Paper is 1 and Scissors is 2");
    
    const computer = computer_play()

    let valid = false;

    while (!valid) {
        n = prompt("Rock is 0, Paper is 1 and Scissors is 2\nWhat you will choose?");
        if (n < 3 && n >= 0){
            valid = true
        }
    }
    let player = POSSIBLE[Math.floor(n)];

    console.log(`You: ${player}\nComputer: ${computer}`)

    return check_victory(player, computer);

  }

  function check_victory(player, computer) {
    if (player == computer) {
        console.log(`Draw, both played ${player}`)
        return "d"
    } else if (
        player == POSSIBLE[0] && computer == POSSIBLE[2] ||
        player == POSSIBLE[1] && computer == POSSIBLE[0] ||
        player == POSSIBLE[2] && computer == POSSIBLE[1]
        ) {
        console.log("You win")
        return 'w'
    } else {
        console.log("You lose")
        return 'l'
    }
  }

function game(rounds=5) {
    let results = [];

    for (let i = 0; i < rounds; i++){
        results.push(round())
    }
    console.log(results)
    alert(results)
}

game()