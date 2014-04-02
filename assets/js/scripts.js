$(document).ready(
	$('button.hide-introduction').click(function() {
		//$('.hide-introduction').removeClass().addClass("flat");
		$('.introduction').addClass('animated fadeOutUpBig');
		$('.introduction').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
			$('.introduction').addClass('hidden');
		});
		$('.avatar').addClass('animated flipInX');
		$('header h1').addClass('animated slideInDown');
		$('.content').addClass('animated slideInLeft');
	})
);