$(document).ready(
	// $('button.hide-introduction').click(function() {
		//$('.hide-introduction').removeClass().addClass("flat");
		// $('.introduction').addClass('animated fadeOutUpBig'),
		// $('.introduction').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
		// 	$('.introduction').addClass('hidden');
		// }),
		$('body.blue nav').addClass('animated slideInRight'),
		$('body.blue .avatar').addClass('animated flipInX'),
		$('body.blue .main-header h1, body.blue .main-header .h1').addClass('animated slideInDown'),
		$('body.blue .section:nth-child(odd)').addClass('animated slideInLeft'),
		$('body.blue .section:nth-child(even)').addClass('animated slideInRight'),
	// }),
	$('nav.primary ul').click(function() {
		if ($(this).hasClass('expand')) {
			$(this).removeClass();
		} else {
			$(this).addClass('expand');
		}
	}),
	$('a').scrollTo(),
	$('.contact-toggle').click(function() {
		if ($('#contact').hasClass('expand')) {
			$('#contact').removeClass('expand');
		} else {
			$('#contact').addClass('expand');
		}
	})	
	// $('.avatar').click(function() {
	// 	if ($('body').hasClass('blue')) {
	// 		$('body').removeClass().addClass('pink');
	// 	} else {
	// 		$('body').removeClass().addClass('blue');
	// 	}
	// })
);