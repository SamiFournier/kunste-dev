


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

        // position subversive
        // fade subversice
        $(window).on("scroll", function() {
        	var scrollHeight = Math.floor($(document).height());
        	var scrollPosition = Math.floor($(window).height() + $(window).scrollTop());
        	if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
        	    // when scroll to bottom of the page
              var posTop = $("#bandeau").position().top + ($("#bandeau").height() * 0.33)
              var posleft = $("#bandeau").position().left + ($("#bandeau").width() * 0.86)
              $("#subpapier").css({top: posTop, left: posleft, position:'absolute'});
              $("#subpapier").fadeIn(3000);
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
    // var randomStart = setInterval(function(){
    //   var random = Math.floor(Math.random()*4)+1;
    //   var imgSrc = "./images/homepage/start" + random + ".png";
    //   $("#start").attr("src", imgSrc);
    // }, 200);


});
}(jQuery));
