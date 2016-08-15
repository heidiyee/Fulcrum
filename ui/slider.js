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
                $("#first-level").animate({left: "0"}, "fast");
            } else {
                var toggleLeft = left > "100%" ? "1em" : "100%";
                var toggleLeftFirstLevel = left > "0" ? "-100%" : "2em";
                $("#first-level").animate({ left: toggleLeftFirstLevel }, "fast");
                $(target).animate({ left: toggleLeft }, "fast");
            }
        } else {
            //$("#first-level").animate({left: "0"}, "fast");
            var second = $(".second-level");
            //console.log(second);
            if ($(target).hasClass("active")) {
                $(target).removeClass("active");
                $(".nav-bar").removeClass("border-active");
            } else {
                if (second.hasClass("active")) {
                    console.log("removed");
                    second.removeClass("active");
                }
                $(".nav-bar").addClass("border-active");
                $(target).addClass("active");
            }


        }

    });
};

var navReset = function() {

    $(window).resize(function() {
        var left = $("#first-level").css("left");
        var windowWidth = $(window).width();
        if (windowWidth > "1050") {
            $("#first-level").css("left", "0");
        }

    });

};

$(document).ready(listSlider);
$(document).ready(navReset);
