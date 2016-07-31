$(function() {

	$('.toggle-menu').click(function(e) {
		var menu = ".main-menu ul";
		$(this).toggleClass('on');
		$(menu).slideToggle();
		e.preventDefault();
	});

	$('.main-menu ul li').on('click', function(e) {
    	var wid = $(window).width();
    	if(wid < 992) {
        	e.preventDefault();
        	$(".toggle-menu").toggleClass('on');
			$(this).parent().slideToggle();
		}
    });

	$(window).resize(function(){

		var wid = $(window).width();

		if(wid > 991 && $('.main-menu ul').is(':hidden')) {
			$('.main-menu ul').removeAttr('style');
		}

		if (wid < 992) {
			$(".teammate-about").hide();
			$('.teammate-about .equalize').removeAttr('style');
		}
	});

	$('.focus-card').equalHeights();
	$('.why-item').equalHeights();

	teamStuff();

	smoothScroll(1000, "easeInOutQuart");


	//Bootstrap Scroll Spy
	$('[data-spy="scroll"]').each(function() {
		var $spy = $(this).scrollspy({
			offset: 80
		});
	});

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	$(".video-content").click(vid_play_pause);

	$(".owl-carousel").owlCarousel({
		loop: true,
		items: 1,
		dots: true,
		autoplay: true,
		autoplayHoverPause: true,
		autoplaySpeed: 1000,
		smartSpeed: 500 
	});

});

$(window).load(function(){

	$('body').addClass('loaded');

	if ($(window).width() > 991) {
		$('.team-card:first, .teammate-about:first-child').addClass('active');
		$('.teammate-about:first-child').show();
		$('.teammate-about .equalize').equalHeights();
	}

});

function smoothScroll(duration, easing) {
	$('.main-menu ul a[href^="#"]').click(function(event) {
		var target = $( $(this).attr('href') );

		if(target.length) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top - 75
			}, duration, easing);
		}
	});
}

function vid_play_pause() {
	var myVideo = document.getElementById("awesomeness");
	myVideo.volume = 0.25;
	if (myVideo.paused) {
		$(".controls-wrap").fadeOut("200");
		myVideo.play();
	} else {
		$(".controls-wrap").fadeIn("100");
		myVideo.pause();
	}
}

function teamStuff() {
	$('.team-card').click(function() {
		$('.team-card, .teammate-about').removeClass('active');
		$(this).addClass('active');
		$(".teammate-about").hide();

		var i = $(this).parent().index();
		var teammate = ".teammate-about:eq(" + i + ")";
		$(teammate).show().addClass("active");
		if ($(window).width() > 991) {
			$('.teammate-about .equalize').equalHeights();
		}
	});
	$('.popup-close').click(function() {
		$(this).closest(".teammate-about").hide();
	});
}