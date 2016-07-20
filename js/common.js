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

		if (wid < 1199) {
			$('.focus-card').removeAttr('style').equalHeights();
		}

		if (wid > 991) {
			$('.teammate-about > div').removeAttr('style').equalHeights();
		}
	});

	$('.focus-card').equalHeights();

	smoothScroll(1000, "easeInOutQuart");


	//Bootstrap Scroll Spy
	$('[data-spy="scroll"]').each(function () {
		var $spy = $(this).scrollspy('refresh');
	});

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	$(".video-content").click(vid_play_pause);

	// $(window).scroll(function() {
	// 	var wScroll = $(this).scrollTop();
	// 	$('.header-descr').css({
	// 		"transform" : "translate(0px, " + wScroll/25 + "%)"
	// 	});
	// });

});

$(window).load(function(){

	$('.teammate-about > div').equalHeights();

});

function smoothScroll(duration, easing) {
	$('.main-menu ul a[href^="#"]').click(function(event) {
		var target = $( $(this).attr('href') );

		if(target.length) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
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