var listSlider = function () {
    $('a[href*="#"]:not([href="#"])').on('click', function (event){
        var target = $(this).attr('href');
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

    });
};

$(document).ready(listSlider);
