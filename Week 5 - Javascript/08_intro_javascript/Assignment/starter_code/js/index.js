document.getElementsByClassName("readless").onclick = readLess;
document.getElementsByClassName("readmore").onclick = readMore;

/* Execute Code Here */

function readLess() {
	document.getElementById('show-this-on-click').style.display = "display";
	document.getElementsByClassName('readless').style.display = "display";
	document.getElementsByClassName('readmore').style.display = "none";
}

function readMore() {
	document.getElementById('show-this-on-click').style.display = "none";
	document.getElementsByClassName('readless').style.display = "none";
	document.getElementsByClassName('readmore').style.display = "display";
}


var anchors = document.getElementsByTagName('a');
for (i=0, len=anchors.length; i<len; i++){
	anchors[i].addEventListener('click', function(e){e.preventDefault();});
}