(function () {

  'use strict';

	$('#work-slider').slick({
		arrows: false,
		dots: false
	});

	$('video').on('mouseenter', function () {
		$(this).get(0).play();
	}).on('mouseleave', function () {
		$(this).get(0).pause();
		//$(this).get(0).currentTime = 0;
		//$(this).get(0).load();
	});

}());
