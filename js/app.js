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
      $(".page-more-inner").animate({ top: '0' }, 400, function() {});

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


  // Series Page Mobile
  if ($('.section-series').length > 0) {
    if ($(window).width() < 960) {
      $('.tertiary-nav .current').text('Series');
    }
  }
  


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
      // Animate the pin & address in
      $(".content-1 .pin").animate({ opacity: 0, top: '-=30' }, 0);
      $(".content-1 .address").animate({ opacity: 0, left: '-=10' }, 0);
      $(".content-1 .pin").delay(150).animate({ opacity: 1, top: '+=30' }, 250);
      $(".content-1 .address").delay(400).animate({ opacity: 1, left: '+=10' }, 200);
      
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
      $(".content-2 .entry span").animate({ opacity: 0 }, 0);
      $(".content-2 .entry span").delay(150).animate({ opacity: 1 }, 250);

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


  // Adjust Campus calendar formatting for smaller devices
  if ($(window).width() < 700) {
    $(".experience-calendar span").each(function() {
      $(this).text( $(this).text().replace('AM', '') );
      $(this).text( $(this).text().replace('PM', '') );
      $(this).text( $(this).text().replace('NOON', '12') );
      $(this).wrapInner("<span class='inner'></span>");
    });

    $('.section-locations .tile-2').text( $('.section-locations .tile-2').text().replace('Dates /', '') );
    $('.section-locations .tile-3').text( $('.section-locations .tile-3').text().replace(' Us', '') );

  };


  // LifeMissions Page
  if ($('.missions-list, .serving-list').length > 0) {

    // Hide forms by default
    $('.missions-list form').hide();
    $('.serving-list form').hide();

    // Change which cluster list appears on the page
    /*$('.missions-list').hide();
    $('.missions-global').show();
    
    $(".mission-filter select").change(function() {
      if($(this).val() === 'global') {
        $('.missions-list').fadeOut();
        $('.missions-global').delay(500).fadeIn();
        return false;
      }
      if($(this).val() === 'okc') {
        $('.missions-list').fadeOut();
        $('.missions-okc').delay(500).fadeIn();
        return false;
      }
      if($(this).val() === 'tulsa') {
        $('.missions-list').fadeOut();
        $('.missions-tulsa').delay(500).fadeIn();
        return false;
      }
      if($(this).val() === 'stillwater') {
        $('.missions-list').fadeOut();
        $('.missions-stillwater').delay(500).fadeIn();
        return false;
      }
      if($(this).val() === 'dallasfw') {
        $('.missions-list').fadeOut();
        $('.missions-dallasfw').delay(500).fadeIn();
        return false;
      }
      if($(this).val() === 'wellington') {
        $('.missions-list').fadeOut();
        $('.missions-wellington').delay(500).fadeIn();
        return false;
      }
      if($(this).val() === 'albany') {
        $('.missions-list').fadeOut();
        $('.missions-albany').delay(500).fadeIn();
        return false;
      }
    });*/


    // Make the form appear if "Get Involved" gets clicked
    $( ".missions-list, .serving-list" ).delegate( ".get-involved", "click", function() {
      $(this).parent().parent().addClass('open');
      $(this).parent().siblings('form').fadeIn();
      $(this).parent().fadeOut();
      $(this).fadeOut();
      return false;
    });

    // Change the email recipient with the Select box
    /*$(".missions-item form select").change(function() {
      $(this).parent().parent().parent().find('input[name="recipient"]').attr('value', $(this).val());
      if($(this).val() === 'Select Campus') {
        $(this).parent().parent().parent().find('input[name="recipient"]').attr('value', 'someonebrave@lifechurch.tv');
      }
    });*/

  };

});