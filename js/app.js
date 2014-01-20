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

});