// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(function() {

  // "More" panel open/close
    
    // Open the more panel
    $( ".primary-links" ).delegate( ".nav-more", "click", function() {
      $(".page-more").fadeIn();
      $(".page-more-inner").animate({
        top: '90px'
      }, 500, function() {
        // Animation complete.
      });
      
      $(this).removeClass("nav-more").addClass("nav-close-more");
      //$(".nav-close-more").text("Close")
    });

    // Close the more panel
    $( ".primary-links" ).delegate( ".nav-close-more", "click", function() {
      $(".page-more").fadeOut();
      $(".page-more-inner").animate({
        top: '-5%'
      }, 500, function() {
        // Animation complete.
      });

      $(this).removeClass("nav-close-more").addClass("nav-more");
      //$(".nav-more").text("More")
    });


  // Add 'section-*' classes on <body>

    // For Locations
    if ($('.page-locator:contains("Locations")').length > 0) {
      $('body').addClass('page-locations');
    };
    if ($('.section-locator:contains("Locations")').length > 0) {
      $('.section-locator').remove();
      $('body').addClass('section-locations');
    };

    // For Watch
    if ($('.section-locator:contains("Watch")').length > 0) {
      $('.section-locator').remove();
      $('body').addClass('section-watch');
    };

    // For Giving
    if ($('.section-locator:contains("Giving")').length > 0) {
      $('.section-locator').remove();
      $('body').addClass('section-giving');
    };


  // Locations Map

    // General pin zoom
    $( ".map-wrapper" ).delegate( ".pin-ok, .pin-tx", "click", function() {
      $(".pin-state").fadeOut(200);
      $(".map-back").fadeIn(500);
    });

    // OK pin zoom
    $( ".map-wrapper" ).delegate( ".pin-ok", "click", function() {
      $(".map").addClass("map-ok");
      $(".pin-campus-ok").delay(300).fadeIn(300);
      $(".map-list-ok").delay(400).fadeIn(300);
    });

    // TX pin zoom
    $( ".map-wrapper" ).delegate( ".pin-tx", "click", function() {
      $(".map").addClass("map-tx");
      $(".pin-campus-tx").delay(300).fadeIn(300);
    });

    // Back / Zoom out
    $( ".map-wrapper" ).delegate( ".map-back", "click", function() {
      $(".map").removeClass().addClass("map");
      $(".pin, .map-list").fadeOut(200);
      $(".map-back").fadeOut(500);
      $(".pin-state").delay(300).fadeIn(300);
    });


});