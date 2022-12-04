(function ($) {
    "use strict"
    // var Typed = require(typed.min.js);

    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(','),
            typeSpeed: 100,
            backSpeed: 10,
            smartBackspace: false,
            loop: true
        });
    }
    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });

    $(document).ready(function() {
        $(window).scroll(function() {
          if ($(this).scrollTop() > 20) {
            $('#toTopBtn').fadeIn();
          } else {
            $('#toTopBtn').fadeOut();
          }
        });
      
        $('#toTopBtn').click(function() {
          $("html, body").animate({
            scrollTop: 0
          }, 1000);
          return false;
        });
      });

    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });
    // skills
     // Skills
     $(document).ready(function() {
        $('.progress .progress-bar').css("width",
                  function() {
                      return $(this).attr("aria-valuenow") + "%";
                  }
          )
      });



})(jQuery)