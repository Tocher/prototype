var circle = $('.circle');
var teamFull = $('.team-full');
var teamFullTop = teamFull.offset().top;

$('.kid').click(function(e) {
  circle.css('top', e.pageY - teamFullTop);
  circle.css('left', e.pageX);
  circle.addClass('show');
  $('.team-details').addClass('show');
  $('.team').addClass('show');

  var avatarUrl = $(this).data('avatar') || '1';
  $('.avatar').css('background-image', 'url(' + avatarUrl + '_pic.png)');
  $('.text').css('background-image', 'url(' + avatarUrl + '_text.jpg)');
});

$('.close').click(function() {
  circle.removeClass('show');
  $('.team-details').removeClass('show');
  $('.team').removeClass('show');
});

// var kidBg = $('.kid_bg');
// $('.kid').mouseover(function() {
// 	kidBg.addClass('show');
// });

// $('.kid').mouseout(function() {
// 	kidBg.removeClass('show');
// });