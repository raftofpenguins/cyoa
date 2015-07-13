$(document).ready(function() {



var story = 0;

var rope = false;
var candle = false;
var mirror = false;

console.log("Beginning the Groovy, Spooky Mystery!");
debugLog(story);
console.log("========================================");



//Progresses the story when the Continue button is clicked
	
$(document).on('click', '#continueButton', function () {
	if (story == 5) { //RSVP to Invite
		console.log("Choice being made now!");
		debugLog(story);

		story += 1;
		var choices = ["#rsvpYes", "#rsvpNo"]
		addChoice(story, choices);
	}

	else if (story == 10) { //Pick a useful item
		console.log("2nd Choice being made now!");
		debugLog(story);

		story += 1;
		var choices = ["#ropeChoice", "candleChoice", "#mirrorChoice"]
		addChoice(story, choices);
	}

	else { //Default Continue function
		story += 1;
		addMessage(story);

		console.log("Continue button was clicked.");
		debugLog(story);
		//debugTW();
	}
	

	//console.log("The story variable is now " + story);
});


$(document).on('click', '#rsvpYes', function () {
	
	if (story == 6) {
		console.log("RSVP'd Yes");
		debugLog(story);

		story = 8;
		addMessage(story);
		
	}

	else {
		console.log("You already RSVP'd!");
		debugLog(story);
	}
	
});

$(document).on('click', '#rsvpNo', function () {
	console.log("No!");
	if (story == 6) {
		console.log("RSVP'd No");
		debugLog(story);

		story = 999;
		addMessage(story);
		story += 1;
		
	}

	else {
		console.log("You already RSVP'd!");
		debugLog(story);
	}
});


//Choosing items to take on your journey!
$(document).on('click', '#ropeChoice', function () {
	
	if (story == 11) {
		console.log("Picked rope");
		rope = true;
		debugLog(story);

		story = 15;
		debugLog(story);
		console.log("Adding rope message");
		addMessage(story);
		story = 18;
		console.log("Continuing story");
	}

	else {
		console.log("You already picked an item");
		debugLog(story);
	}
});

$(document).on('click', '#candleChoice', function () {
	
	if (story == 11) {
		console.log("Picked candle");
		candle = true;
		debugLog(story);

		story = 16;
		addMessage(story);
		story = 18;
	}

	else {
		console.log("You already picked an item");
		debugLog(story);
	}
});

$(document).on('click', '#mirrorChoice', function () {
	
	if (story == 11) {
		console.log("Picked mirror");
		mirror = true;
		debugLog(story);

		story = 17;
		addMessage(story);
		story = 18;
	}

	else {
		console.log("You already picked an item");
		debugLog(story);
	}
});

/*
//=========================================
//Typewriter text animation effect 
//-Source: http://jsfiddle.net/kA8G8/144/
//=========================================

var text = $('.typewriter').text();

var length = text.length;
var timeOut;
var character = 0;


(function typeWriter() { 
	//console.log("typewriter function has been called");

    timeOut = setTimeout(function() {
        character++;
        //console.log("Char: " + character);
        var type = text.substring(0, character);
        $('.typewriter').text(type);
        typeWriter();
        
        if (character == length) {
            clearTimeout(timeOut);
        }
        
    }, 90);
}());
//=========================================
*/

/*
//===========================================
//My attempt at the above Typewriter function
//===========================================

var text = $('.typewriter').text();

	var length = text.length;
	var timeOut;
	var character = 0;


function typeWriter() { 
	//console.log("typewriter function has been called");

	
    timeOut = setTimeout(function() {
        character++;
        //console.log("Char: " + character);
        var type = text.substring(0, character);
        $('.typewriter').text(type);
        typeWriter();
        
        if (character == length) {
            clearTimeout(timeOut);
        }
        
    }, 90);
};

typeWriter();
//===========================================
*/

//Adds text to messages depending on the story variable
function addMessage(story) {
	var thisMessage = getMessage(story);
	$("#textArea").append(thisMessage);
	//typeWriter();

	//animateMessage(thisMessage);
}

function debugLog(story) {
	console.log("- Story variable is currently: " + story);

	if (rope == true) {
		console.log("- Inventory currently contains: Rope");
	} else if (candle == true) {
		console.log("- Inventory currently contains: Candle");
	} else if (mirror == true) {
		console.log("- Inventory currently contains: Mirror");
	} else {
		console.log("- Inventory is currently empty.")
	}

}

function debugTW() {
	console.log("- Character variable is currently: " + character);
	console.log("- Length variable is currently: " + length);
	console.log("- Text string: " + text);
}

function addChoice(story, choices) {
	
	console.log("========================================");
	console.log("Beginning to create choices:");
	debugLog(story);
	console.log("========================================");

	$("#continue").hide();
	for (i = 0; i < choices.length; i++) {
		addMessage(story);
		story += 1;
		console.log("Choice has been added");
		debugLog(story);
	}

	//return story;

	console.log("========================================");
	console.log("Choices finished");
	debugLog(story);
	console.log("========================================");
}



//Used to determine which message to add to the text box, depending on the story variable
function getMessage(story) {

	//console.log("Character variable when adding message = " + character);

	if (story == 1) {
		return "<p class='newMessage'>The note was sent by Marquis Malartderrière, the eccentric master of Duckbutt Manor.</p>";
	}

	else if (story == 2) {
		return "<p class='newMessage'>I had never met the man -- only heard strange rumors.</p>";
	}

	else if (story == 3) {
		return "<p class='newMessage'>Some say he is a vampire, sucking on the butts of ducks for sustenance.</p>";
	}

	else if (story == 4) {
		return "<p class='newMessage'> The event to which I was invited would take place in a week...</p>";
	}

	else if (story == 5) {
		return "<p class='newMessage'>It requested an RSVP posthaste, so I replied with the following message:</p>";
	}

	else if (story == 6) {
		return "<ul><li><div id='rsvpYes'><a href='#messageBottom'>[Yes] - 'Please expect my presence at your event.'</a></div></li></ul>";
	}

	else if (story == 7) {
		return "<ul><li><div id='rsvpNo'><a href='#messageBottom'>[No] - 'I am regrettably unable to join you at this event.'</a></div></li></ul>";
	}

	else if (story == 8) {
		$("#continue").show();
		return "<p class='newMessage'>I sent my affirmative reply the next morning and prepared for my journey.</p>";
	}

	else if (story == 9) {
		return "<p class='newMessage'>Other than my personal effects and some toiletries, I decided to pack an extra item that might prove itself to be useful.</p>";
	}

	else if (story == 10) {
		return "<p class ='newMessage'>I chose to bring:</p>";
	}

	else if (story == 11) {

		return "<ul><li><div id='ropeChoice'><a href= '#messageBottom'> [Rope] - 'One never knows when a rope might be handy.'</a></div></li></ul>";
	}

	else if (story == 12) {

		return "<ul><li><div id= 'candleChoice'><a href= '#messageBottom'> [A candle and matches] - 'A little something to light the way if the path is dark.'</a></div></li></ul>";
	}

	else if (story == 13) {

		return "<ul><li><div id= 'mirrorChoice'><a href= '#messageBottom'> [A small hand mirror] - 'I can peer around corners and stay lookin' good.'</a></div></li></ul>";
	}

	else if (story == 15) {
		$("#continue").show();
		return "<p class='newMessage'>I chose the rope -- might get me out of a bind.</p>";
	}

	else if (story == 16) {
		$("#continue").show();
		return "<p class='newMessage'>I chose the candle and matches -- there's something comforting about the faint flame.</p>";
	}

	else if (story == 17) {
		$("#continue").show();
		return "<p class='newMessage'>I chose the mirror -- I wonder if Marquis Malartderrière can see his own reflection in it?</p>";
	}

	else if (story == 19) {
		return "<p class='newMessage'> After neatly packing my travel bag, I readied myself for bed, my stomach knotted with anticipation. It was going to be a long week.</p>";
	}

	else if (story == 20) {	
		return "<p class='newMessage'>...A week later, I heard the sound of hooves clickity clackin' down my track, drawing ever closer.</p>";
	}

	else if (story == 999) {
		$("#continue").show();
		return "<p class='newMessage'>I said 'naw, fuck that shit' and went on with my life.</p>";
	}

	else {
		$("#continue").hide();
		return "<p class='newMessage'>Alas, the story ends here... <a href='index.html' target='main'>Click here</a> to return home.</p>";
	}
}

});