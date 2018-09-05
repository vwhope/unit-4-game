// JavaScript/jQuery for unit-4-game Crystal Collections

// ================================ BEGIN GLOBAL VARIABLE DEFINITIONS =======================================================
// set GLOBAL variables - available to all functions - (generally don't want global- is better to make an encapsulated object
var totWins = 0;
var totLoss = 0;
var yourScore = 0;
var randomNbr = 0;
var randomNbrButton = 0;
var valJewelBtns = [0,0,0,0];
var valJewelBtn1 = 0;
var valJewelBtn2 = 0;
var valJewelBtn3 = 0;
var valJewelBtn4 = 0;

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
    
}

// before user clicks anything, zero out their score and update the HTML page with zero
function zeroYourScore() {
    var yourScore = 0;
    $("#yourScoreNumber").text(yourScore);
    console.log("Your score:" + yourScore);
}



// ================================ END FUNCTION DEFINITIONS  ===============================================================

// ================================ BEGIN GAME (GAME could be an object if you make it one) execution of all the game functions =======
// HTML page loads FIRST, then this code runs
// If any event listeners/handlers have been registerd (ex. document.onkeyup) they are still listening

generateRandomNbr(); // on HTML page load will provide a new random number to match
generateRandomNbrButtons(); // on HTML page load will put random nbr for each of the 4 crystals into an array
zeroYourScore(); // on HTML page load will zero out the user's score, but not their wins/losses


// ================================ END GAME ================================================================================

    // $("#random-button").on("click", function() {}
     
    // YOU WILL NEED TO CHANGE THIS - EACH button will need its own value
    // $("#jewelButton").text(randomNbrButton);     
     
      
   
    
 