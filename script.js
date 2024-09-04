function playGame() {
    let games = 5;
    let userScore = 0;
    let computerScore = 0;

    while (games) {
        let answer = parseInt(prompt('1) Rock 2) Paper 3) Scissors'));
        let computerChoice = Math.floor(Math.random() * 3) + 1;

        // console.log(computerChoice)

        if (answer === computerChoice) {
            console.log('Tie!')
        } else if (answer === 1 && computerChoice === 3 || answer === 2 && computerChoice === 1 || answer === 3 && computerChoice === 2) {
            console.log('You Won!')
            userScore++;
        } else if (answer === 1 && computerChoice === 2 || answer === 2 && computerChoice === 3 || answer === 3 && computerChoice === 1) {
            console.log('You Lost!')
            computerScore++;
        } else {
            console.error('Please enter a valid number')
            games++;
        }
        
        games--;
    }

    console.log('-----------------')
    console.log('The final scores are!!!!')
    console.log(`User: ${userScore}, Computer: ${computerScore}`)

    if (userScore === computerScore) {
        console.log('Tie!')
    } else if (userScore > computerScore) {
        console.log('You bet the computer!')
    } else if (userScore < computerScore) {
        console.log('The computer bet you!')
    }

}

playGame();