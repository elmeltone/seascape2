$(function(){

	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
		
		$('#porpoise1').css({
			'transform' : 'translate(0px, '+ wScroll /2 +'%)'
		});
		$('#porpoise2').css({
			'transform' : 'translate(0px, '+ wScroll /2 +'%)'
		});
		$('#porpoise3').css({
			'transform' : 'translate(0px, '+ wScroll /18 +'%)'
		});
		
	});


});