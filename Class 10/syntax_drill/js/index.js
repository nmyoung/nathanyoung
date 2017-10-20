$('.actions').click(function() {
	$('body').css('background-color', '#343D46');
	$('body, p').css('color', '#fff');
});

$('.slideUp').click(function() {
	$('.slideUpBox').slideUp('fast');
});

$('.slideDown').click(function() {
	$('.slideDownBox').slideDown('slow');
});

$('.toggle').click(function() {
	$('.toggleBox').slideToggle(340);
});

$('#showBoxes').click(function() {
	$('.box').show();
});

$('#hideBoxes').click(function() {
	$('.box').hide();
});

$('h2.click').click(function() {
	$('ul').children().css({
		'font-weight': 'bold',
		'font-size': 16
	});
});

$('img').click(function() {
	$('img').attr('src', 'http://www.zastavki.com/pictures/originals/2013/_SWAG_on_a_gray_background_047286_.png');
});
