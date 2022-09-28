/*** Main Header */
if ($('.main-header').length) {
    $(".toggle-menu").click(function(t) {
        $(".main-header .navbar-collapse").toggleClass("open");
        $('body').toggleClass('overflow-hidden');
        $(this).toggleClass('toggle');
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
    /*** Client Say Slider */
    $('.client-say-slider').on('init', function(e, slick) {
        var $firstAnimatingElements = $('div:first-child').find('[data-animation]');
        doAnimations($firstAnimatingElements);    
    });
    $('.client-say-slider').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
        var $animatingElements = $('div[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
        doAnimations($animatingElements);    
    });
    if ($('.client-say-slider').length) {
        $('.client-say-slider').slick({
            autoplay: true,
            autoplaySpeed: 10000,
            arrows: true,
            slidesToShow: 1,
            infinite: true
        });
    }
    function doAnimations(elements) {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function() {
            var $this = $(this);
            var $animationDelay = $this.data('delay');
            var $animationType = 'animated ' + $this.data('animation');
            $this.css({
                'animation-delay': $animationDelay,
                '-webkit-animation-delay': $animationDelay
            });
            $this.addClass($animationType).one(animationEndEvents, function() {
                $this.removeClass($animationType);
            });
        });
    }
    /* End */
});

/* WOW Animation - Init */
try{
    new WOW().init();
}
catch(e){
    //
};
/* End */