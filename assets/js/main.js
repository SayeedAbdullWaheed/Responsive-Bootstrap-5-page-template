$function(){

	//Cache the window object 
	var $window = $(window);

	//Parallax background effect
	$('section[data-type="background"]').each(function(){

		var $bgobj = $(this);//assigning tha object
		$(window).scroll(function(){

			//scroll the background at var speed
			//the ypos is a negative value because we are scrolling it UP!

			var yPos = -($window.scrolling() / $bgobj.data('speed'));
			//Put together our final background position
			var coords = '50% '+ yPos + 'px';

			//Move the background 
			$bgobj.css({ backgroundPosition: coords});
		});//end window scroll
	});
}