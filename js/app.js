// Foundation JavaScript
$(document).foundation();

// And the rest
$(function() {

  // "More" panel open/close

  if ($(window).width() > 640) {

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

    }


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

  if ($('.alert-box').length > 0) {
    $('body').addClass('has-alerts');
  };

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


  // Locations Page Content

  $('.time.type-lifekids').addClass('overlap').parent().parent().addClass('rows-2');

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
  //$('.overlap:eq(1)').removeClass('overlap').addClass('overlap-2').parent().parent().removeClass('rows-2').addClass('rows-3');


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


  // Contact form Response
  $('.form-contact .button').click(function() {
    $(this).parent().fadeOut();
    $(this).parent().parent().append("<div class='cta-thanks' style='display: none;'><em>Thanks! We'll be in touch soon.</em></div>").delay(500).fadeIn();
    $(this).parent().parent().find('.cta-thanks').fadeIn();
  });


  // Live color changing
  setInterval(function() {
    $('.primary-links a .live').toggleClass('alt');
  }, 1000);


  // Video players
  $('[data-video-player]').bind('click', video_player_start)

  function video_player_start(event) {
    var videoId = $(this).data('video-player');
    var videoWrapper = $("#video-"+videoId);
    var videoPlayer = videoWrapper.find('iframe')[0].wistiaApi;
    $('body').addClass('noscroll');
    videoWrapper.show();
    videoPlayer.play();
  }

  function video_player_close(event) {
    $('body').removeClass('noscroll');
    $('.video-player').hide();
  }

  // Close video players
  $(document).keyup(function(e) {
    if (e.keyCode == 27) { video_player_close(); }   // esc
  });

  $('.video-player .close').bind("click", function() {
    video_player_close();
  });

  // Auto play a video based on a hashlink on page load
  $(window).load(function() {
    if(window.location.hash != "") {
      // We have a hash people!
      var number = parseInt(window.location.hash.substring(1));

      // If this isn't a number, get out of here
      if(isNaN(number)) {
        return;
      }

      $("[data-video-player]:eq(" + number + ")").click();

    }
  });

  //local storage for locations
  $('[data-set-campus]').bind("click", function() {
    if (Modernizr.localstorage) {
      localStorage["myCampus"] = $(this).data("set-campus");
      $(this).parent().addClass('my-campus');
    }
  });

  $('[data-unset-campus]').bind("click", function() {
    if (Modernizr.localstorage) {
      localStorage.removeItem("myCampus");
      $(this).parent().removeClass('my-campus');
    }
  });

  //replaces links that should go straight to the campus pages
  $('[data-my-campus]').each(function(index) {
    if (Modernizr.localstorage && localStorage["myCampus"]) {
      $(this).attr('href',"/locations/" + localStorage["myCampus"] + $(this).data("my-campus"));
    }
  });

  //show the "not your campus?"" button if this campus is present in localstorage
  $('[data-set-campus]').each(function(index) {
    if (Modernizr.localstorage && (localStorage["myCampus"] == $(this).data("set-campus"))) {
      $(this).parent().addClass('my-campus');
    }
  });

  // Keep Involved form users on the site
  $('.form-involved').submit(function(event) {
    event.preventDefault();
    recipient = $(this).find('input[name="recipient"]').val();
    subject = $(this).find('input[name="subject"]').val();
    detail = $(this).find('input[name="detail"]').val();
    $.post($(this).attr('action'), {
      recipient: recipient,
      subject: subject,
      detail: detail
    });
  });

  // Keep Contact form users on the site
  $('.form-contact').submit(function(event) {
    event.preventDefault();

    if ($('select[name="subject"]').length > 0) {
      subject = $(this).find('select[name="subject"]').val();
    }

    if ($('input[name="subject"]').length > 0) {
      subject = $(this).find('input[name="subject"]').val();
    }

    recipient = $(this).find('input[name="recipient"]').val();
    detail = $(this).find('input[name="detail"]').val();
    message = $(this).find('textarea[name="message"]').val();

    $.post($(this).attr('action'), {
      recipient: recipient,
      subject: subject,
      detail: detail,
      message: message
    });
  });

  
  if ($(window).width() < 960) {
    $('.watch-resources.button').appendTo('.watch-messages').addClass('expand inverse white').wrap('<div class="row"><div class="small-12 columns"></div></div>');
  }

});
