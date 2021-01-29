// This is done in JQuery since its really easy to do in JQuery

// Only run code when document is fully loaded
$(document).ready(function() {
    // Initial pos. of navbar
    const initNavbarPosition = $('#navbar').offset().top;
    
    $(window).on("scroll touchmove", function() {
        const navbar = $('#navbar');
        let scroll = $(window).scrollTop();
        console.log(scroll);
        if (scroll >= initNavbarPosition) {
            navbar.removeClass('sticky');
            navbar.addClass('fixed');
        } else {
            navbar.removeClass('fixed');
            navbar.addClass('sticky');
        }
    });
})