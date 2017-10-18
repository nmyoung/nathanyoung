//Stop Links from Jumping Around

var linkElements = document.getElementsByTagName('a');

for (var i=0, len=linkElements.length; i<len; i++){
	linkElements[i].onclick = function(event) {
		event.preventDefault();
	}
}


//Toggle Between readmore and readless

var readMoreElement = document.getElementsByClassName('readmore');
var readLessElement = document.getElementsByClassName('readless');
var showThisElement = document.getElementById('show-this-on-click');

console.dir(readMoreElement); //Array
console.dir(readLessElement); //Array
console.dir(showThisElement); //Object because there's just 1. Doesn't need [0] thing, it's an id

readMoreElement[0].onclick = function() {
	readMoreElement[0].style.display = 'none'; //Because there's only one on the page, and it's the first in the array, it's [0].
	readLessElement[0].style.display = 'block'; //Block is the opposite of none. It makes it appear
	showThisElement.style.display = 'block'; // Doesn't need the [0] thing because it's the only one ever, it's a div id.
};

readLessElement[0].onclick = function() {
	readMoreElement[0].style.display = 'block';
	readLessElement[0].style.display = 'none'; 
	showThisElement.style.display = 'none';
};


//Show Learn More text

var learnMoreElement = document.getElementsByClassName('learnmore');
var learnMoreTextElement = document.getElementById('learnmoretext');

console.dir(learnMoreElement)
console.dir(learnMoreTextElement)

learnMoreElement[0].onclick = function(event) {
	learnMoreElement[0].style.display = 'none';
	learnMoreTextElement.style.display = 'block';
	event.preventDefault();
}




