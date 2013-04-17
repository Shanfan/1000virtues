/*!
 * Contained Sticky Scroll v1.1
 * http://blog.echoenduring.com/2010/11/15/freebie-contained-sticky-scroll-jquery-plugin/
 *
 * Copyright 2010, Matt Ward
 * Modified by Shanfan Huang for 1,000Virtues.com
*/
(function( $ ){

  $.fn.containedStickyScroll = function( options ) {
  
	var defaults = {  
		unstick : true,
		easing: 'linear',
		duration: 500,
		queue: false
	}  
                  
	var options =  $.extend(defaults, options);
    var $getObject = $(this).selector;
 
  	jQuery(window).scroll(function() {
        if(jQuery(window).scrollTop() > (jQuery($getObject).parent().offset().top) &&
           (jQuery($getObject).parent().height() + jQuery($getObject).parent().position().top - 30) > (jQuery(window).scrollTop() + jQuery($getObject).height())){
        	jQuery($getObject).animate({ top: (jQuery(window).scrollTop() - jQuery($getObject).parent().offset().top) + "px" }, 
            { queue: options.queue, easing: options.easing, duration: options.duration });
        }
        else if(jQuery(window).scrollTop() < (jQuery($getObject).parent().offset().top)){
        	jQuery($getObject).animate({ top: "0px" },
            { queue: options.queue, easing: options.easing, duration: options.duration });
        }
	});

  };
})( jQuery );
