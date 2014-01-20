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
      $(".nav-close-more").text("Close")
    });

    // Close the more panel
    $( ".primary-links" ).delegate( ".nav-close-more", "click", function() {
      $(".page-more").fadeOut();
      $(".page-more-inner").animate({
        top: '-100%'
      }, 500, function() {
        // Animation complete.
      });

      $(this).removeClass("nav-close-more").addClass("nav-more");
      $(".nav-more").text("More")
    });


});