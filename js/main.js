(function ($) {
  $(document).ready(function(){

    // hide .navbar first
    $("nav").hide();
    // fade in .navbar
    $(function () {
        $(window).scroll(function () {
                 // set distance user needs to scroll before we start fadeIn
            if ($(this).width()>600) {
              if ($(this).scrollTop() > 150) {
                  $('nav').fadeIn();
              } else {
                  $('nav').fadeOut();
              }
            }

        });
    });

    // Burger Menu
    $(function () {
        $(".hamburger").click(function(){
            $('nav').fadeToggle();
        });
    });


});
  }(jQuery));
