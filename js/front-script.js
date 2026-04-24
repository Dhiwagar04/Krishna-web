       // Herader
       jQuery(document).ready(function ($) {
    
    
        // Sticky Header
        $(window).scroll(function () {
          var scroll = $(window).scrollTop();
  
          if (scroll >= 30) {
            $("#masthead").addClass("sticky-header");
          } else {
            $("#masthead").removeClass("sticky-header");
          }
        });
  
  
        let hamburger = $('#hamburger-menu');
        let span = hamburger.find('span').eq(0);
        let headerMobile = $('.header-mobile');
        let body = $('body');
  
        hamburger.on('click', function () {
          span.toggleClass('hamburger-menu-button-close');
          headerMobile.toggleClass('active')
          body.toggleClass('scroll-lock');
        });
  
  
  
        // Smooth Scroll To Top
  
        var btn = $('.btn-up');
  
        $(window).scroll(function () {
          if ($(window).scrollTop() > 300) {
            btn.addClass('show');
          } else {
            btn.removeClass('show');
          }
        });
  
        btn.on('click', function (e) {
          e.preventDefault();
          $('html, body').animate({ scrollTop: 0 }, 200);
        });
  
        $(function () {
          $('.footable').footable({
            calculateWidthOverride: function () {
              return { width: $(window).width() };
            },
            breakpoints: { phone: 767, tab: 991, custome: 1024, iphone: 575, smallphone: 359 }
          });
        });
  
  
  
      });
  