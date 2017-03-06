(function () {

  'use strict';

  var skills = [
    { name: "HTML", number: 100 },
    { name: "CSS", number: 100 },
    { name: "LESS", number: 100 },
    { name: "SASS", number: 100 },
    { name: "SCSS", number: 100 },
    { name: "JavaScript", number: 80 },
    { name: "jQuery", number: 80 },
    { name: "Angular", number: 60 },
    { name: "Node", number: 60 },
    { name: "PHP", number: 60 },
    { name: "PhotoShop", number: 80 },
    { name: "Illustrator", number: 50 },
    { name: "Grunt", number: 70 },
    { name: "Gulp", number: 70 },
    { name: "Git", number: 70 }
  ];

  d3.select(".chart")
    .selectAll("div")
    .data(skills)
    .enter()
    .append("div")
    .classed("skill-circle", true)
    .style("width", function (d) {
      return (d.number * 1.2) + "px";
    })
    .style("height", function (d) {
      return (d.number * 1.2) + "px";
    })
    .text(function (d) {
      return d.name;
    });

  /*
  $('.work-item').waypoint({
    handler: function () {
      $("#" + this.element.id).find(".typer").addClass("typing");
    },
    offset: 200
  });
  */

}());
