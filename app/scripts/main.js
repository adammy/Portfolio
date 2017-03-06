(function () {

  'use strict';

  var skills = [
    { name: 'HTML', number: 100 },
    { name: 'CSS', number: 100 },
    { name: 'LESS', number: 100 },
    { name: 'SASS & SCSS', number: 100 },
    { name: 'JavaScript', number: 80 },
    { name: 'jQuery', number: 80 },
    { name: 'Angular', number: 60 },
    { name: 'Node', number: 60 },
    { name: 'PHP', number: 60 },
    { name: 'SQL', number: 60 },
    { name: 'PhotoShop', number: 80 },
    { name: 'Illustrator', number: 50 },
    { name: 'Grunt', number: 70 },
    { name: 'Gulp', number: 70 },
    { name: 'Git', number: 70 }
  ];



  d3.select('#chart')
    .selectAll('div')
    .data(skills)
    .enter()
    .append('div')
    .classed('skill', true)
    .style('width', function (d) {
      return (d.number * 1) + '%';
    })
    .style('height', function (d) {
      return (d.number * 1) + '%';
    })
    .text(function (d) {
      return d.name;
    });

  $(window).on('scroll', function () {
    var scrollPos = $(window).scrollTop();
    if (scrollPos <= 0) {
      $("nav").removeClass("active");
    } else {
      $("nav").addClass("active");
    }
  });

  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 40
        }, 1000);
        return false;
      }
    }
  });


}());
