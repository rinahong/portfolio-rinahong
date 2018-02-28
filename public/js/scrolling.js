function scrollNav() {
  $('.nav-link').click(function(){
    //Toggle Class
    $(".nav-item").removeClass("active");
    $(this).closest('li').addClass("active");
    //Animate
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 100
    }, 400);
    return false;
  });

  $('.scrollTop a').scrollTop();
}

// Back to Top event
$(document).ready(function(){
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 15) {
			$('#mainNav').css( "background-color", 'black')
      // $('#mainNav').css( "height", '1rem')
		} else {
      $('#mainNav').css( "background-color", 'transparent')
      // $('#mainNav').css( "height", '')
		}
	});

  scrollNav();

});
