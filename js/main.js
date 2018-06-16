(function ($) {

    //loader
  $(window).on('load', function() {
    // Animate loader off screen
    $("#se-pre-con").fadeOut(800);
    $("img").removeClass("hide").addClass("loaded");

    var nbLigne = 0;
    var nbColonne = 0;

    if ($("#contact").width()<600) {
      nbColonne = 10
    } else if ($("#contact").width()<900) {
      nbColonne = 16
    } else {
      nbColonne = 20
    }

    nbLigne = Math.floor($("#contact").height()/($("#contact").width()/nbColonne*1.11))+1

    for (var i = 0; i < (nbColonne*nbLigne); i++) {
        $("#hideK").append('<img class="coverK" src="./images/homepage/kseul.png" alt="">');
    }



  });


  $(document).ready(function(){
    // HOME
    $(function () {
        // img fade out and in
        $("#home").on("click", "img.loaded", function(e){
          $(this).fadeOut(300).delay(1500).fadeIn(300);
          console.log(e);
        });
        // position logo
        $.fn.followTo = function (pos) {
            var $this = this,
                $window = $(window);

            $window.scroll(function (e) {
                if ($window.scrollTop() > pos) {
                    $this.css({
                        position: 'absolute',
                        top: pos
                    });
                } else {
                    $this.css({
                        position: 'fixed',
                        top: 0
                    });
                }
            });
        };

        $("#logo").followTo($("#home").height()/2);

        // position subversive
        // fade subversice
        // $(window).on("scroll", function() {
        // 	var scrollHeight = Math.floor($(window).height()*2);
        // 	var scrollPosition = Math.floor($(window).height() + $(window).scrollTop());
        // 	if (scrollPosition > scrollHeight*0.9) {
        // 	    // when scroll to bottom of the page
        //       var posTop = $("#bandeau").position().top + ($("#bandeau").height() * 0.33)
        //       var posleft = $("#bandeau").position().left + ($("#bandeau").width() * 0.86)
        //       $("#subpapier").css({top: posTop, left: posleft, position:'absolute'});
        //       $("#subpapier").fadeIn(2000);
        //   }
        // });

        $( "#cataLink" ).on( "click", function() {
          window.location.replace("http://kunste.eu");
          console.log("link clicked");
        });
    });

    // kMoove
    var playOneTime = false;
    $(document).on("mouseenter",".coverK", function(){
      // var direction = Math.floor(Math.random()*8);
      // var base = "kMoove"
      // var res = base.concat(direction);


      // audioElement.addEventListener('ended', function() {
      //   this.play();
      // }, false);

      $(this).addClass("kMoove");
      console.log("ok1");
      if (document.querySelectorAll(".kMoove").length == document.querySelectorAll(".coverK").length && !playOneTime) {
          $('body').addClass("shake-hard").delay(500).queue(function(next){
               $(this).removeClass("shake-hard");
               next();
          });
          // $("#bravo").show().delay(3000).fadeOut(2000);
          playOneTime = true;
      }
    })

    $('.coverK').bind('touchstart', function() {
      $(".coverK").addClass("kMoove");
      console.log("ok2");
    });








    // Menu
    // hide .navbar first
    // $("nav").hide();
    //
    // $(function () {
    //     // Burger Menu
    //     $(".hamburger").click(function(){
    //         $('nav').fadeToggle();
    //     });
    //
    //     // fade in .navbar
    //     var lastScrollTop = 0;
    //     $(window).scroll(function(event){
    //        var st = $(this).scrollTop();
    //        if ($(window).width()>600) {
    //          if ((st > lastScrollTop) || (st==0)){
    //            $('nav').fadeOut()
    //          } else {
    //            $('nav').fadeIn();
    //          }
    //          lastScrollTop = st;
    //        }
    //     });
    // });
});
}(jQuery));
