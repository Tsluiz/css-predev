$(document).ready(function () {


    window.onscroll = function () {
        showFixed()
    };

    /*if($(window).width() > 750){
     function showFixed() {
       if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
         document.getElementById("fixedHeader").style.display = "block";
         }
       else{
         document.getElementById("fixedHeader").style.display = "none";
       }
     }
     }*/


    $('.buttonStrategieSessie').click(function () {
        $('#sessiePlanForm').show('fast');
        $('#fixedHeader').hide();
        $('body').addClass('no-scroll');
    });

    $('.closeModal').click(function () {
        $('#sessiePlanForm').hide('fast');
        $('#sessiePlanFormbBedankt').hide('fast');
        $('body').removeClass('no-scroll');
    });


    var url = window.location.href;
    var path = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/') + 1);
    $('a[href="' + filename + '"]').addClass('active');


    if (window.location.href.indexOf("isverstuurd") > -1) {
        $('#sessiePlanFormbBedankt').show('fast');

    }

    
    var lang = navigator.language || navigator.userLanguage;

    if(lang == 'nl-NL'){
	    //console.log(url + ' ' + path);
    }else{
	    if(path.indexOf("/en/") == -1){
		    window.location.href = 'https://www.optimizers.co/en/';
	    }
    }
})


// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// Place any jQuery/helper plugins in here.

