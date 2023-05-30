/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
var $ = jQuery.noConflict();
jQuery(document).ready(function($) {
   $("body").tooltip({ selector: '[data-bs-toggle=tooltip]' });

   $(window).resize(function() {
      var windowWidth = $(window).width();
      if(windowWidth > 991){
         $('.bg-overly,.toggle-sidebar,body,.main-header').removeClass('is-visible');
      }
   });
   
   $('.toggle-sidebar,.bg-overly').on('click', function (e) {
      e.preventDefault();
      $('.bg-overly,.toggle-sidebar,body,.main-header').toggleClass('is-visible');
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

   $('.menu-item-has-children .arrow').on('click',function(event){
      event.preventDefault();
      $(this).toggleClass('is-active');
      $(this).parent().find('.sub-menu').first().toggle(300);
      $(this).parent().siblings().find('.sub-menu').hide(200);
   });

   /* collapse */
   $(".collapse-item .collapse-title").click(function () {
      if ($(this).closest(".collapse-item").hasClass("is-open")) {
         $(this).closest(".collapse-item").stop().removeClass("is-open");
         $(this).closest(".collapse-item").find(".collapse-body").stop().slideUp();
      } else {
         $(".collapse-item").removeClass("is-open");
         $(".collapse-item").find(".collapse-body").stop().slideUp();
         $(this).closest(".collapse-item").stop().addClass("is-open");
         $(this).closest(".collapse-item").find(".collapse-body").stop().slideDown();
      }
  });

   // logo-slider
   if ($('.logo-slider').length) {
      var cardSlider = new Splide( '.logo-slider', {
         arrows: false,
         perPage: 6,
         perMove: 1,
         pagination : false,
         padding  : '0',
         gap    : '20px',
         autoplay    : true,
         pauseOnHover: "pause",
         breakpoints: {
            991: {
               perPage:4,
               gap    : '10px',
            },
            575: {
               perPage: 4
            },
         },
      });
      cardSlider.mount();
   };

   // testimonial-slide
   if ($('.testimonial-slider').length) {
      var testimonialSlider = new Splide( '.testimonial-slider', {
         arrowPath: 'M34 20.5C34.0004 20.2745 33.9508 20.0516 33.8546 19.8475C33.7585 19.6435 33.6182 19.4633 33.444 19.32L27.552 13.44C27.2707 13.1591 26.8895 13.0013 26.492 13.0013C26.0945 13.0013 25.7132 13.1591 25.432 13.44C25.293 13.579 25.1828 13.7439 25.1076 13.9254C25.0324 14.107 24.9937 14.3015 24.9937 14.498C24.9937 14.6945 25.0324 14.8891 25.1076 15.0706C25.1828 15.2522 25.293 15.4171 25.432 15.556L28.868 19L7.5 19C7.10217 19 6.72064 19.1581 6.43934 19.4394C6.15803 19.7207 6 20.1022 6 20.5C6 20.8979 6.15803 21.2794 6.43934 21.5607C6.72064 21.842 7.10218 22 7.5 22L28.888 22L25.422 25.444C25.2827 25.583 25.1722 25.7481 25.0969 25.9298C25.0215 26.1115 24.9827 26.3063 24.9827 26.503C24.9827 26.6998 25.0215 26.8946 25.0969 27.0763C25.1722 27.258 25.2827 27.4231 25.422 27.562C25.5613 27.7014 25.7267 27.812 25.9088 27.8874C26.0908 27.9629 26.2859 28.0017 26.483 28.0017C26.6801 28.0017 26.8752 27.9629 27.0572 27.8874C27.2393 27.812 27.4047 27.7014 27.544 27.562L33.56 21.554C33.7004 21.4169 33.8117 21.2529 33.8873 21.0718C33.9629 20.8907 34.0013 20.6963 34 20.5V20.5Z',
         perPage: 2,
         perMove: 1,
         pagination : false,
         gap    : '30px',
         breakpoints: {
            991: {
               perPage:2,
               gap    : '20px',
            },
            767: {
               perPage: 1,
               padding: '60px',
            },
            575: {
               perPage: 1,
               padding: '30px',
            }
         },
      });
      testimonialSlider.mount();
   };

   // blog-slide
   if ($('.blog-slider').length) {
      var blogSlider = new Splide( '.blog-slider', {
         arrowPath: 'M34 20.5C34.0004 20.2745 33.9508 20.0516 33.8546 19.8475C33.7585 19.6435 33.6182 19.4633 33.444 19.32L27.552 13.44C27.2707 13.1591 26.8895 13.0013 26.492 13.0013C26.0945 13.0013 25.7132 13.1591 25.432 13.44C25.293 13.579 25.1828 13.7439 25.1076 13.9254C25.0324 14.107 24.9937 14.3015 24.9937 14.498C24.9937 14.6945 25.0324 14.8891 25.1076 15.0706C25.1828 15.2522 25.293 15.4171 25.432 15.556L28.868 19L7.5 19C7.10217 19 6.72064 19.1581 6.43934 19.4394C6.15803 19.7207 6 20.1022 6 20.5C6 20.8979 6.15803 21.2794 6.43934 21.5607C6.72064 21.842 7.10218 22 7.5 22L28.888 22L25.422 25.444C25.2827 25.583 25.1722 25.7481 25.0969 25.9298C25.0215 26.1115 24.9827 26.3063 24.9827 26.503C24.9827 26.6998 25.0215 26.8946 25.0969 27.0763C25.1722 27.258 25.2827 27.4231 25.422 27.562C25.5613 27.7014 25.7267 27.812 25.9088 27.8874C26.0908 27.9629 26.2859 28.0017 26.483 28.0017C26.6801 28.0017 26.8752 27.9629 27.0572 27.8874C27.2393 27.812 27.4047 27.7014 27.544 27.562L33.56 21.554C33.7004 21.4169 33.8117 21.2529 33.8873 21.0718C33.9629 20.8907 34.0013 20.6963 34 20.5V20.5Z',
         perPage: 3,
         arrows: false,
         perMove: 1,
         pagination : false,
         gap    : '30px',
         destroy: true,
         type   : 'loop',
         breakpoints: {
            991: {
               perPage:2,
               gap    : '20px',
            },
            767: {
               perPage: 1,
               padding: '60px',
               destroy: false,
               gap    : '20px',
            },
            575: {
               perPage: 1,
               padding: '30px',
            }
         },
      });
      blogSlider.mount();
   };
   $(".counter").each(function () {
      var $this = $(this),
      countTo = $this.attr("data-count");
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
   icw_cf7_labels();
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

