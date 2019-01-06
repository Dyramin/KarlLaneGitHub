function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["startingBet"].elements.length; 
		loopCounter++) {
        if (document.forms["startingBet"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["startingBet"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
} 

function validateItems() {
    clearErrors();
	var bet = document.forms["startingBet"]["bet"].value;
	
	/* Verify input is only a number */
	if (bet == "" || isNaN(bet)) {
        alert("Starting Number must be filled in with a number.");
        document.forms["startingBet"]["bet"]
           .parentElement.className = "form-group has-error";
        document.forms["startingBet"]["bet"].focus();
        return false;
	} else if (bet <= 1) {
		alert("There is a minimum bet of $1.00.");
		document.forms["startingBet"]["bet"]
           .parentElement.className = "form-group has-error";
        document.forms["startingBet"]["bet"].focus();
        return false;
	}
}

function gameLoop(startingBet){
	var rounds = 0;
	var currentBalance = startingBet;
	var displayResults = " ";
	var firstDie = 0;
	var secondDie = 0;
	var dieTotal = 0;
	
	
	while(currentBalance > 0) {
		firstDie = Math.floor(Math.random() * 6 ) +1;
		secondDie = Math.floor(Math.random() * 6  ) +1;
		dieTotal = firstDie + secondDie;
		rounds++;
		if(dieTotal == '7') {
			currentBalance = currentBalance + 4;
			displayResults = "7! - " + rounds;
			document.getElementById("showResults").innerHTML = displayResults;
		} else {
			currentBalance--;
			displayResults = rounds;
			document.getElementById("showResults").innerHTML = displayResults;
		}
	} /* Close the while loop */
	
	//displayResults = "It took " + rounds + " rounds before you went broke!" ; 
	
	/* Send the updated string back to the page */
	//document.getElementById("showResults").innerHTML = displayResults;
}
