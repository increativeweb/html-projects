$('.toggle-sidebar,.bg-overly').on('click', function (e) {
    $('.bg-overly,.toggle-sidebar,body,.main-header').toggleClass('is-visible');
    e.preventDefault();
 });

 if ($('.main-header').length) {

    if ($(this).scrollTop() > 100) {
       $(".main-header").addClass("fixed-header");
    } else {
       $(".main-header").removeClass("fixed-header");
    }

    $(window).scroll(function () {
       if ($(this).scrollTop() > 100) {
          $(".main-header").addClass("fixed-header");
       } else {
          $(".main-header").removeClass("fixed-header");
       }
    });
 }
 $(document).ready(function () {
    $("li").click(function (){
      $(this).addClass("current-menu-item").siblings().removeClass("current-menu-item");
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
function visible(partial) {
   var $t = partial,
       $w = jQuery(window),
       viewTop = $w.scrollTop(),
       viewBottom = viewTop + $w.height(),
       _top = $t.offset().top,
       _bottom = _top + $t.height(),
       compareTop = partial === true ? _bottom : _top,
       compareBottom = partial === true ? _top : _bottom;

   return ((compareBottom <= viewBottom) && (compareTop >= viewTop) && $t.is(':visible'));

}
$(window).scroll(function(){
   if(visible($('.count-digit'))){
       if($('.count-digit').hasClass('counter-loaded')) return;
           $('.count-digit').addClass('counter-loaded');
           
           $('.count-digit').each(function () {
           var $this = $(this);
           $({ Counter: 0 }).animate({ Counter: $this.text() }, {
           duration: 3000,
           easing: 'swing',
           step: function () {
               $this.text(Math.ceil(this.Counter) .toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
           }
           });
       });
   }
})
document.addEventListener('DOMContentLoaded', function() {
   new Splide('#firstslider', {
       trimSpace: 'move',
       focus: 'first',
       perPage: 3.2,
       perMove: 1,
       arrowPath: 'M12.0092 0.51331C11.3396 -0.164913 10.2471 -0.171955 9.56884 0.497581C8.89062 1.16712 8.88358 2.25969 9.55311 2.93791L26.4363 20.0402L9.50243 37.0573C8.83019 37.7328 8.83287 38.8254 9.50841 39.4977C10.184 40.1699 11.2765 40.1672 11.9488 39.4917L30.028 21.3236C30.4346 20.9151 30.5943 20.3541 30.5076 19.8257C30.4761 19.4355 30.3122 19.0538 30.0157 18.7534L12.0092 0.51331Z',
       breakpoints: {
           1200: {
               padding: 0,
           },
           991: {
               perPage: 2.4
           },
           767: {
               perPage: 2
           },
           480: {
               perPage: 1.2
           },
       },
   }).mount();
});

document.addEventListener('DOMContentLoaded', function() {
   new Splide('#secondslider', {
       trimSpace: 'move',
       focus: 'first',
       perPage: 4.3,
       perMove: 1,
       arrowPath: 'M12.0092 0.51331C11.3396 -0.164913 10.2471 -0.171955 9.56884 0.497581C8.89062 1.16712 8.88358 2.25969 9.55311 2.93791L26.4363 20.0402L9.50243 37.0573C8.83019 37.7328 8.83287 38.8254 9.50841 39.4977C10.184 40.1699 11.2765 40.1672 11.9488 39.4917L30.028 21.3236C30.4346 20.9151 30.5943 20.3541 30.5076 19.8257C30.4761 19.4355 30.3122 19.0538 30.0157 18.7534L12.0092 0.51331Z',
       breakpoints: {
           1200: {
               perPage: 4
           },
           991: {
               perPage: 3
           },
           767: {
               perPage: 2.5
           },
           480: {
               perPage: 1.3
           },
       },
   }).mount();
});

document.addEventListener('DOMContentLoaded', function() {
   new Splide('.testimonial-slide', {
         trimSpace: 'move',
         focus: 'first',
         perPage: 2,
         perMove: 1,
         arrowPath: 'M12.0092 0.51331C11.3396 -0.164913 10.2471 -0.171955 9.56884 0.497581C8.89062 1.16712 8.88358 2.25969 9.55311 2.93791L26.4363 20.0402L9.50243 37.0573C8.83019 37.7328 8.83287 38.8254 9.50841 39.4977C10.184 40.1699 11.2765 40.1672 11.9488 39.4917L30.028 21.3236C30.4346 20.9151 30.5943 20.3541 30.5076 19.8257C30.4761 19.4355 30.3122 19.0538 30.0157 18.7534L12.0092 0.51331Z',
         breakpoints: {
            768: {
                  perPage: 1
            },
            480: {
                  perPage: 1
            },
         },
   }).mount();
});
