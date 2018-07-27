

function showMenu() {
	$('.media_nav').slideDown(500);
}

function closeMenu() {
	$('.media_nav').slideUp(500);
}

$(document).ready(function() {

	$(".hamburger").on('click', function() {
    $(this).toggleClass("open");
    $('.media_nav').toggle(900);
    // $('.media_menu p').html('<p>Close Menu</p>').css({'margin': '0px'});
  	})

	$('#fadeImage').hide();
	$('#fadeImage').fadeIn(2000);

	$('.content_heading').hide();
	$('.content_heading').fadeIn(2000);

});