// VARIABLES
var numberOptions = [5, 9, 4, 3];
var winCount = 0;
var lossCount = 0;
var randomNumber;

randomNumber = Math.floor((Math.random() * 120) + 19);

// GAME COUNTERS
$ ("#randomNumber").text(randomNumber);
$ ("#wins").text("Wins: " + winCount);
$ ("#loss").text("Losses: " + lossCount);

