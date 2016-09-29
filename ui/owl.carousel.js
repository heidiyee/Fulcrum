$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:false,
        dots: true,
        nav: false,
        mergefit: false,
        items: 1,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                dots:true
            },
            600:{
                items:2,
                dots:true
            },
            900:{
                items:3,
                dots: false
            }
        }
    });
});
