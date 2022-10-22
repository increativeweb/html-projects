/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
var $ = jQuery.noConflict();

jQuery(document).ready(function($) {
   $('[data-bs-toggle="tooltip"]').tooltip();

   // mobile menu
   $('.toggle-sidebar,.bg-overly').on('click', function (e) {
      $('.bg-overly,.toggle-sidebar,body,.main-header').toggleClass('is-visible');
      e.preventDefault();
   });

   if ($('.main-header').length) {
      if (jQuery(this).scrollTop() > 100) {
         $(".main-header").addClass("fixed-header");
      } else {
         $(".main-header").removeClass("fixed-header");
      }
      $(window).scroll(function () {
         if (jQuery(this).scrollTop() > 100) {
            $(".main-header").addClass("fixed-header");
         } else {
            $(".main-header").removeClass("fixed-header");
         }
      });
   }
   icw_cf7_labels();

   $('.menu-item-has-children .arrow').on('click',function(event){
      event.preventDefault();
      $(this).toggleClass('is-active');
      $(this).parent().find('.sub-menu').first().toggle(300);
      $(this).parent().siblings().find('.sub-menu').hide(200);
   });

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
});

$(window).resize(function(e) {
   if ($(window).width() <= 991.99) {
      
   }
   else {
      $('.menu-item-has-children .arrow').removeClass('is-active');
      $('.menu-item-has-children .sub-menu').css('display', '');
      $('.bg-overly,.toggle-sidebar,body,.main-header').removeClass('is-visible');
   }
});

function icw_cf7_labels() {
   var input = $('.form-control');
   if (input.length) {

      $(".form-control").each(function(){
         var input_value = $(this).val();
         if(input_value!='') {
             $(this).parents(".form-group").addClass("focused");
         }
       });

      input.focus(function () {
         // console.log("__focus");
         $(this).parents('.form-group').addClass('focused').removeClass('has-data');
      });
      input.focusout(function () {
         // console.log("__focusout");
         $(this).parents('.form-group').removeClass('focused');
         if (this.value == "") {
            $(this).parents('.form-group').removeClass('focused');
            $(this).parents('.form-group').removeClass('has-data');
         } else {
            $(this).parents('.form-group').removeClass('focused').addClass('has-data');
         }
      });
   }
}

/* WOW Animation - Init */
try{
   new WOW().init();
}
catch(e){
   //
};