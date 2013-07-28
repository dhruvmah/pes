$(document).ready(function() {
	
	$('#mission h2').fadeIn(1000);
 	$('#mission p').fadeIn(1000);
 	$('#navbar').fadeIn(1000);
	
	//Navbar stuff
 	$('#navbar a').on('click', function(e) {
 		$('#navbar').find('.clicked').toggleClass('clicked');
 		$(this).toggleClass("clicked");
 		e.stopPropagation();
 		});
 
	var nav_container = $(".nav-container");
	var nav = $("nav");
	nav_container.waypoint({
		handler: function(event, direction) {
			nav_container.toggleClass('sticky', direction=="down");
			if (direction == 'down')
				nav_container.css({ 'height':nav.outerHeight() });
			else
				nav_container.css({ 'height': 'auto'});
			}
		});
		

	var sections = $('section');
	var navigation_links = $('nav a');
	sections.waypoint({
		handler: function(event, direction) {
			var active_section;
			active_section = $(this);
			if (direction === "up") active_section = active_section.prev();
			var active_link = $('nav a[href="#' + active_section.attr("id") + '"]');
			navigation_links.removeClass('clicked');
			active_link.addClass('clicked');		
		},
		offset: '20%'
		});


	//Smooth Scrolling
	$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top -58
    }, 500);
    return false;});

	
// 	
// 
// .on('mouseover', function() {
//  		$(this).addClass("clicked");
//  		}).on('mouseleave', function() {
//  		$(this).removeClass("clicked");
//  		}).



// 		var audio = $("#audio")[0];
//   		var audio2 = $("#audio2")[0];
// 
// 		$("#audio-pic").mouseenter(function() {
//   		audio.play();
//   		audio.attr("muted") = false;
//   		}).mouseleave(function(){
//   		audio.attr("muted") = true;
//   		});
//   		
//   		$("#audio-pic2").mouseenter(function() {
//   		audio2.currentTime = audio.currentTime;
//   		audio2.play();
//   		}).mouseleave(function(){
//   		audio2.pause();
//   		});
//   		
});