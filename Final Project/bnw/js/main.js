$(document).ready(function(){


//Mobile Menu

$('.menuOuter').click(function() {
	if($('.navBar').css('display') === 'none') {
	  $('.navBar').css('display', 'inline-block');
	  $('.menuOuter').css('margin-bottom', '3px');
}

	else if($('.navBar').css('display') === 'inline-block') {
	  $('.navBar').css('display', 'none');
	  $('.menuOuter').css('margin-bottom', '0px');
}

$('.nav').click(function() {
  $('.navBar').css('display', 'none');
})

});


//Program Dates

$('.wed').click(function() {
  $('.wed').addClass('h3Active').removeClass('h3Hide');
  $('.thurs').addClass('h3Hide').removeClass('h3Active');
  $('.fri').addClass('h3Hide').removeClass('h3Active');
  $('.wedTimes').css('display', 'inline-block');
  $('.thursTimes').css('display', 'none');
  $('.friTimes').css('display', 'none');
})

$('.thurs').click(function() {
  $('.wed').addClass('h3Hide').removeClass('h3Active');
  $('.thurs').addClass('h3Active').removeClass('h3Hide');
  $('.fri').addClass('h3Hide').removeClass('h3Active');
  $('.wedTimes').css('display', 'none');
  $('.thursTimes').css('display', 'inline-block');
  $('.friTimes').css('display', 'none');
})

$('.fri').click(function() {
  $('.wed').addClass('h3Hide').removeClass('h3Active');
  $('.thurs').addClass('h3Hide').removeClass('h3Active');
  $('.fri').addClass('h3Active').removeClass('h3Hide');
  $('.wedTimes').css('display', 'none');
  $('.thursTimes').css('display', 'none');
  $('.friTimes').css('display', 'inline-block');
});


// FAQ Info

$('.question1').click(function() {
  if($('.question1').hasClass('h3Hide')) {
    $('.question1').addClass('h3Active').removeClass('h3Hide');
    $('.answer1').addClass('pActive').removeClass('pHide');
    $('.question2').addClass('h3Hide').removeClass('h3Active');
    $('.answer2').addClass('pHide').removeClass('pActive');
    $('.question3').addClass('h3Hide').removeClass('h3Active');
    $('.answer3').addClass('pHide').removeClass('pActive');
    $('.question4').addClass('h3Hide').removeClass('h3Active');
    $('.answer4').addClass('pHide').removeClass('pActive');
}
})

$('.question2').click(function() {
  if($('.question2').hasClass('h3Hide')) {
    $('.question2').addClass('h3Active').removeClass('h3Hide');
    $('.answer2').addClass('pActive').removeClass('pHide');
    $('.question1').addClass('h3Hide').removeClass('h3Active');
    $('.answer1').addClass('pHide').removeClass('pActive');
    $('.question3').addClass('h3Hide').removeClass('h3Active');
    $('.answer3').addClass('pHide').removeClass('pActive');
    $('.question4').addClass('h3Hide').removeClass('h3Active');
    $('.answer4').addClass('pHide').removeClass('pActive');
}
})

$('.question3').click(function() {
  if($('.question3').hasClass('h3Hide')) {
    $('.question3').addClass('h3Active').removeClass('h3Hide');
    $('.answer3').addClass('pActive').removeClass('pHide');
    $('.question1').addClass('h3Hide').removeClass('h3Active');
    $('.answer1').addClass('pHide').removeClass('pActive');
    $('.question2').addClass('h3Hide').removeClass('h3Active');
    $('.answer2').addClass('pHide').removeClass('pActive');
    $('.question4').addClass('h3Hide').removeClass('h3Active');
    $('.answer4').addClass('pHide').removeClass('pActive');
}
})

$('.question4').click(function() {
  if($('.question4').hasClass('h3Hide')) {
    $('.question4').addClass('h3Active').removeClass('h3Hide');
    $('.answer4').addClass('pActive').removeClass('pHide');
    $('.question1').addClass('h3Hide').removeClass('h3Active');
    $('.answer1').addClass('pHide').removeClass('pActive');
    $('.question2').addClass('h3Hide').removeClass('h3Active');
    $('.answer2').addClass('pHide').removeClass('pActive');
    $('.question3').addClass('h3Hide').removeClass('h3Active');
    $('.answer3').addClass('pHide').removeClass('pActive');
}
});


//Image Fade

$(window).on("load",function() {
	$(window).scroll(function() {
		
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();

		$(".fade").each(function() {
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      

      if (objectBottom < windowBottom) {
        if ($(this).css("opacity")==0) {$(this).fadeTo(150,1);
        }
      } 

      else {
        if ($(this).css("opacity")==1) {$(this).fadeTo(150,0);
        }
      }
    });

  }).scroll();

});


//Waypoint Backgrounds

var waypoint = new Waypoint({
	element: document.getElementById('about'),
		handler: function(direction) {
			if(direction === 'down'){
        $('#site-header').css('background-color', '#273328');
				$('#site-header .navBar .navContent .nav li a').css('color', '#273328');
        $('#site-header .menuOuter .menu').css('color', '#273328');
        $('body').css('background-color', '#273328');
			}
			else if(direction === 'up'){
				$('#site-header').css('background-color', '#141415');
        $('#site-header .navBar .navContent .nav li a').css('color', '#141415');
        $('#site-header .menuOuter .menu').css('color', '#141415');
        $('body').css('background-color', '#141415');
			}

		},
    offset: '33%'
	})

var waypoint2 = new Waypoint({
  element: document.getElementById('program'),
    handler: function(direction) {
      if(direction === 'down'){
        $('#site-header').css('background-color', '#34282F');
        $('#site-header .navBar .navContent .nav li a').css('color', '#34282F');
        $('#site-header .menuOuter .menu').css('color', '#34282F');
        $('body').css('background-color', '#34282F');
      }
      else if(direction === 'up'){
        $('#site-header').css('background-color', '#273328');
        $('#site-header .navBar .navContent .nav li a').css('color', '#273328');
        $('#site-header .menuOuter .menu').css('color', '#273328');
        $('body').css('background-color', '#273328');
      }

    }
  })

var waypoint3 = new Waypoint({
  element: document.getElementById('faq'),
    handler: function(direction) {
      if(direction === 'down'){
        $('#site-header').css('background-color', '#272833');
        $('#site-header .navBar .navContent .nav li a').css('color', '#272833');
        $('#site-header .menuOuter .menu').css('color', '#272833');
        $('body').css('background-color', '#272833');
      }
      else if(direction === 'up'){
        $('#site-header').css('background-color', '#34282F');
        $('#site-header .navBar .navContent .nav li a').css('color', '#34282F');
        $('#site-header .menuOuter .menu').css('color', '#34282F');
        $('body').css('background-color', '#34282F');
      }

    },
    offset: '33%'
  })

var waypoint4 = new Waypoint({
  element: document.getElementById('tickets'),
    handler: function(direction) {
      if(direction === 'down'){
        $('#site-header').css('background-color', '#413932');
        $('#site-header .navBar .navContent .nav li a').css('color', '#413932');
        $('#site-header .menuOuter .menu').css('color', '#413932');
        $('body').css('background-color', '#413932');
      }
      else if(direction === 'up'){
        $('#site-header').css('background-color', '#272833');
        $('#site-header .navBar .navContent .nav li a').css('color', '#272833');
        $('#site-header .menuOuter .menu').css('color', '#272833');
        $('body').css('background-color', '#272833');
      }

    },
    offset: '33%'
  })


//Smooth Scroll


$('a').on('click', function(event) {

    if (this.hash !== "") {

      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1300, function(){

        window.location.hash = hash;
      });
    }
  });

$('.bnw').on('click', function(e){
    $('html, body').animate({scrollTop: $('#top').offset().top}, 1300);

});


});

