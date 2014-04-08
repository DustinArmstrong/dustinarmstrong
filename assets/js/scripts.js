$(document).ready(
	// $('button.hide-introduction').click(function() {
		//$('.hide-introduction').removeClass().addClass("flat");
		$('.introduction').addClass('animated fadeOutUpBig'),
		$('.introduction').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
			$('.introduction').addClass('hidden');
		}),
		$('nav').addClass('animated slideInRight'),
		$('.avatar').addClass('animated flipInX'),
		$('.main-header h1, .main-header .h1').addClass('animated slideInDown'),
		$('.section:nth-child(odd)').addClass('animated slideInLeft'),
		$('.section:nth-child(even)').addClass('animated slideInRight'),
	// }),
	$('nav.primary ul').click(function() {
		if ($(this).hasClass('expand')) {
			$(this).removeClass();
		} else {
			$(this).addClass('expand');
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