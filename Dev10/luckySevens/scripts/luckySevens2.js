/*
Creator: Karl Lane
Date created: January 03, 2019
Date last modified: January 04, 2019
*/

function hideResults() {
    document.getElementById("resultsTable").style.display = "none";
} 

function gameLoop() {
    var startingBet = document.getElementById("betInput").value;
	/* Declared here and set to zero 
	   so they aren't being re-declared on each pass of the loop */
	var dice1 = 0;
	var dice2 = 0;
	var diceRoll = 0;
	var totalRolls = 0;     		// number of times code loops
	var highRoll = 0;       		// set to totalRoll value for each new high amount
    var bet = startingBet;
    var highestAmount = startingBet;  // the highest amount checked each round
	
/* Making sure a valid amount was wagered */
    if(bet <= 0){
		alert("Regretfully, we are unable to extend credit at this time. Please wager at least 0.01");
	} else {
		
/* If there was a valid wager then, play game as long as we have money */
		while (bet > 0) {
			dice1 = Math.floor(Math.random() * 6) + 1;
			dice2 = Math.floor(Math.random() * 6) + 1;
			diceRoll = dice1 + dice2;
			totalRolls++;    // increment the roll count before we calculate earnings
			if(diceRoll === 7) {
				bet = bet +4;              // Add 4 dollars for rolling a 7
				if(bet > highestAmount){   // Is the new total a new high for this round of this game? 
					highestAmount = bet;   // If it is a new high record it
					highRoll = totalRolls; // Log how many times we've rolled the dice to get to this new high
				} // close the nested if
			} else { 
				bet--; // Take away a dollar for not rolling a 7.
			} // Close "else"
		} 	  // Close the while loop
	} 		  // Close the gameLoop() function
    
function showResults() {
    document.getElementById("resultsTable").style.display = "inline";
    document.getElementById("playButton").innerHTML = "Play Again";
    document.getElementById("resultsBet").innerHTML = "$" + startingBet +".00";
    document.getElementById("resultsRollCounter").innerHTML = totalRolls;
    document.getElementById("resultsHighestHeld").innerHTML = "$" +     highestAmount + ".00";
    document.getElementById("resultsRollsFromHighest").innerHTML = highRoll;
    };

    showResults();
}