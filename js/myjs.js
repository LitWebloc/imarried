	var csslightbox = anime({
  targets: '.lightbox',
  opacity: 0,
  easing: 'easeInOutQuad',
		autoplay: false
});
//document.querySelector('.overlay').onclick = csslightbox.play;
$('.work img').click(function(){
	$( ".lightbox figure" ).delay(500).fadeIn(500);
	$( ".overlay" ).fadeIn(500);

});

$( ".overlay" ).click(function() {
	$( ".lightbox figure" ).fadeOut(500);
	$( ".overlay" ).delay(500).fadeOut(500);
	$( "ul.log-in menu" ).fadeOut(500);
});

$( "#user" ).click(function() {
	$( "ul.log-in menu" ).fadeIn(500);
});
$( "#user" ).click(function() {
	$( "ul.log-in menu" ).fadeIn(500);
	$( "nav ul.log-in .overlay" ).fadeIn(500);
});