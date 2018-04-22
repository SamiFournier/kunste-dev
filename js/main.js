(function ($) {

    //loader
  $(window).on('load', function() {
    // Animate loader off screen
    $("#se-pre-con").fadeOut(800);
    $("img").removeClass("hide").addClass("loaded");
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
    });

    // kMoove
    $(".coverK").hover(function(){
      var direction = Math.floor(Math.random()*8);
      var base = "kMoove"
      var res = base.concat(direction);
      $(this).addClass(res);
    })

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
