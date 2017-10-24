$(document).ready(function() {
  $('form').submit(function(event) {
    var city = $('input').val();

    console.log(city);


  });
});

$('form').submit(function() {
	if(city = 'Sydney') {
	$('body').css("background-image", "url(images/sydney.jpg)");
}
	if(city = 'New York') {
	$('body').css("background-image", "url(images/nyc.jpg)");
}
	if(city = 'San Francisco') {
	$('body').css("background-image", "url(images/sf.jpg)");
}
	if(city = 'Los Angeles') {
	$('body').css("background-image", "url(images/la.jpg)");
}
	if(city = 'Austin') {
	$('body').css("background-image", "url(images/austin.jpg)");
}

});