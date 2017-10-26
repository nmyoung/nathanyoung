var playerA = $('.playerA');
var playerB = $('.playerB');
var playerAScore = $('#playerAScore');
var playerBScore = $('#playerBScore');
var total = playerAScore + playerBScore;

$('.playerA1').click(function() {
    playerA = $('input').val();
    playerAScore.text('1');
});

$('.playerA1').click(function() {
  	playerA = $().text();
  	$('input').val( text );





$('.playerA2').click(function() {
    playerA = $('input').val();
    playerAScore.text('2');
});

$('.playerB1').click(function() {
    playerB = $('input').val();
    playerBScore.text('1');
});

$('.playerB2').click(function() {
    playerB = $('input').val();
    playerBScore.text('2');
});



///

$('total').submit(function() {
	if(total == '1') {
	$('.winner').text("Player A Wins");
}})

$('total').submit(function() {
	if(total == '2') {
	$('.winner').text("Player B Wins");
}})