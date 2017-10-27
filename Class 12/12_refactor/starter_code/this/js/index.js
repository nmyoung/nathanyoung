(function($){

  $('.btn').click(function(e) {
    $(this).html('This button was clicked');
  });

  $('p').click(function(e) {
    $(this).fadeOut(500);
  });
  
})(jQuery)