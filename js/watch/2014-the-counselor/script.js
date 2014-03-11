$(function() {
  $('body').removeAttr('id');
  $('body').wrapInner('<div class="no-skrollr"></div>');

  $('.the-counselor-1-ender').insertAfter('.no-skrollr');
  $('.skrollr-elements').insertAfter('.no-skrollr');

  $('.no-skrollr').attr('id', 'skrollr-body');

  function please_scroll() {
    $('.scroll-arrow')
      .animate({"top":"10px"},1000)
      .delay(500)
      .animate({"top":"0px"},1000)
      .delay(500)
      .show(0, please_scroll);
  }
  please_scroll();

  function please_touch() {
    $('.touch-status')
      .delay(1000)
      .animate({"height":"66px", "top":"25px"},1000)
      .delay(1500)
      .animate({"height":"36px", "top":"55px"},0)
      .delay(500)
      .show(0, please_touch);

    $('.touch-active')
      .animate({"opacity":"1"},500)
      .delay(500)
      .animate({"top":"0px"},1000)
      .delay(500)
      .animate({"opacity":"0"},1000)
      .animate({"top":"57px"},0)
      .show(0);

    $('.touch-finger')
      .delay(1000)
      .animate({"top":"6px"},1000)
      .delay(500)
      .animate({"top":"63px"},1000)
      .show(0);
  }
  please_touch();

});
