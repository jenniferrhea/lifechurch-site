$(function() {

  $('.watch-resources').addClass('white inverse');

  $('.learn-more').click(function() {

    if ($(window).width() > 640) {

      // Fade out the intro text
      $(".slide-1").fadeOut(1000);

      // Hide nav
      $(".page-header, .page-tertiary").animate({ opacity: 0 }, 1000);
      // Move couch to the left
      $(".inner").animate({ opacity: 0 }, 1000, function() {
        $(".couch").animate({ opacity: 1 }, 1000);
        // Make canvas larger
        $(".the-counselor-1").animate({ height: "550px" }, 1000, function () {

          // Enter person 1
          $(".animation-elements .person").addClass("person-1 state-1").animate({ opacity: 1, top: "170px" }, 500, function () {
            // Person 1 state 2
            $(".animation-elements .person").addClass("state-2").delay(50).animate({ opacity: 1 },0, function() {

              $(".animation-elements .person").addClass("state-3");
              // Enter quote 1
              $(".quote-1").fadeIn(1000, function() {
                // Fade out person 1
                $(".animation-elements .person-1").delay(2000).animate({ opacity: 0, }, 1000)
                // Fade out quote 1
                $(".quote-1").delay(2000).fadeOut(1000, function () {
                  $(".animation-elements .person").removeClass("person-1 state-2 state-3").animate({ top: "-130px" }, 0).addClass("person-2 state-1").animate({ opacity: 1, top: "170px" }, 500, function () {
                    // Person 1 state 2

                    $(".animation-elements .person").addClass("state-2").delay(50).animate({ opacity: 1 },0, function() {

                      $(".animation-elements .person").addClass("state-3");
                      // Enter quote 1
                      $(".quote-2").fadeIn(1000, function() {
                        // Fade out person 1
                        $(".animation-elements .person-2").delay(2000).animate({ opacity: 0, }, 1000)
                        // Fade out quote 1
                        $(".quote-2").delay(2000).fadeOut(1000, function () {
                        // Fade in quote 3
                        $(".quote-3").fadeIn(1000, function() {
                          // Fade out quote 3
                          $(".quote-3").delay(2000).fadeOut(1000, function (){
                            // Put everything back how it was
                            $(".page-header, .page-tertiary").animate({ opacity: 1 }, 1000);
                            $(".animation-elements .person").removeClass().addClass('person').animate({ top: "-130px" });
                            $(".slide-1").fadeIn(1000);
                            $(".couch").animate({ opacity: 0 }, 1000);
                            $(".the-counselor-1").animate({ height: "330px" }, 1000, function() {
                              $(".inner").animate({ opacity: 1 }, 1000);
                              $('html, body').animate({ scrollTop:$('#messages').position().top }, 1000);
                            });
                          });
                        });
                      });
                      });
                    });
                  });
                });
              });


            });
          });

        });
      });

    } else {

      // Fade out the intro text
      $(".slide-1").fadeOut(1000);

      // Make canvas larger
      $(".the-counselor-1").animate({
        height: "300px"
      }, 1000);

      // Hide nav
      $(".page-header, .page-tertiary").animate({ opacity: 0 }, 1000);

      $(".animation-elements .person").addClass("person-1-thin").animate({ top: "250px", opacity: 1 }, 1000, function() {


        $(".quote-1").fadeIn(1000, function() {

          $(".animation-elements .person").delay(2000).animate({ top: "500px", }, 1000)

            $(".quote-1").delay(2000).fadeOut(1000, function () {

              $(".animation-elements .person").addClass("person-2-thin").animate({ top: "250px" }, 1000, function() {
                $(".quote-2").fadeIn(1000, function() {
                  $(".animation-elements .person").delay(2000).animate({ top: "500px", }, 1000)
                  $(".quote-2").delay(2000).fadeOut(1000, function () {
                    $(".quote-3").fadeIn(1000, function() {
                      $(".quote-3").delay(2000).fadeOut(1000, function () {
                        // Put everything back how it was
                        $(".page-header, .page-tertiary").animate({ opacity: 1 }, 1000);
                        $(".animation-elements .person").removeClass().addClass('person');
                        $(".slide-1").fadeIn(1000);
                        $(".the-counselor-1").animate({ height: "250px" }, 1000, function(){
                          $('html, body').animate({ scrollTop:$('#messages').position().top }, 1000);
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });

    }

    return false;
  });





});
