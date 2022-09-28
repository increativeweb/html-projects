/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
var $ = jQuery.noConflict();

jQuery(document).ready(function($) {
   $('[data-bs-toggle="tooltip"]').tooltip();

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
   
   $(".custom-html-dropdown .dropdown-menu li .dropdown-item").click(function(){
      $('.custom-html-dropdown .dropdown-menu li .dropdown-item ').removeClass('active');
      $(this).addClass('active');
      $(this).parents(".custom-html-dropdown").find('.dropdown-input').html($(this).text() );
      $(this).parents(".custom-html-dropdown").find('.dropdown-input').val($(this).data('value'));
  });
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
try {
   new WOW().init();
} catch (e) {
   //
};
