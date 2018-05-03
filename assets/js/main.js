

$(document).ready(function() {
	'use strict';
	
	/*	WOW	*/
	var wow = new WOW({
		animateClass: 'animated',
		offset: 10,
		mobile: true
	});
	wow.init();
	
	/*	Smooth Scroll To Anchor	*/
	$('.nav-link').on('click', function(e){
		if (window.matchMedia('(max-width: 767px)').matches){
                e.preventDefault();
		}
    });
    $('.navbar-nav a').on('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
	
	/*	STICKY HEADER	*/
	$(window).on('scroll', function () {
        if ($(window).scrollTop() < 100) {
            $('.header').removeClass('sticky_header');
        } else {
            $('.header').addClass('sticky_header');
        }
    });
	
	/*	COUNTER JS	*/
	$('.counter').counterUp({
        delay: 5,
        time: 3000
    });
	
	/*	OWL CAROUSEL	*/
	$(".hero_carousel").owlCarousel({
        loop:true,
        autoplay:true,
        smartSpeed:550,
        autoplayHoverPause:false,
        dots:true,
        nav:false,
        responsiveClass:true,
        items:1,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn'
    });
	$(".testimonial_carousel_one").owlCarousel({
        loop:true,
        autoplay:true,
        smartSpeed:550,
        autoplayHoverPause:false,
        dots:true,
        nav:false,
        responsiveClass:true,
        items:1
    });
	
	
	
});