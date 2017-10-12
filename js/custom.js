/*
Template: Saloon - Responsive HTML5 Template
Author:Iqonicthemes 
Design and Developed by: Iqonicthemes
*/

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

})(jQuery); // End of use strict

/*custom  js of the slider page   satrt here */
 $(document).ready(function() {

/*
* Plugin intialization
*/
$('#pagepiling').pagepiling({
    menu: '#menu',
    anchors: ['page1', 'page2', 'page3', 'page4','page5'],
    sectionsColor: ['', '#', '#', '#'],
    navigation: {
        'position': 'right',
        'tooltips': ['Page 1', 'Page 2', 'Page 3', 'Page 4','page 5']
    },
    afterRender: function(){
        $('#pp-nav').addClass('custom');
    },
    afterLoad: function(anchorLink, index){
        if(index>1){
            $('#pp-nav').removeClass('custom');
        }else{
            $('#pp-nav').addClass('custom');
        }
    }
});


/*
* Internal use of the demo website
*/
$('#showExamples').click(function(e){
    e.stopPropagation();
    e.preventDefault();
    $('#examplesList').toggle();
});

$('html').click(function(){
    $('#examplesList').hide();
});
});
    

$(document).ready(function(){
   $("#load").fadeOut();
   $('#loading').delay(0).fadeOut('slow');
});
