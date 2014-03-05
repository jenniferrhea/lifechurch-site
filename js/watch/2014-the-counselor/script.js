$(function() {

  if ($(window).width() < 960) {
  }
  // If the screen is wide:
  else {
    $('.watch-resources').addClass('inverse white');

    $('.page-header, .page-tertiary').animate({ opacity: '0' }, 0 );
    $('.page-tertiary').delay(2000).animate({ opacity: '1' }, 1000 );
    $('.page-header').delay(1700).animate({ opacity: '1' }, 1000 );

    $('.the-counselor-bg-2').animate({
      top: '100px',
      opacity: '1'
    }, 1000 );
  }

});
