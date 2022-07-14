let getIcon = document.getElementById('navHamburger');
let outSideNavBar = document.getElementById('mobileNavigation');
let closeIcon = document.getElementById('closeNav');
getIcon.addEventListener('click', openNavContainer);
closeIcon.addEventListener('click', closeNavContainer);
// window.addEventListener('click', outsideClick);


function openNavContainer() {
    outSideNavBar.style.display = "flex";
    console.log(document.getElementsByTagName('body'));
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
}

function closeNavContainer() {
    outSideNavBar.style.display = "none";
    document.getElementsByTagName('body')[0].style.overflow = 'auto';
}

// function outsideClick(e) {
//     if (e.target == outSideNavBar) {
//         outSideNavBar.style.display = "none";
//     }
// }


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



function navigate(e) {
    e.preventDefault();
    let selectedNav = e.target.innerText.toLowerCase();
    if (selectedNav.includes('home')) {
        document.getElementById('home').scrollIntoView();
    } else if (selectedNav.includes('services')) {
        document.getElementById('servicess').scrollIntoView();
    } else if (selectedNav.includes('about')) {
        document.getElementById('about').scrollIntoView();
    } else if (selectedNav.includes('review')) {
        document.getElementById('reviews').scrollIntoView();
    } else if (selectedNav.includes('contact')) {
        document.getElementById('contact').scrollIntoView();
    }
    outSideNavBar.style.display = "none";
    document.getElementsByTagName('body')[0].style.overflow = 'auto';
}

// for checking the current div

// document.addEventListener('scroll', (e) => {

//     let current = ''
//     let doc = document.querySelectorAll('section');

//     doc.forEach((d) => {
//         const secTop = d.offsetTop;
//         const sectionHeight = d.clientHeight;
//         if (scrollY > secTop) {
//             current = d.getAttribute('id');
//         }
//         // isInViewport(d)
//     })
// })


// function isInViewport(el) {
//     // const rect = el.getBoundingClientRect();
//     // console.log(rect);
//     // return (
//     //     rect.top >= 0 || rect.bottom >= 0
//     // );
// }