

(function ($) {

  $(window).on('load', function() {

    if ($(window).width()<600) {
      $("nav").addClass("hide");
    }
  });

  $(document).ready(function(){
    $(function () {
        // Burger Menu
        $(".hamburger").click(function(){
            $('nav').fadeToggle();
        });


    });

  });
}(jQuery));
