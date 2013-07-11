// This handy function adds a CSS class called 'fixed' to your nav element once the height 
// of your header less the outerHeight of your nav is less than the amount you have scrolled 
// your browser.  You can assign a CSS class of fixed to have a position: fixed, and now your 
// nav will remain fixed after you scroll down past it.  Depending on where your nav is in 
// the header, you may have to change the height or outerHeight that headerTop is based on.
// Enjoy!

$(document).ready(function() {
	var headerTop = parseInt($('header').css('height')) - $('nav').outerHeight();

	$(window).scroll(function(){
		var scrolled = $(window).scrollTop();
		
		$('nav').css('background-position','0 '+(-(scrolled))+'px');
		
		if (scrolled > headerTop) {
			$('nav').addClass('fixed');
		}
		
		else {
			$('nav').removeClass('fixed');
		}
	});
});