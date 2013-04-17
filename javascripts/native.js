//Main Nav Interaction
$.fn.doilyPosition = function(){
	var $navItems = $(this).find('.nav-bar li');
	var $doily = $(this).find('.doily');
	var originLeft, targetLeft;

		
	if($navItems.hasClass('active')) {//set doily position to the active item
			originLeft = $('.active').position().left +330;
			$doily.css('left', originLeft);		
	}else{
		originLeft=$doily.position().left;
	}

	$navItems.each(function(){
		
		$(this).hover(//define hover animation
			function (){ //mouse roll in the nav item, doily moves over
				targetLeft = $(this).position().left +330;
				$doily.animate({'left':targetLeft}, 200);		
			},
			function(){ //mouse roll out, doily returns
				$doily.animate({'left':originLeft}, 200);
				
		});
	});
	


};

//Run Slide
$.fn.runSlide = function(){
	var $dots = $(this).find('.dots');
	
	//set autoplay on page start
	var intervalId = setInterval(function() {
		var currentDot = $('.selected');
		var currentPromo = $('.selected-promo');
		var n = $dots.length.toString();
							
		if (currentDot.attr('id')== n ) {
			currentDot.removeClass('selected');
			currentPromo.removeClass('selected-promo');
			$('#1').addClass('selected');
			$('#promo1').addClass('selected-promo');
				
		}else {
			currentPromo.removeClass('selected-promo')
				    .next().addClass('selected-promo');
			currentDot.removeClass('selected')
			            .next().addClass('selected');
		};
		
		
	
	}, 3500);

	
	//Slide Show Navigation
	$dots.click(function() {
		window.clearInterval(intervalId);
		$(this).addClass('selected')
		       .siblings().removeClass('selected');
		
		var selectedPromo = "#promo" + $(this).attr('id');
		$(selectedPromo).addClass('selected-promo')
						.siblings().removeClass('selected-promo');
	}); 
};

//Sun Rise
$.fn.sunRise = function(h, speed) {  //input the "height" in px, define how much height the "sun" should rise.
	var $sun = $(this).find(".sun");
	var $origin = $sun.css('margin-top');
	var $height = parseInt($origin)-h;
	var $speed = speed;
	
	
	$(this).hover(function(){ //handler in
		$sun.animate({ "margin-top": $height}, $speed);
	},
	function(){ //handler out
		$sun.animate({"margin-top": $origin}, $speed)
	});
}

//Smooth Anchor Nav
/*
Contributed by Devin Sturgeon: http://www.devinsturgeon.com/
*/
function smooth_anchor_nav() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
			|| location.hostname == this.hostname) {
	
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			   if (target.length) {
				 $('html,body').animate({
					 scrollTop: (target.offset().top-30)
				}, 1000, 'swing');
				return false;
			}
		}
};


//Sticky Sub Nav
function navRelocate(pos) {
	var window_top = pos;
	var div_top = $('#sub-nav-anchor').offset().top;
	if (window_top > div_top) {
		$('.sub-nav-bg').addClass('stick');
	}else {
		$('.sub-nav-bg').removeClass('stick');
	};
}

/*!
 * Stick side info
*/
$.fn.containedStickyScroll = function(pos) {
	var $winTop = pos;
	
	var $topMargin = $(this).parent('.stick-container').offset().top;
	var $bottomMargin = $(this).parent('.stick-container').height() - parseInt($(this).css('height'));
	
	if($winTop <=$topMargin){
		$(this).removeClass('stick stick-end').addClass('stickem');
	}else if($winTop > $topMargin && $winTop < $bottomMargin){
		$(this).addClass('stick').removeClass('stickem stick-end');
	}else{
		$(this).removeClass('stick stickem').addClass('stick-end');
	}

}