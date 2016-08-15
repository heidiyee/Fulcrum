var sideNav = function() {

	$("#nav-icon").click(function() {
        $(this).toggleClass("open");
        $("#nav-links").toggleClass("popup");

		if ($(this).hasClass("open")) {
			$('.nav-bar').addClass('black');
			$('.logo-image').attr('src','assets/fulcrumlogo-inverted.svg');
		} else {
			$('.nav-bar').removeClass('black');
			$('.logo-image').attr('src','assets/fulcrumlogo.svg');
		}
		//Need to change nav bar position

	});
};

$(document).ready(sideNav);
