$(document).ready(function() {
  $('form').submit(function(event) {
    var city = $('input').val();

    console.log(city);


  });
});

$('form').submit(function() {
	if(city = 'Sydney' || 'SYD') {
	$('body').css("background-image", "url(images/sydney.jpg)");
}
	else if(city = 'New York' || 'NYC' || 'New York City') {
	$('body').css("background-image", "url(images/nyc.jpg)");
}
	else if(city = 'San Francisco' || 'SF' || 'Bay Area') {
	$('body').css("background-image", "url(images/sf.jpg)");
}
	else if(city = 'Los Angeles' || 'LA' || 'LAX') {
	$('body').css("background-image", "url(images/la.jpg)");
}
	else(city = 'Austin' || 'ATX') {
	$('body').css("background-image", "url(images/austin.jpg)");
}

});