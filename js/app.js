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


  // Add classes on <body> for Series

  if ($('.series-locator').length > 0) {
    $('body').addClass($('.series-locator').text());
    $('.series-locator').remove();
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
      $(".map-list-okc").delay(400).fadeIn(300);
      $(".map-list-stillwater").delay(440).fadeIn(300);
      $(".map-list-tulsa").delay(480).fadeIn(300);
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


  // Locations Page

  $('.location-content.content-2, .location-content.content-3').hide();
  $(".tile-1").append('<span class="action down-1-white" style="top: 10px;"></span>');
  $(".tile-2, .tile-3").append('<span class="action down-1-white" style="opacity: 0;"></span>');

  $( ".tiles" ).delegate( ".location-tile.tile-1", "click", function() {
    $(".location-content.content-1").fadeIn(250).addClass('content-active');
    $(".location-content.content-2, .location-content.content-3").delay(250).fadeOut(250).removeClass('content-active');
    $(".tile-1").addClass('tile-active');
    $(".tile-2, .tile-3").removeClass('tile-active');
    $(".tile-2 .action, .tile-3 .action").animate({ top: '20', opacity: 0 }, 250);
    $(".tile-2 .action, .tile-3 .action").animate({ top: '0' }, 250);
    $(".tile-1 .action").delay(100).animate({ top: '10', opacity: 1 }, 250);
    return false;
  });
  $( ".tiles" ).delegate( ".location-tile.tile-2", "click", function() {
    $(".location-content.content-2").fadeIn(250).addClass('content-active');
    $(".location-content.content-1, .location-content.content-3").delay(250).fadeOut(250).removeClass('content-active');
    $(".tile-2").addClass('tile-active');
    $(".tile-1, .tile-3").removeClass('tile-active');
    $(".tile-1 .action, .tile-3 .action").animate({ top: '20', opacity: 0 }, 250);
    $(".tile-1 .action, .tile-3 .action").animate({ top: '0' }, 250);
    $(".tile-2 .action").delay(100).animate({ top: '10', opacity: 1 }, 250);
    return false;
  });
  $( ".tiles" ).delegate( ".location-tile.tile-3", "click", function() {
    $(".location-content.content-3").fadeIn(250).addClass('content-active');
    $(".location-content.content-1, .location-content.content-2").delay(250).fadeOut(250).removeClass('content-active');
    $(".tile-3").addClass('tile-active');
    $(".tile-1, .tile-2").removeClass('tile-active');
    $(".tile-1 .action, .tile-2 .action").animate({ top: '20', opacity: 0 }, 250);
    $(".tile-1 .action, .tile-2 .action").animate({ top: '0' }, 250);
    $(".tile-3 .action").delay(100).animate({ top: '10', opacity: 1 }, 250);
    return false;
  });



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