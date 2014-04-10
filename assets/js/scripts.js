$(document).ready(
	$('body.blue nav').addClass('animated slideInRight'),
	$('body.blue .avatar').addClass('animated flipInX'),
	$('body.blue .main-header h1, body.blue .main-header .h1').addClass('animated slideInDown'),
	$('body.blue .section:nth-child(odd)').addClass('animated slideInLeft'),
	$('body.blue .section:nth-child(even)').addClass('animated slideInRight'),
	$('nav.primary ul').click(function() {
		if ($(this).hasClass('expand')) {
			$(this).removeClass();
		} else {
			$(this).addClass('expand');
		}
	})
);