$(document).ready(function(){
	/*aumentar img no hover
	$("#pic").mouseover(function(){
		$(this).css("width", "100%");
	});
	$("#pic").mouseout(function(){
		$(this).css("width", "80%");
	});
	*/
	
	$('a[href*="#"]:not([href="#"])').click(function() {
	  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
	    var target = $(this.hash);
	    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	    if (target.length) {
	      $('html, body').animate({
	        scrollTop: target.offset().top
	      }, 1000);
	      return false;
	    }
	  }
	});
	

	/*
	$('.menuint ul').click(function(){
		var goto = $('#' + $(this).attr('href').replace('#', '')).position().top;
		$('html, body').animate({
			scrollTop:goto - $('.menu').outerHight();
		}, 1000);
		return false;
	})
	*/

});