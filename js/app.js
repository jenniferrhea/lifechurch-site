// Foundation JavaScript
$(document).foundation();

// And the rest
$(function() {

  // "More" panel open/close

  if ($('html.js').length > 0) {

    $('.nav-more').attr('href','#');

    // Open the more panel
    $( ".primary-links" ).delegate( ".nav-more", "click", function() {
      $(".page-more").fadeIn();
      $("html").addClass("html-more");
      $(".page-more-inner").animate({
        top: '90px'
      }, 400, function() {
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
      $("html").removeClass("html-more");
      $(".page-more-inner").animate({ top: '0' }, 400, function() {});

      $(this).removeClass("nav-close-more").addClass("nav-more");

      if ($('.header-light-paused').length > 0) {
        $('body').removeClass('header-light-paused').addClass('header-light');
      };
    });
  }


  // Add classes on <body> for Series

  if ($('.series-locator').length > 0) {
    $('body').addClass($('.series-locator').text());
    $('.series-locator').remove();
  };


  // Series Page Mobile
  if ($('.section-series').length > 0) {
    if ($(window).width() < 960) {
      $('.tertiary-nav .current').text('Series');
    }
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
  };


  // Parallax scrolling
  if ( $("html").hasClass("no-touch")) {
    $(window).stellar( {
      horizontalScrolling: false,
      verticalScrolling: true,
    });
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


  // Locations Page Tiles

  $('.location-content.content-2, .location-content.content-3').hide();

  $( ".tiles" ).delegate( ".location-tile.tile-1", "click", function() {
    if (!$('.tile-1').hasClass('tile-active')) {
      if ($(window).width() > 960) {
        // Animate the pin & address in
        $(".content-1 .pin").animate({ opacity: 0, top: '-=30' }, 0);
        $(".content-1 .address").animate({ opacity: 0, left: '-=10' }, 0);
        $(".content-1 .pin").delay(150).animate({ opacity: 1, top: '+=30' }, 250);
        $(".content-1 .address").delay(400).animate({ opacity: 1, left: '+=10' }, 200);
      } else {
        $(".content-1 .address").animate({ opacity: 1 }, 0);
      }

      // Fade the correct content in, and the rest out
      $(".location-content.content-1").fadeIn(250).addClass('content-active');
      $(".location-content.content-2, .location-content.content-3").delay(250).fadeOut(250).removeClass('content-active');
      $(".tile-1").addClass('tile-active');
      $(".tile-2, .tile-3").removeClass('tile-active');
    }
    return false;
  });
  $( ".tiles" ).delegate( ".location-tile.tile-2", "click", function() {
    if (!$('.tile-2').hasClass('tile-active')) {
      // Animate the calendar entries in

      // Fade the correct content in, and the rest out
      $(".location-content.content-2").fadeIn(250).addClass('content-active');
      $(".location-content.content-1, .location-content.content-3").delay(250).fadeOut(250).removeClass('content-active');
      $(".tile-2").addClass('tile-active');
      $(".tile-1, .tile-3").removeClass('tile-active');
    }
    return false;
  });
  $( ".tiles" ).delegate( ".location-tile.tile-3", "click", function() {
    if (!$('.tile-3').hasClass('tile-active')) {
      $(".location-content.content-3").fadeIn(250).addClass('content-active');
      $(".location-content.content-1, .location-content.content-2").delay(250).fadeOut(250).removeClass('content-active');
      $(".tile-3").addClass('tile-active');
      $(".tile-1, .tile-2").removeClass('tile-active');
    }
    return false;
  });

  // Campus calendar 5pm overlaps
  $('.time-17-00').siblings('.time-17-30').addClass('overlap').parent().parent().addClass('rows-2');
  $('.time-17-00.duration-120').siblings('.time-17-30, .time-18-00, .time-18-30').addClass('overlap').parent().parent().addClass('rows-2');

  // Campus calendar 6pm overlaps
  $('.time-18-00').siblings('.time-18-30').addClass('overlap').parent().parent().addClass('rows-2');
  $('.time-18-00.duration-120').siblings('.time-18-30, .time-19-00, .time-19-30').addClass('overlap').parent().parent().addClass('rows-2');

  // Campus calendar 7pm overlaps
  $('.time-19-00').siblings('.time-19-30').addClass('overlap').parent().parent().addClass('rows-2');
  $('.time-19-00.duration-120').siblings('.time-19-30, .time-21-00, .time-21-30').addClass('overlap').parent().parent().addClass('rows-2');

  // Campus calendar 8pm overlaps
  $('.time-20-00').siblings('.time-20-30').addClass('overlap').parent().parent().addClass('rows-2');
  $('.time-20-00.duration-120').siblings('.time-20-30, .time-21-00, .time-21-30').addClass('overlap').parent().parent().addClass('rows-2');

  // Campus calendar Overlapping overlaps (oh my!)
  $('.overlap:eq(1)').removeClass('overlap').addClass('overlap-2').parent().parent().removeClass('rows-2').addClass('rows-3');


  // LifeMissions Page
  if ($('.involved-list').length > 0) {

    // Hide forms by default
    $('.involved-list form').hide();

    // Make the form appear if "Get Involved" gets clicked
    $( ".involved-list" ).delegate( ".get-involved", "click", function() {
      $(this).parent().parent().addClass('open');
      $(this).parent().siblings('form').fadeIn();
      $(this).parent().fadeOut();
      $(this).fadeOut();
      return false;
    });
  };


  // Get Involved form
  $('.involved-item .button').click(function() {
    $(this).parent().fadeOut();
    $(this).parent().parent().append("<div class='cta-thanks' style='display: none;'><hr /><em>Thanks! We'll be in touch soon.</em></div>").fadeIn();
    $(this).parent().parent('.cta').removeClass('open').addClass('sent');
    $(this).parent().parent().find('.cta-thanks').fadeIn();
  });


});
