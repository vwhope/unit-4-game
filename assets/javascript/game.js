// JavaScript/jQuery for unit-4-game Crystal Collections

// ================================ BEGIN GLOBAL VARIABLE DEFINITIONS =======================================================
// set GLOBAL variables - available to all functions - (generally don't want global- is better to make an encapsulated object
var totWins = 0;
var totLoss = 0;
var yourScore = 0;
var randomNumber = 0;
var jewel1Val = 0;
var jewel2Val = 0;
var jewel3Val = 0;
var jewel4Val = 0;

// ================================ END GLOBAL VARIABLE DEFINITIONS =========================================================

// ================================ BEGIN FUNCTION DEFINITIONS  =============================================================
function generateRandomNbr() {
        
    var min = 19;
    var max = 120;
    
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomNumber);
  
    // insert random number into our random-number div.
    $("#randomNumber").text(randomNumber);
    
} // end generateRandomNbr



// ================================ END FUNCTION DEFINITIONS  ===============================================================

// ================================ BEGIN GAME (GAME could be an object if you make it one) execution of all the game functions =======
// HTML page loads FIRST, then this code runs
// If any event listeners/handlers have been registerd (ex. document.onkeyup) they are still listening

generateRandomNbr();



// ================================ END GAME ================================================================================
