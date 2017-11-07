$(document).ready(function(){

$('.menuOuter').click(function() {
	if($('.navBar').css('display') === 'none')
	{$('.navBar').css('display', 'inline-block');
	 $('.menuOuter').css('margin-bottom', '3px');
	}

	else if($('.navBar').css('display') === 'inline-block')
	{$('.navBar').css('display', 'none');
	 $('.menuOuter').css('margin-bottom', '0px');
	}

});

$(window).scroll(function() {
  
  // selectors
  var $window = $(window),
      $body = $('body'),
      $panel = $('.js-color');
  
  // Change 33% earlier than scroll position so colour is there when you arrive.
  var scroll = $window.scrollTop() + ($window.height() / 1);
 
  $panel.each(function () {
    var $this = $(this);
    
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
          
      $body.removeClass(function (index, css) {
        return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
      });
       
      $body.addClass('color-' + $(this).data('color'));
    }
  });    
  
}).scroll();


$(window).on("load",function() {
	$(window).scroll(function() {
		var windowBottom = $(this).scrollTop() + $(this).innerHeight();
		$(".fade").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(150,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(150,0);}
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});


 var waypoint = new Waypoint({
		element: document.getElementById('about'),
		handler: function(direction) {
			if(direction=== 'down'){
        $('#site-header').css('background-color', '#273328');
				$('#site-header .navBar .navContent .nav li a').css('color', '#273328');
        $('#site-header .menuOuter .menu').css('color', '#273328');
			}
			else if(direction === 'up'){
				$('#site-header').css('background-color', '#141415');
        $('#site-header .navBar .navContent .nav li a').css('color', '#141415');
        $('#site-header .menuOuter .menu').css('color', '#141415');
			}

		}
	})

  var waypoint2 = new Waypoint({
    element: document.getElementById('program'),
    handler: function(direction) {
      if(direction=== 'down'){
        $('#site-header').css('background-color', '#332827');
        $('#site-header .navBar .navContent .nav li a').css('color', '#332827');
        $('#site-header .menuOuter .menu').css('color', '#332827');
      }
      else if(direction === 'up'){
        $('#site-header').css('background-color', '#273328');
        $('#site-header .navBar .navContent .nav li a').css('color', '#273328');
        $('#site-header .menuOuter .menu').css('color', '#273328');
      }

    }
  })

  var waypoint3 = new Waypoint({
    element: document.getElementById('gallery'),
    handler: function(direction) {
      if(direction=== 'down'){
        $('#site-header').css('background-color', '#332827');
        $('#site-header .navBar .navContent .nav li a').css('color', '#332827');
        $('#site-header .menuOuter .menu').css('color', '#332827');
      }
      else if(direction === 'up'){
        $('#site-header').css('background-color', '#332827');
        $('#site-header .navBar .navContent .nav li a').css('color', '#332827');
        $('#site-header .menuOuter .menu').css('color', '#332827');
      }

    }
  })

  var waypoint4 = new Waypoint({
    element: document.getElementById('faq'),
    handler: function(direction) {
      if(direction=== 'down'){
        $('#site-header').css('background-color', '#272833');
        $('#site-header .navBar .navContent .nav li a').css('color', '#272833');
        $('#site-header .menuOuter .menu').css('color', '#272833');
      }
      else if(direction === 'up'){
        $('#site-header').css('background-color', '#332827');
        $('#site-header .navBar .navContent .nav li a').css('color', '#332827');
        $('#site-header .menuOuter .menu').css('color', '#332827');
      }

    }
  })


});
