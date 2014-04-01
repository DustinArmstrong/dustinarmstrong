$(document).ready(
	$('button.flat').click(function() {
		$('body').removeClass().addClass("flat");
	}),
	$('button.simple').click(function() {
		$('body').removeClass().addClass("simple");
	})
);