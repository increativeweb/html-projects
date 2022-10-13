/*** Main Header */
if ($('.main-header').length) {
    $(".hamburger").click(function() {
        $(".main-header .navbar-collapse").toggleClass("active");
        $('body').toggleClass('overflow-hidden');
        $(this).toggleClass('active');
    });

    $(window).scroll(function () {
        if (jQuery(this).scrollTop() > 10) {
            $(".main-header").addClass("fixed-header");
        } else {
            $(".main-header").removeClass("fixed-header");
        }
    });
}
/* End */

/*** Tooltip */
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
/* End */

$(document).ready(function() {  
    
});

/* WOW Animation - Init */
try{
    new WOW().init();
}
catch(e){
    //
};
/* End */