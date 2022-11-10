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
  
   // counter
   $(".counter").each(function () {
      var $this = $(this),
            countTo = $this.attr("data-count-to");
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

   // testimonialSlider
   if ($('.testimonial-slider').length) {
      var testimonialSlider = new Splide( '.testimonial-slider', {
         arrowPath: 'M27.1444 8.50799C26.462 7.83066 25.3556 7.83067 24.6732 8.50801C23.9908 9.18535 23.9908 10.2835 24.6732 10.9609L32.0327 18.2654H3.74743C2.78235 18.2654 2 19.0419 2 19.9998C2 20.9577 2.78235 21.7343 3.74743 21.7343H32.033L24.6732 29.0391C23.9908 29.7165 23.9908 30.8147 24.6732 31.492C25.3556 32.1693 26.462 32.1693 27.1445 31.492L37.454 21.2593C37.7902 20.9432 38 20.4958 38 19.9998C38 19.5016 37.7883 19.0524 37.4494 18.7361L27.1444 8.50799Z',
         perPage: 3,
         perMove: 1,
         pagination : false,
         padding  : '0',
         gap    : '40px',
         breakpoints: {
            1200: {
               gap: '30px',
            },
            991: {
               perPage: 3,
               gap : '15px',
               padding  : '30px',
            },
            767: {
               perPage: 2,
               gap : '10px',
               arrows:false,
               pagination : true,
            },
            580: {
               perPage: 1
            },
         },
      });
      testimonialSlider.mount();
   };

   // brandSlider
   if ($('.brand-slider').length) {
      var brandSlider = new Splide( '.brand-slider', {
         arrowPath: 'M27.1444 8.50799C26.462 7.83066 25.3556 7.83067 24.6732 8.50801C23.9908 9.18535 23.9908 10.2835 24.6732 10.9609L32.0327 18.2654H3.74743C2.78235 18.2654 2 19.0419 2 19.9998C2 20.9577 2.78235 21.7343 3.74743 21.7343H32.033L24.6732 29.0391C23.9908 29.7165 23.9908 30.8147 24.6732 31.492C25.3556 32.1693 26.462 32.1693 27.1445 31.492L37.454 21.2593C37.7902 20.9432 38 20.4958 38 19.9998C38 19.5016 37.7883 19.0524 37.4494 18.7361L27.1444 8.50799Z',
         perPage: 2,
         perMove: 1,
         pagination : false,
         padding  : '0',
         gap    : '40px',
         breakpoints: {
            1200: {
               gap: '20px',
            },
            991: {
               perPage: 1.3,
               gap : '15px',
               padding  : '100px',
            },
            767: {
               perPage: 2,
               gap : '10px',
               padding  : '50px',
               pagination : true,
               arrows:false,
            },
            575: {
               perPage: 1.2,
               padding  : '30px'
            },
            480: {
               perPage: 1,
               padding  : '30px',
            },
         },
      });
      brandSlider.mount();
   };

   // resourcesSlider
   if ($('.resources-slider').length) {
      var resourcesSlider = new Splide( '.resources-slider', {
         arrowPath: 'M27.1444 8.50799C26.462 7.83066 25.3556 7.83067 24.6732 8.50801C23.9908 9.18535 23.9908 10.2835 24.6732 10.9609L32.0327 18.2654H3.74743C2.78235 18.2654 2 19.0419 2 19.9998C2 20.9577 2.78235 21.7343 3.74743 21.7343H32.033L24.6732 29.0391C23.9908 29.7165 23.9908 30.8147 24.6732 31.492C25.3556 32.1693 26.462 32.1693 27.1445 31.492L37.454 21.2593C37.7902 20.9432 38 20.4958 38 19.9998C38 19.5016 37.7883 19.0524 37.4494 18.7361L27.1444 8.50799Z',
         perPage: 3,
         perMove: 1,
         pagination : false,
         padding  : '0',
         gap    : '38px',
         breakpoints: {
            1200: {
               gap: '30px',
            },
            991: {
               perPage: 2.3,
               gap : '15px',
               padding  : '30px',
            },
            767: {
               perPage: 2,
               gap : '10px',
               arrows:false,
               pagination : true,
            },
            580: {
               perPage: 1,
               perMove: 1,
               autoplay:true,
               pagination : false,
            },
         },
      });
      resourcesSlider.mount();
   };

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

