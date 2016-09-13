//opens up side nav when nav icon is visible
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
	});
};

//sticks to nav to the top when user starts to scroll from the top
var stickyNav = function() {
    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
        var height = $(window).height();
        if (scrollTop > 0) {
            $('.nav-bar').addClass('sticky');
        } else {
            $('.nav-bar').removeClass('sticky');
        }
    });
};

//second level menu, this could have been done with a plug-in, but I wanted to try to build something myself. More tedious and messy than I was hoping for, but taught me some good lessons about jquery
var listSlider = function () {
    var mediaQuery = window.matchMedia( "(max-width: 1050px)" );

    $('a[href*="#"]:not([href="#"])').on('click', function (event){
        var target = $(this).attr('href');
        if (mediaQuery.matches) {
            var left = $(target).css("left");
            //var leftFirstLevel = $("#first-level").css("left");
            var match = target.indexOf("back") !== -1;

            if (match) {
                $(this).parent().parent().animate({ left: "100%"}, "fast");
                $(this).parent().parent().removeClass("active");
                $("#first-level").animate({left: "0"}, "fast");
            } else {
                var toggleLeft = left > "100%" ? "1em" : "100%";
                var toggleLeftFirstLevel = left > "0" ? "-100%" : "2em";
                $("#first-level").animate({ left: toggleLeftFirstLevel }, "fast");
                $(target).animate({ left: toggleLeft }, "fast");
                $(target).addClass("active");
            }
        } else {
            var second = $(".second-level");
            if ($(target).hasClass("active")) {
                $(target).removeClass("active");
                $(".nav-bar").removeClass("border-active");
            } else {
                if (second.hasClass("active")) {
                    second.removeClass("active");
                }
                $(".nav-bar").addClass("border-active");
                $(target).addClass("active");
            }


        }

    });
};


//this is a bit messy and needs to be fixed, however, works for now when window is resized to reset css.
var navReset = function() {
    $(window).resize(function() {
        var windowWidth = $(window).width();
        if (windowWidth > "1050") {
            console.log("I hate IE");
            $("#first-level").css("left", "0");
            $(".second-level").css("left", "0");
            if($("#nav-icon").hasClass("open")) {
                $("#nav-icon").removeClass("open");
                $("#nav-links").removeClass("popup");
                $('.nav-bar').removeClass('black');
    			$('.logo-image').attr('src','assets/fulcrumlogo.svg');
            }
            if($(".second-level").hasClass("active")) {
                $(".nav-bar").addClass("border-active");
            }
        } else {
            $(".second-level").css("left", "100%");
            $("#first-level").css("left", "0");

            if ($(".second-level").hasClass("active")) {
                $("#first-level").css("left", "-100%");
                $(".active").css("left", "1em");
            }
        }
    });
};




$(document).ready(sideNav);
$(document).ready(stickyNav);
$(document).ready(listSlider);
$(document).ready(navReset);
