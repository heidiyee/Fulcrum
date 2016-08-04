var sideNav = function() {

	$("#nav-icon").click(function() {
        $(this).toggleClass("open");
        $("#nav-links").toggleClass("popup");
	});
};

$(document).ready(sideNav);
