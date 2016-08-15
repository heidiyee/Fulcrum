var stickyNav = function() {
    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
        var height = $(window).height();
        //console.log(scrollTop);
        //console.log(height);
        if (scrollTop > 0) {
            //console.log("should be sticky");
            $('.nav-bar').addClass('sticky');
        } else {
            $('.nav-bar').removeClass('sticky');
        }
    });
};

$(document).ready(stickyNav);
