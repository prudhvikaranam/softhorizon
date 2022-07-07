let getIcon = document.getElementById('navHamburger');
let outSideNavBar = document.getElementById('mobileNavigation');
let closeIcon = document.getElementById('closeNav');
getIcon.addEventListener('click', openNavContainer);
closeIcon.addEventListener('click', closeNavContainer);
window.addEventListener('click', outsideClick);


function openNavContainer() {
    outSideNavBar.style.display = "flex";
}

function closeNavContainer() {
    outSideNavBar.style.display = "none";
}

function outsideClick(e) {
    if (e.target == outSideNavBar) {
        outSideNavBar.style.display = "none";
    }
}


$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        items: 3,
        margin: 20,
        dots: true,
        dotsEach: true,
        autoplay: false,
        autoplayTimeout: 2000,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
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