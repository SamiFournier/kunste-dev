


(function ($) {

      //loader
  $(window).on('load', function() {
    // Animate loader off screen
    $("#se-pre-con").fadeOut(800);;
  });

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

    // startGIF
    var randomStart = setInterval(function(){
      var random = Math.floor(Math.random()*4)+1;
      var imgSrc = "./images/homepage/start" + random + ".png";
      $("#start").attr("src", imgSrc);
    }, 200);


});
}(jQuery));
