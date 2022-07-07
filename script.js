$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        items: 3,
        margin: 20,
        dots: true,
        dotsEach: true,
        autoplay: false,
        autoplayTimeout: 2000,
        nav: true,
        autoWidth: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            768: {
                items: 2,
                nav: true
            },
            1024: {
                items: 3,
                nav: true
            }
        }
    });
});