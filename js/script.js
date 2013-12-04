var mobileTest = jQuery.browser.mobile;
$(window).load(function(){

	if( mobileTest === false){
		skrollr.init();
		var vh = $(window).height()
		$('.vhfallback').each( function(){
		$(this).css ( "height", vh ); });
	
	} else {
	var vh = window.innerHeight;
	$('.vhfallback').each( function(){
	$(this).css ( "height", vh ); });
	}
	var oldEnough = "false";
	localStorage.setItem("oldEnough", oldEnough);
	
	// Get the locally stored variable indicating if "Old Enough"
	var oldEnough = localStorage.getItem("oldEnough");
	
	if ( !oldEnough ) {
		$("#ageCheck").show();
	} else {
		$("#ageCheck").hide();
	}


}); // End $(window).load

// Smooth scroll menu items
$('a.scroll').click(function(){
	$('header').removeClass("menu_open");
	$('html, body').animate({
		scrollTop: $( $.attr(this, 'href') ).offset().top
	}, 500);
	return false;
}); // End scroll click

// Show menu status on scroll
$('.section').each(function() {
	$(this).scrollspy({
		min: $(this).offset().top,
		max: $(this).offset().top + $(this).height() - 2,
		onEnter: function(element) {
			$("a[href='#" + $(element).data('title') + "']").addClass('active');
		},
		onLeave: function(element) {
			$("a[href='#" + $(element).data('title') + "']").removeClass('active');
		}
	});
}); // End scrollspy attachment

// Contact scrollspy tweak
$('.contact').scrollspy({
	min: $('.contact').offset().top - 600,
	max: $('.contact').offset().top + $('.contact').height() - 2,
	onEnter: function(element) {
		$("a[href='#buy']").removeClass('active');
		$("a[href='#" + $(element).data('title') + "']").addClass('active');
	},
	onLeave: function(element) {
		$("a[href='#" + $(element).data('title') + "']").removeClass('active');
		$("a[href='#buy']").addClass('active');
	}
	
}); // End contact scrollspy tweak

// Open MoreLocations Modal
$('a[href="#more"]').click(function() {
	$('#moreLocations').fadeIn().click( function() { $(this).fadeOut() });
});

// ageCheck confirmation button
$('#btnEnter').click(function () {
	localStorage.setItem("oldEnough", true);
	$('#ageCheck').fadeOut();
}); // End enter button click

// Responsive Menu Button
$('#menu_button').click(function() {
	$('header').toggleClass( "menu_open" );
	});

// Responsive Menu: Hide (if open) on resize
$(window).resize( function (){
		$('header').removeClass("menu_open");
});


