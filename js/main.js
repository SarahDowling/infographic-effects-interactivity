// 2) add classes to the food circles and transition opacity in... make delay so one by one

$('.kids').on('click', function () {
  $('.circle-food').removeClass('circle-hide');
  $('#protein-bubble').removeClass('protein-bubble-scale');
  $('.kids').removeClass('kids');
});

// listen for click on circle food
// add class to transition opacity and animate downward

$('.circle-food').on('click', function () {
  $('circle-label').addClass('show-transition');
});

// click add remove animation class from the dude
// remove animation class from the dude
//  add class opacity plus transition

$('#iron-man').on('mouseover', function () {
  $(this).removeClass('iron-man-animate');
  $('#hey-bubble').removeClass('unit-xs-hidden');
});

// listen for click on the bean
// add class to animate bean to new position
// add class to animate slide of label and transition opacity

$('.bean').on('click', function () {
  $('this').aremoClass('bean-move');
  $('this').removeClass('bean');
});

// waypoint the foot graph
// for each of the lines, delay:
// 	add class to make animation to the line
//  	transition opacity of labels with a delay

$('.circle-number').waypoint(function () {
  $('this').addClass('circle-animate');
}, {offset: '5%'});
