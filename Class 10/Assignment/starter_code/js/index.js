$(document).ready(function() {
  $('form').submit(function(event) {
    var city = $('input').val();

    console.log(city);


  });
});

$('form').submit(function() {
	if(city == 'Sydney' || city == 'SYD') {
	$('body').css("background-image", "url(images/sydney.jpg)");
}
	if(city == 'New York' || city == 'NYC' || city == 'New York City') {
	$('body').css("background-image", "url(images/nyc.jpg)");
}
	if(city == 'San Francisco' || city == 'SF' || city == 'Bay Area') {
	$('body').css("background-image", "url(images/sf.jpg)");
}
	if(city == 'Los Angeles' || city == 'LA' || city == 'LAX') {
	$('body').css("background-image", "url(images/la.jpg)");
}
	if(city == 'Austin' || city == 'ATX') {
	$('body').css("background-image", "url(images/austin.jpg)");
}

});