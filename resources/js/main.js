$(document).ready(function() {
	// circle progressbar
	$('svg.radial-progress').each(function( index, value ) { 
	  $(this).find($('circle.complete')).removeAttr( 'style' );
	});
	
	$(window).scroll(function(){
  $('svg.radial-progress').each(function( index, value ) { 
    // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
    if ( 
        $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
        $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
    ) {
        // Get percentage of progress
        percent = $(value).data('percentage');
        // Get radius of the svg's circle.complete
        radius = $(this).find($('circle.complete')).attr('r');
        // Get circumference (2πr)
        circumference = 2 * Math.PI * radius;
        // Get stroke-dashoffset value based on the percentage of the circumference
        strokeDashOffset = circumference - ((percent * circumference) / 100);
        // Transition progress for 1.25 seconds
        $(this).find($('circle.complete')).animate({'stroke-dashoffset': strokeDashOffset}, 1250);
    }
  });
 }).trigger('scroll');
	
	$(window).scroll(function(e) {
		let nav = $('nav');
		nav.toggleClass('sticky', $(this).scrollTop() > 588);
	})
	
//	owl-carousel 
	$('.owl-carousel').owlCarousel({
		rtl: false,
		loop: true,
		margin: 10,
		slideBy: 1,
		nav: true,
		dots: false,
		autoplay: true,
		autoplayTimeOut: 100,
		autoplayHoverPause: true,
	});
	$('li.list').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		const value = $(this).attr('data-filter');
		if(value == 'all') {
			$('.filter_item').show(500)
		}
		else {
			$('.filter_item').not('.'+value).hide(500);
			$('.filter_item').filter('.'+value).show(500);
		}
	})
	$('.nav_link').click(function() {$(this).addClass('active').siblings().removeClass('active')})
})