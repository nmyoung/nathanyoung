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

$('.programDates h3').click(function() {
  var time_class = "." + this.id + "Times";
  $('.programDates h3').removeClass('h3Active');
  $(this).addClass('h3Active');
  $('.programTimes').removeClass('activeTimes');
  $(time_class).addClass('activeTimes');
});


//FAQ Info

$('.faqBody h3').click(function() {
  var question_class = "." + this.id + "-answer";
  $('.faqBody h3').removeClass('h3Active');
  $(this).addClass('h3Active');
  $('.faqBody p').removeClass('pActive');
  $(question_class).addClass('pActive');
});


//Image Fade

$(window).on("load",function() {
	$(window).scroll(function() {

    var header = $('#site-header').height(),
        windowScroll = $(window).scrollTop(),
        currentPos = header + windowScroll;
    

    $(".fade").each(function() {
      var image = $(this).offset().top;
      
      if ((currentPos + 300) > image) {
        if ($(this).css("opacity")==0) {$(this).fadeTo(150,1);
        }
      } else {
        if ($(this).css("opacity")==1) {$(this).fadeTo(150,0);
        }
      }
            
    });

/*
		
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();

		$(".fade").each(function() {
      var objectBottom = $(this).offset().top + $(this).outerHeight();

      if ($(this).find('img').hasClass('aboutImage1')) {
        console.log(this);
        console.log(objectBottom);
        console.log(windowBottom);
      }
      
      

      if (objectBottom < windowBottom) {
        if ($(this).css("opacity")==0) {$(this).fadeTo(150,1);
        }
      } 

      else {
        if ($(this).css("opacity")==1) {$(this).fadeTo(150,0);
        }
      }
    });*/

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

    },
    offset: '33%'
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

$('a').on('click', function() {

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

$('.bnw').on('click', function(){
    $('html, body').animate({scrollTop: $('#top').offset().top}, 1300);

});


});

