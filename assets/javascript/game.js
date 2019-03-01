// VARIABLES
var winCount = 0;
var lossCount = 0;
var crystalCounter = 0;
var randomNumber;

// GAME START
$ (document).ready(function() {

    // CRYSTAL IMAGES
$("#crystal1").html('<img src = "assets/images/greenCrystal1.png"/>'),
$("#crystal2").html('<img src = "assets/images/silverCrystal2.png"/>'),
$("#crystal3").html('<img src = "assets/images/purpleCrystal3.png"/>'),
$("#crystal4").html('<img src = "assets/images/redCrystal4.png"/>')

// RANDOM NUMBER GENERATOR
    randomNumber = Math.floor((Math.random() * 120) + 19);
        $ ("#randomNumber").text(randomNumber);
            console.log("Random Number: " + randomNumber);

    var crystalGreen = Math.floor(Math.random() * 11 + 1);
    var crystalSilver = Math.floor(Math.random() * 11 + 1);
    var crystalPurple = Math.floor(Math.random() * 11 + 1);
    var crystalRed = Math.floor(Math.random() * 11 + 1);
        console.log("Green Crystal Value: " + crystalGreen);
        console.log("Silver Crystal Value: " + crystalSilver);
        console.log("Purple Crystal Value: " + crystalPurple);
        console.log("Red Crystal Value: " + crystalRed);

    // GAME COUNTERS
    $ ("#crystalCounter").text(crystalCounter);
    $ ("#wins").text("Wins: " + winCount);
    $ ("#loss").text("Losses: " + lossCount);

// GAME RESET
    function reset() {
        randomNumber = Math.floor((Math.random() * 120) + 19);
            $ ("#randomNumber").text(randomNumber);
                console.log("Random Number: " + randomNumber);
        
        var crystalGreen = Math.floor(Math.random() * 11 + 1);
        var crystalSilver = Math.floor(Math.random() * 11 + 1);
        var crystalPurple = Math.floor(Math.random() * 11 + 1);
        var crystalRed = Math.floor(Math.random() * 11 + 1);
            console.log("Green Crystal Value: " + crystalGreen);
            console.log("Silver Crystal Value: " + crystalSilver);
            console.log("Purple Crystal Value: " + crystalPurple);
            console.log("Red Crystal Value: " + crystalRed);

        crystalCounter = 0;
        $ ("#crystalCounter").text(crystalCounter);
    };

    // ON CLICK EVENTS

        // GREEN CRYSTAL BUTTON    
        $("#crystal1").on("click", function() {
            crystalCounter = crystalCounter + crystalGreen;
                $("#crystalCounter").text(crystalCounter);
                    if (crystalCounter == randomNumber) {
                        youWin();
                    }
                    else if (crystalCounter > randomNumber) {
                        youLose();
                    } 
        });
        
        // SILVER CRYSTAL BUTTON    
        $("#crystal2").on("click", function() {
            crystalCounter = crystalCounter + crystalSilver;
                $("#crystalCounter").text(crystalCounter);
                    if (crystalCounter == randomNumber) {
                        youWin();
                    }
                    else if (crystalCounter > randomNumber) {
                        youLose();
                    } 
        });

        // PURPLE CRYSTAL BUTTON    
        $("#crystal3").on("click", function() {
            crystalCounter = crystalCounter + crystalPurple;
                $("#crystalCounter").text(crystalCounter);
                    if (crystalCounter == randomNumber) {
                        youWin();
                    }
                    else if (crystalCounter > randomNumber) {
                        youLose();
                    } 
        });

        // RED CRYSTAL BUTTON    
        $("#crystal4").on("click", function() {
            crystalCounter = crystalCounter + crystalRed;
                $("#crystalCounter").text(crystalCounter);
                    if (crystalCounter == randomNumber) {
                        youWin();
                    }
                    else if (crystalCounter > randomNumber) {
                        youLose();
                    } 
        });

    // WIN FUNCTION
        function youWin() {
            alert("You win!");
            winCount++;
            $ ("#wins").text("Wins: " + winCount);
            reset();
        };

    // LOSE FUNCTION
        function youLose() {
            alert("You lose!");
            lossCount++;
            $ ("#loss").text("Losses: " + lossCount);
            reset();
        };

});