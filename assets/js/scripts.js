$(document).ready(
	$('button.hide-introduction').click(function() {
		//$('.hide-introduction').removeClass().addClass("flat");
		$('.introduction').addClass('animated fadeOutUpBig');
		$('.introduction').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
			$('.introduction').addClass('hidden');
		});
		$('nav').addClass('animated slideInRight');
		$('.avatar').addClass('animated flipInX');
		$('header h1').addClass('animated slideInDown');
		$('.section:nth-child(odd)').addClass('animated slideInLeft');
		$('.section:nth-child(even)').addClass('animated slideInRight');
	}),
	$('.avatar').click(function() {
		if ($('body').hasClass('blue')) {
			$('body').removeClass().addClass('pink');
		} else {
			$('body').removeClass().addClass('blue');
		}
	})
);