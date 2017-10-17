document.getElementsByClassName("readless").onclick = readLess;
document.getElementsByClassName("readmore").onclick = readMore;

/* Execute Code Here */

function readMore() {
	document.getElementById("show-this-on-click").style.visibility = "visible";
	document.getElementsByClassName("readless").style.visibility = "visible";
	document.getElementsByClassName("readmore").style.display = "hidden";
}

function readLess() {
	document.getElementById("show-this-on-click").style.visibility = "hidden";
	document.getElementsByClassName("readless").style.visibility = "hidden";
	document.getElementsByClassName("readmore").style.visibility = "visible";
}

document.getElementById("show-this-on-click").addEventListener("click", function(readLess){
    event.preventDefault()
});

document.getElementById("show-this-on-click").addEventListener("click", function(readMore){
    event.preventDefault()
});