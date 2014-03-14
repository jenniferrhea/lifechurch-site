$(function() {
  /*$('body').removeAttr('id');
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
  please_touch();*/


  $('.learn-more').click(function() {

    // Fade out the intro text
    $(".slide-1").fadeOut(1000);

    // Make canvas larger
    $(".the-counselor-1").animate({
      height: "660px"
    }, 1000);

    // Move couch to the left
    $(".couch").animate({ top: "390px", marginLeft: "-80px" }, 1000, function() {
      // Let things overflow
      $(".the-counselor-1").removeClass("contain");
      // Enter person 1
      $(".person").addClass("person-1 state-1").animate({ opacity: 1, top: "170px" }, 500, function () {
        // Person 1 state 2
        $(".person").addClass("state-3");
        // Enter quote 1
        $(".quote-1").fadeIn(1000, function() {
          // Fade out person 1
          $(".person-1").delay(1000).animate({ opacity: 0, }, 1000)
          // Fade out quote 1
          $(".quote-1").delay(1000).fadeOut(1000, function () {
            $(".person").removeClass("person-1 state-3").animate({ top: "-130px" }, 0).addClass("person-2 state-1").animate({ opacity: 1, top: "170px" }, 500, function () {
              // Person 1 state 2
              $(".person").addClass("state-3");
              // Enter quote 1
              $(".quote-2").fadeIn(1000, function() {
                // Fade out person 1
                $(".person-2").delay(1000).animate({ opacity: 0, }, 1000)
                // Fade out quote 1
                $(".quote-2").delay(1000).fadeOut(1000, function () {
                  // Fade in quote 3
                  $(".quote-3").fadeIn(1000, function() {
                    // Fade out quote 3
                    $(".quote-3").delay(1000).fadeOut(1000, function (){
                      // Put everything back how it was
                      // Let things overflow
                      $(".the-counselor-1").addClass("contain");
                      $(".person").removeClass().addClass('person').animate({ top: "-130px" });
                      $(".slide-1").fadeIn(1000);
                      $(".couch").animate({ top: "290px", marginLeft: "0" }, 1000);
                      $(".the-counselor-1").animate({ height: "500px" }, 1000);
                    });
                  });
                });
              });
            });
          });
        });
      });
    });







    // Make person 2
    // setTimeout(function(){
    //   $(".person")
    //     .addClass("person-2").removeClass("person-1 state-3")
    //     .animate({
    //       opacity: 0,
    //       top: "0px"
    //     }, 0);
    // }, 6000)

    // Enter person 2
    // $(".person")
    //   .delay(1000)
    //   .animate({
    //     opacity: 1,
    //     top: "30px"
    // }, 500);





    return false;
  });


  $(function animation() {



    /*
    $(".viner .vine-1-1").show(0).delay(100).animate({
      top: "400"
    }, 1000 ).delay(4000).animate({
      top: "700"
    }, 1000 ).hide(0);

    $(".viner .vine-2").show(0).delay(5500).animate({
      top: "0"
    }, 1000 ).delay(4000).animate({
      top: "629"
    }, 1000 ).hide(0);

    $(".viner .vine-2-1").show(0).delay(5600).animate({
      top: "400"
    }, 1000 ).delay(4000).animate({
      top: "700"
    }, 1000 ).hide(0);

    $(".viner .vine-3").show(0).delay(11000).animate({
      top: "0"
    }, 1000 ).delay(4000).animate({
      top: "629"
    }, 1000 ).hide(0);

    $(".viner .vine-3-1").show(0).delay(11100).animate({
      top: "400"
    }, 1000 ).delay(4000).animate({
      top: "700"
    }, 1000 ).hide(0);

    $(".viner .vine-4").show(0).delay(16500).animate({
      top: "0"
    }, 1000 ).delay(4000).animate({
      top: "629"
    }, 1000 ).hide(0);

    $(".viner .vine-4-1").show(0).delay(16600).animate({
      top: "400"
    }, 1000 ).delay(4000).animate({
      top: "700"
    }, 1000 ).hide(0);*/

  });















});
