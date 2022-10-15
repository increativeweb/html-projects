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
   $('.menu-item-has-children .arrow').on('click',function(event){
      event.preventDefault();
      $(this).toggleClass('is-active');
      $(this).parent().find('.sub-menu').first().toggle(300);
      $(this).parent().siblings().find('.sub-menu').hide(200);
      //Hide menu when clicked outside
      $(this).parent().find('.sub-menu').parent().mouseleave(function(){ 
         var thisUI = $(this);
         $('html').click(function(){
            thisUI.children(".sub-menu").hide();
            thisUI.children(".arrow").removeClass('is-active');
            $('html').unbind('click');
         });
      });
   });
   
   $(".collapse-item .collapse-title").click(function () {
      if ($(this).closest(".collapse-item").hasClass("is-open")) {
         $(this).closest(".collapse-item").removeClass("is-open");
         $(this).closest(".collapse-item").find(".collapse-body").slideUp();
      } else {
         $(".collapse-item").removeClass("is-open");
         $(".collapse-item").find(".collapse-body").slideUp();
         $(this).closest(".collapse-item").addClass("is-open");
         $(this).closest(".collapse-item").find(".collapse-body").slideDown();
      }
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
