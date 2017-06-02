(function () {

  'use strict';

	$('#work .item').waypoint(function (direction) {
		let workItem = $(this)[0].element.attributes['data-item'].nodeValue,
				workItemEl = $(`#work .item[data-item=${workItem}]`);
		workItemEl.addClass('animated fadeInUp');
		workItemEl.find('.typer').addClass('typing');
	}, {
		offset: 300
	});

	$('video').on('mouseenter', function () {
		$(this).get(0).play();
	}).on('mouseleave', function () {
		$(this).get(0).pause();
		//$(this).get(0).currentTime = 0;
		//$(this).get(0).load();
	});

}());
