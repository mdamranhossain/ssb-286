//MAXITUP//
var mixer = mixitup('.work-grid');

// Hamburger Menu //
function openMenu() {
    document.getElementById('hb-menu').style.width = "100%";
}
function closeMenu() {
    document.getElementById('hb-menu').style.width = "0%";
}

// Smooth scroll //

$('.hb-menu-item li a, .floating a').on('click', function(){
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
    return false
});

// Wow //

new WOW().init();
