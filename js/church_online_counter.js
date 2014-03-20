jQuery(function() {
  var days, goLive, hours, intervalId, minutes, seconds;
  goLive = function() {
    $('.nav-watch .live').removeClass('hide');
    $('[data-churchonline-counter]').text("Live Now").addClass("live");
  };
  days = void 0;
  hours = void 0;
  minutes = void 0;
  seconds = void 0;
  intervalId = void 0;
  return $.ajax({
    url: "http://live.lifechurch.tv/api/v1/events/current",
    dataType: "json",
    success: function(data) {
      var date, dateString, seconds_till;
      if (data.response.item.isLive) {
        return goLive();
      } else {
        date = data.response.item.eventStartTime.match(/^(\d{4})-0?(\d+)-0?(\d+)[T ]0?(\d+):0?(\d+):0?(\d+)Z$/);
        dateString = date[2] + "/" + date[3] + "/" + date[1] + " " + date[4] + ":" + date[5] + ":" + date[6] + " +0000";
        seconds_till = ((new Date(dateString)) - (new Date())) / 1000;
        days = Math.floor(seconds_till / 86400);
        hours = Math.floor((seconds_till % 86400) / 3600);
        minutes = Math.floor((seconds_till % 3600) / 60);
        seconds = Math.floor(seconds_till % 60);
        return intervalId = setInterval(function() {
          if (--seconds < 0) {
            seconds = 59;
            if (--minutes < 0) {
              minutes = 59;
              if (--hours < 0) {
                hours = 23;
                if (--days < 0) {
                  days = 0;
                }
              }
            }
          }
          $('[data-churchonline-counter]').text("in " + (hours == "0" ? "" : (hours + "hours ")) + (minutes == "0" ? "" : (minutes + "mins ")) + (seconds + "secs"))
          if (seconds === 0 && minutes === 0 && hours === 0 && days === 0) {
            goLive();
            return clearInterval(intervalId);
          }
        }, 1000);
      }
    },
    error: function(xhr, ajaxOptions, thrownError) {
      return console.log(thrownError);
    }
  });
});
