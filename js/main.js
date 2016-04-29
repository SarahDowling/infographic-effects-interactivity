// PROTEIN ANIMATION
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

// IRON MAN ANIMATION

$('#iron-man').on('mouseover', function () {
  $(this).removeClass('iron-man-animate');
  $('#hey-bubble').removeClass('unit-xs-hidden');
});

// BEAN ANIMATION

$('#kidney-beans').on('click', function () {
  $('.kidney-position').removeClass('kidney-position');
  $('.kidney-label').removeClass('bean-label-hide');
});

$('#swiss-chard').on('click', function () {
  $(this).removeClass('swiss-position');
  $('.swiss-label').removeClass('bean-label-hide');
});

$('#lima-beans').on('click', function () {
  $(this).removeClass('lima-position');
  $('.lima-label').removeClass('bean-label-hide');
});

$('#chickpeas').on('click', function () {
  $(this).removeClass('chick-position');
  $('.chick-label').removeClass('bean-label-hide');
});

$('#soybeans').on('click', function () {
  $(this).removeClass('soy-position');
  $('.soy-label').removeClass('bean-label-hide');
});

$('#lentils-1').on('click', function () {
  $(this).removeClass('lentil-position');
  $('.lentil-label').removeClass('bean-label-hide');
});

// CARBON FOOTPRINT ANIMATION
// waypoint the foot graph
// for each of the lines, delay:
// 	add class to make animation to the line
//  	transition opacity of labels with a delay

$('.circle-number').waypoint(function () {
  $('this').addClass('circle-animate');
}, {offset: '90%'});
