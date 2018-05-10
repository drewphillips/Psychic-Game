<script>

    var winstotal = 0;
    var losestotal = 0;
    var guessesLeftTotal = 10;
    var totalGuesses = 0;

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    document.onkeyup = function (event) {
        var playerGuess = event.key;
        var computerGuess = computerChoices[Math.floor(Math.random() * alphabet.length)];
        userGuess.push(alphabet);
        console.log(computerGuess[0]);


        //8. When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
        //9. When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins). 

        if (userGuess === computerChoice) {
            winstotal++;
        } else {
            guessesLeftTotal--;
        }

        if (guessesLeftTotal === 0) {
            lossestotal++
        }

        document.getElementById('wins').innerHTML = "Wins: " + winstotal;
        document.getElementById('losses').innerHTML = "losses: " + lossestotal;
        document.getElementById('totalGuesses').innerHTML = "Guesses left: " + totalGuesses;
        }
        

    // Wins: (# of times the user has guessed the letter correctly)
    // 5. Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)
    // 6. Guesses Left: (# of guesses left. This will update)

</script>