$(function(){

	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
		
		$('#porpoise1').css({
			'transform' : 'translate(0px, '+ wScroll /4 +'%)',
			'transition' : '.75s ease'
		});
		$('#porpoise2').css({
			'transform' : 'translate(0px, '+ wScroll /2 +'%)',
			'transition' : '.25s ease'
		});
		$('#porpoise3').css({
			'transform' : 'translate(0px, -'+ wScroll /3 +'%)',
			'transition' : '.5s ease'
		});
		
	});


});