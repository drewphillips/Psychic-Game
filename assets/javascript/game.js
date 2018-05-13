

        var winstotal = 0;
        var losestotal = 0;
        var guessesLeftTotal = 10;
        var computerGuess = "";
    
        var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
            'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 

        function resetGame(){
            computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
            console.log(computerGuess)
            guessesLeftTotal = 10;

        }    
        resetGame()
    
        document.onkeyup = function (event) {
            var playerGuess = event.key;
            
            //8. When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
            //9. When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins). 
    
            if (playerGuess === computerGuess) {
                winstotal++;
                resetGame()
                
            } else {
                guessesLeftTotal--; 
            }
    
            if (guessesLeftTotal === 0) {
                losestotal++
                resetGame()
            }
    
            document.getElementById('wins').innerHTML = "Wins: " + winstotal;
            document.getElementById('losses').innerHTML = "losses: " + losestotal;
            document.getElementById('totalGuesses').innerHTML = "Total Guesses so far: " + guessesLeftTotal;
            }
            
    
        // Wins: (# of times the user has guessed the letter correctly)
        // 5. Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)
        // 6. Guesses Left: (# of guesses left. This will update)
    
