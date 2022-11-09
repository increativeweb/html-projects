/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
var $ = jQuery.noConflict();

jQuery(document).ready(function($) {
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
   
   $(".collapse-item .collapse-title").click(function () {
      if ($(this).closest(".collapse-item").hasClass("is-open")) {
         $(this).closest(".collapse-item").removeClass("is-open");
         $(this).closest(".collapse-item").find(".collapse-body").slideUp();
         return(false);
      } else {
         $(".collapse-item").removeClass("is-open");
         $(".collapse-item").find(".collapse-body").slideUp();
         $(this).closest(".collapse-item").addClass("is-open");
         $(this).closest(".collapse-item").find(".collapse-body").slideDown();
         return(false);
      }
  });

   //   banner top cookies
   $('.note-close-icon').on('click', function (e) {
      $('.header-note').css('display', 'none');
      e.preventDefault();
   });
  
});


// hero after before jQuery

// let active = false;
// document.querySelector('.scroller').addEventListener('mousedown',function(){
//   active = true;
//   document.querySelector('.scroller').classList.add('scrolling');
// });
// document.body.addEventListener('mouseup',function(){
//   active = false;
//   document.querySelector('.scroller').classList.remove('scrolling');
// });
// document.body.addEventListener('mouseleave',function(){
//   active = false;
//   document.querySelector('.scroller').classList.remove('scrolling');
// });

// document.body.addEventListener('mousemove',function(e){
//   if (!active) return;
//   let x = e.pageX;
//   x -= document.querySelector('.before-after-wrapper').getBoundingClientRect().left;
//   scrollIt(x);
// });

// function scrollIt(x){
//     let transform = Math.max(0,(Math.min(x,document.querySelector('.before-after-wrapper').offsetWidth)));
//     document.querySelector('.after').style.width = transform+"px";
//     document.querySelector('.scroller').style.left = transform-25+"px";
// }

// scrollIt(150);

// document.querySelector('.scroller').addEventListener('touchstart',function(){
//   active = true;
//   document.querySelector('.scroller').classList.add('scrolling');
// });
// document.body.addEventListener('touchend',function(){
//   active = false;
//   document.querySelector('.scroller').classList.remove('scrolling');
// });
// document.body.addEventListener('touchcancel',function(){
//   active = false;
//   document.querySelector('.scroller').classList.remove('scrolling');
// });

