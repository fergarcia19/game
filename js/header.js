$(document).ready(function(){
	$(window).scroll(function(){
		if ( $(this).scroll() >0){
			$('header').addclass('header2');
		}else{
			$('header').removeclass('header2');
		}



		});

});