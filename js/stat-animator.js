statInterval = 3000;

jQuery(function() {
  $('[data-stat-count]').each(function() {
    setInterval(nextStat, statInterval);
  });
});

function nextStat() {
  stat_wrapper = $('[data-stat-count]:eq(0)');
  current_stat = stat_wrapper.find('.stat:eq(0)');
  next_stat = stat_wrapper.find('.stat:eq(1)');

  current_stat.appendTo(stat_wrapper);

  animateStat(next_stat);
}

function animateStat(stat) {
  var animationSpeed = ((statInterval - 1000)/400);
  var number = stat.data("number");
  var money = (number.toString().indexOf("$") >= 0);
  var number = number.toString().replace(/[\$,]/g,"");

  //reset the html to 0
  stat.find('.number').html("0");

  loop_count = 0;
  var intervalId = 0;
  intervalId = setInterval(function() {
    loop_count++;
    if (number % 1 !== 0) {
      value = parseFloat(parseFloat(number * (loop_count / 100)).toFixed(2));
    } else {
      value = parseInt(number * (loop_count / 100));
    }
    value = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if (money) {
      value = "$" + value;
    }

    stat.find(".number").html(value);

    if (loop_count >= 100) {
      return window.clearInterval(intervalId);
    }
  }, animationSpeed);
}