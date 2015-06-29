$(document).ready(function() {



var story = 0;

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

		story += 2;
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

	else if (story == 999) {
		$("#continue").show();

		return "<p class='newMessage'>I said 'naw, fuck that shit' and went on with my life.</p>";
	}

	else {
		return "<p class='newMessage'>Alas, the story ends here... <a href='index.html' target='main'>Click here</a> to return home.</p>";
	}
}

});