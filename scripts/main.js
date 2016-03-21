//Establishing query selectors for later
var submitList = document.querySelector('.submitListBtn');
var toDoEntry = document.querySelector('.listItemBar');
var userEntry = document.querySelector('.userEntry');
var listEntries = document.querySelector('.listEntries');

//setting the user entry to an empty array so I can store entries. From the user. Yee.
var userEntry = [];

//Setting up a function I can call later
function renderEntries() {
	//Whatever the new input is, I'm creating this variable for it and making it blank
	var newEntries = '';
	//Setting up a for loop so that every time the user clicks, these things happen
	for (var i = 0; i < userEntry.length; i++) {
		//Setting new entries equal to whatever the user inputs and wrapping it in a div
		newEntries += '<p>'+userEntry[i]+'</p>\n\n';
		//Writing everything in the div towards the bottom. You know, beneath the obnoxious bits of text. 
		listEntries.innerHTML = newEntries;
	}
}

//Setting up a simple function to clear the input bar whenever it's clicked. 
toDoEntry.addEventListener('click', function() {
	toDoEntry.value = '';
});

//Last little event listener to make the button actually do what it's supposed to do. Kinda important.
submitList.addEventListener('click', function() {
	//Pushing whatever the user inputs into the array
	userEntry.push(toDoEntry.value);
	//Calling the function that does all the work. ALL THE DAMN WORK.
	renderEntries();
});