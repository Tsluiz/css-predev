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
});
