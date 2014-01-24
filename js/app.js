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

      if ($('.header-light').length > 0) {
        $('body').removeClass('header-light').addClass('header-light-paused');
      };
    });

    // Close the more panel
    $( ".primary-links" ).delegate( ".nav-close-more", "click", function() {
      $(".page-more").fadeOut();
      $(".page-more-inner").animate({
        top: '0'
      }, 500, function() {
        // Animation complete.
      });

      $(this).removeClass("nav-close-more").addClass("nav-more");

      if ($('.header-light-paused').length > 0) {
        $('body').removeClass('header-light-paused').addClass('header-light');
      };
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
    if ($('.page-locator:contains("Watch")').length > 0) {
      $('body').addClass('page-watch');
    };
    if ($('.section-locator:contains("Watch")').length > 0) {
      $('.section-locator').remove();
      $('body').addClass('section-watch');
    };

    // For Giving
    if ($('.section-locator:contains("Giving")').length > 0) {
      $('.section-locator').remove();
      $('body').addClass('section-giving');
    };

    // For Series
    if ($('.series-locator').length > 0) {
      $('body').addClass($('.series-locator').text());
      $('.series-locator').remove();
    };

    // For Red Headers
    if ($('.header-locator:contains("Red")').length > 0) {
      $('.header-locator').remove();
      $('body').addClass('header-red');
    };


  // Locations Map

  if ($(window).width() < 960) {
  }
  // If the screen is wide:
  else {
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
  }


  // If the first section on a page is "light", make the nav "light" too
  if ($('.section-first.section-light').length > 0) {
    $('body').addClass('header-light');
  };

  // If the last section on a page is "light", make the footer "light" too
  if ($('.section-last.section-light').length > 0) {
    $('body').addClass('footer-light');
  };

  // Smooth scrolling for hash links
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });


  // SVG / PNG
  if(!Modernizr.svg) {
    $('img[src*="svg"]').attr('src', function () {
      return $(this).attr('src').replace('.svg', '.png');
    });
  }


});