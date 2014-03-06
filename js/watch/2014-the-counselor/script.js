$(function() {

  // Init Skrollr
  var s = skrollr.init({
    render: function(data) {
      //Debugging - Log the current scroll position.
      console.log(data.curTop);
    }
  });


  function please_scroll() {
    $('.scroll-arrow')
      .animate({"top":"10px"},1000)
      .delay(500)
      .animate({"top":"0px"},1000)
      .delay(500)
      .show(0, please_scroll);
  }

  please_scroll();

});
