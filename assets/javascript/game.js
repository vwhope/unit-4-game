// JavaScript/jQuery for unit-4-game Crystal Collections

// ================================ BEGIN GLOBAL VARIABLE DEFINITIONS =======================================================
// set GLOBAL variables available to all functions - (generally don't want global- is better to make an encapsulated object)
var totWins = 0;
var totLoss = 0;
var yourScore = 0;
var randomNbr = 0;
var randomNbrButton = 0;
var valJewelBtns = [0,0,0,0];
var buttonName;


// ================================ END GLOBAL VARIABLE DEFINITIONS =========================================================

// ================================ BEGIN FUNCTION DEFINITIONS  =============================================================
// before user clicks anything, generate random nbr to try to match (# to Match)

function generateRandomNbr() {
    var min = 19;
    var max = 120;
    randomNbr = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomNbr);
    // insert random number into its random-number div
    $("#randomNbr").text(randomNbr);
    
} // end generateRandomNbr

// before user clicks anything, generate random nbr for each of the 4 crystals
// store the 4 random numbers into array: valJewelBtns for access later
function generateRandomNbrButtons() {
    for(var i = 0; i < valJewelBtns.length; i++) {
        var min = 1;
        var max = 12;
        valJewelBtns[i] = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(valJewelBtns);
    };
    
} // end generateRandomNbrButtons

// before user clicks anything, zero out their score and update the HTML page with zero
function zeroYourScore() {
    yourScore = 0;
    $("#yourScoreNumber").text(yourScore);
    console.log("Your score:" + yourScore);
} // end zeroYourScore


// once user clicks any button, this gameStart function will execute
function gameStart() {
    console.log("button name:" + buttonName);
    $("#gameStatusMsg").text("Keep trying... ");
    
    // Determine button clicked, get corresponding random number value, add to yourScore
    if(buttonName === "jewelButtonA") {
        yourScore = yourScore + valJewelBtns[0];
        $("#yourScoreNumber").text(yourScore);
        // $("#jewelButtonA").text(valJewelBtns[0]);
    };
    
    if(buttonName === "jewelButtonB") {
        yourScore = yourScore + valJewelBtns[1];
        $("#yourScoreNumber").text(yourScore);
        // $("#jewelButtonB").text(valJewelBtns[1]);
    };
    
    if(buttonName === "jewelButtonC") {
        yourScore = yourScore + valJewelBtns[2];
        $("#yourScoreNumber").text(yourScore);
        // $("#jewelButtonC").text(valJewelBtns[2]);
    };
    
    if(buttonName === "jewelButtonD") {
        yourScore = yourScore + valJewelBtns[3];
        $("#yourScoreNumber").text(yourScore);
        // $("#jewelButtonD").text(valJewelBtns[3]);
    };
    
    // - update wins/losses accordingly
    console.log("Your Score:" + yourScore);
    console.log("Random number:" + randomNbr);
    
    if(yourScore > randomNbr) {
        $("#gameStatusMsg").text("Sorry, you lose.");
        totLoss++
        $("#scoreBoardLossNbr").text(parseInt(totLoss));
        generateRandomNbr();
        generateRandomNbrButtons();
        zeroYourScore();
        
        
    } else if(yourScore === randomNbr) {
        $("#gameStatusMsg").text("Congratulations! You Win!");
        totWins++
        $("#scoreBoardWinNbr").text(parseInt(totWins));
        generateRandomNbr();
        generateRandomNbrButtons();
        zeroYourScore();
        
    } else {
        console.log("gameStart() still playing");
    } // end if/else conditions
    
} // end function gameStart 


// ================================ END FUNCTION DEFINITIONS  ===============================================================

// ================================ BEGIN GAME HERE =========================================================================
// HTML page loads FIRST, then this code runs ONCE

generateRandomNbr(); // on HTML page load will provide a new random number to match
generateRandomNbrButtons(); // on HTML page load will put random nbr for each of the 4 crystals into an array
zeroYourScore(); // on HTML page load will zero out the user's score, but not their wins/losses

// Register event listeners/handlers for ANY button click event, get which button clicked

$(".btn").click(function() {
    // alert("the button clicked was: " + this.id);
    buttonName = this.id;
    gameStart();
});


// ================================ END GAME ================================================================================




