$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(window).bind("load", function() {
	$("body").removeClass("preload");
	$('#topbar').addClass('animated slideInDown');
	$('.avatar').addClass('animated flipInX');
	$('.plus, .equals').addClass('animated rotateIn');
	$('.saa-logo').addClass('animated slideInDown');
	$('.heart').addClass('animated slideInRight');
	$('.greeting').addClass('animated fadeIn');
	$('.hire-me').addClass('animated slideInUp');
});
