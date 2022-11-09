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

    $(".counter").each(function () {
        var $this = $(this),
            countTo = $this.attr("data-countto");
            countDuration = parseInt($this.attr("data-duration"));
        $({ counter: $this.find('span').text() }).animate({
            counter: countTo
        },
        {
            duration: countDuration,
            easing: "linear",
            step: function () {
              $this.find('span').text(Math.floor(this.counter));
            },
            complete: function () {
              $this.find('span').text(this.counter);
            }
        });
    });

    $(".custom-html-dropdown .dropdown-menu li button").click(function(){
        $('.custom-html-dropdown .dropdown-menu li button').removeClass('active');
        $(this).addClass('active');
        $(this).parents(".custom-html-dropdown").find('.form-control').html($(this).text() );
        $(this).parents(".custom-html-dropdown").find('.form-control').val($(this).data('value'));
    });
});


/* Send Mail Function - Start */
function sendMailContact() {
    var valid;	
    valid = validateMailContact();
    if(valid) {
        jQuery.ajax({
            url: "mail.php",
            data: $('#mailForm').serialize(),
            type: "POST",
            dataType: 'json',
            complete:function(){
                jQuery('#send-btn').val('Send');
            },
            success:function(data) {
                if(data.error){
                    $(".g-recaptcha").after("<span class='error _recaptcha-error'>"+ data.error +"</span>");
                }
                if(data.status == 'success'){
                    $('.w-form-done').slideDown();
                    setTimeout(function(){
                    $('.w-form-done').slideUp();
                    $('#mailForm').trigger("reset");
                    }, 5000);
                } else if(data.status == 'error') {
                    setTimeout(function(){
                    $('.w-form-fail').slideDown();
                    }, 5000);
                }
            },
        });
    }
}
function validateMailContact() {
    var valid = true;	
    $("span.error").remove();
    if(!$("#name").val()) {
        $("#name").after("<span class='error'>Please enter name</span>");
        valid = false;
    }
    if(!$("#phone").val()) {
        $("#phone").after("<span class='error'>Please enter Phone Number</span>");
        valid = false;
    }
    if(!$("#googleid").val()) {
        $("#googleid").after("<span class='error'>Please enter email address</span>");
        valid = false;
    }
    if(!$("#msg").val()) {
        $("#msg").after("<span class='error'>Please enter message</span>");
        valid = false;
    }
    if(!$("#email").val()) {
        $("#email").after("<span class='error'>Please enter email address</span>");
        valid = false;
    }
    if(!$("#email").val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
        $("#email").after("<span class='error'>Please enter valid email address</span>");
        valid = false;
    }
    return valid;
}
/*** Send Mail Function - End */

/* WOW Animation - Init */
try{
    new WOW().init();
}
catch(e){
    //
};
/* End */