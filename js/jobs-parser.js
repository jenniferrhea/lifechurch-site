var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

// Listen to message from child window
eventer(messageEvent,function(e) {
  if (e.origin == "http://newton.newtonsoftware.com")
  {
    $("iframe").height(e.data + 50);
  }
//run function//
},false);