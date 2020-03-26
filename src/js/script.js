//top scrulll
$(document).ready(function(){


$(window).on('scroll',function(){

if($(this).scrollTop()>100) {
	$('.navbar').addClass('bg-black')
}else{
	$('.navbar').removeClass('bg-black')
}

});

});
	//***************** Start scroll to top button ******************************************
	var scrollButton = $('.scroll_top'),
		page = $('html');
	$(scrollButton).on('click', function () {
		$(page).animate({
			scrollTop: '0'
		}, 100);
	});
	
	// Show & hide scroll button on scroll
	$(window).on('scroll', function () {
		
		if ($(this).scrollTop() > 500) {
			$(scrollButton).show();
			
		} else {
			$(scrollButton).fadeOut(500);
		}
	});


//loder page
$(window).on('load', function() {
	var preLoder = $("#preloader");
	preLoder.delay(800).fadeOut(600).addClass('loaded');

});
