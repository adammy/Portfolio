(function () {

  'use strict';

	const WORKSLIDER = $('#work-slider');

	WORKSLIDER.slick({
		arrows: false,
		dots: false
	});

	WORKSLIDER.on('beforeChange', function (event, slick, currentSlide, nextSlide) {

		// get slide elements
		let prevSlide = $(slick.$slides.get(currentSlide));

		// previous slide videos reset time to beginning (rewind)
		prevSlide.find('video').get(0).currentTime = 0;
		prevSlide.find('video').get(1).currentTime = 0;

		// reload previous slide videos with new start time
		setTimeout(function () {
			prevSlide.find('video').get(0).load();
			prevSlide.find('video').get(1).load();
		}, 500);

	});

	WORKSLIDER.on('afterChange', function (event, slick, currentSlide) {

		// get slide elements
		let slide = $(slick.$slides.get(currentSlide));

		// next slide types address bar
		$('.slide').find('.typer').removeClass('typing');
		slide.find('.typer').addClass('typing');

	});

	$('video').on('mouseenter', function () {
		$(this).get(0).play();
	}).on('mouseleave', function () {
		$(this).get(0).pause();
		//$(this).get(0).currentTime = 0;
		//$(this).get(0).load();
	});

}());
