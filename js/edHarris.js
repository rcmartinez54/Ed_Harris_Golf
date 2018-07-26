

function showMenu() {
	$('.media_nav').slideDown(500);
}

function closeMenu() {
	$('.media_nav').slideUp(500);
}

$(document).ready(function() {

	$('#fadeImage').hide();
	$('#fadeImage').fadeIn(2000);

	$('.content_heading').hide();
	$('.content_heading').fadeIn(2000);

	$('.media_menu .close').hide();

	$('.media_menu img').on('click', function() {
		showMenu();
		$('.media_menu p').html('<p>Close Menu</p>').css({'margin': '0px'});
		$('.media_menu .open').hide();
		$('.media_menu .close').show();
	});

	$('.media_menu .close').on('click', function() {
		closeMenu();
		$('.media_menu .open').show();
		$('.media_menu .close').hide();
		$('.media_menu p').html('<p>Menu</p>');
	})

})