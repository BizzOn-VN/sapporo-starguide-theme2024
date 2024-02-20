'use strict';

/* HELPER: Checks Whether an Element Exists
----------------------------------------------------------------------------------------------------*/
(function( $ ) {

  $.fn.extend({
    exists: function() {
      if ( this.length > 0 ) {
        return true;
      } else {
        return false;
      }
    }
  });

})( jQuery );

function set_top_nav_introduce_slider(){
    $(".blk-history-4 .slider-introduce .item .produce").css("height","auto")
    $(".blk-history-4 .owl-item").each(function() {
        if(maxHeight<$(this).children(".item").children(".produce").height()){
            maxHeight=$(this).children(".item").children(".produce").height();
            console.log(maxHeight)
        }
            $(".blk-history-4 .slider-introduce .item .produce").css("height",maxHeight)
            $(".blk-history-4 .slider-introduce .owl-nav .owl-prev").css('top',maxHeight/2);
            $(".blk-history-4 .slider-introduce .owl-nav .owl-next").css('top',maxHeight/2);
    });
    
}

function set_top_nav_introduce_slider(){
    $(".blk-history-4 .slider-introduce .item .produce").css("height","auto")
    $(".blk-history-4 .owl-item").each(function() {
        if(maxHeight<$(this).children(".item").children(".produce").height()){
            maxHeight=$(this).children(".item").children(".produce").height();
            console.log(maxHeight)
        }
            $(".blk-history-4 .slider-introduce .item .produce").css("height",maxHeight)
            $(".blk-history-4 .slider-introduce .owl-nav .owl-prev").css('top',maxHeight/2);
            $(".blk-history-4 .slider-introduce .owl-nav .owl-next").css('top',maxHeight/2);
    });
    
}

var owl_introduce =$('.blk-history-4 .slider-introduce').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    smartSpeed: 800,
    touchDrag: false,
    mouseDrag: false,
    pullDrag: false,
    items: 1,
    onInitialized: set_top_nav_introduce_slider(),
    onResized: set_top_nav_introduce_slider(),
    onTranslated: set_top_nav_introduce_slider()
})


$('.blk-history-2 .slider-desktop').owlCarousel({
    margin:0,
    loop:true,
    smartSpeed: 1800,
    autoplay:true,
    autoplayTimeout:7000,
    autoplayTimeout:17000,
    // autoplayHoverPause:true,
    // autoplayHoverPause: true ,
    autoWidth:true,
    nav:true,
    dots:false
})

$( document ).ready(function() {
        
        
        
});

$('.blk-history-2 .slider-mb').owlCarousel({
    margin:0,
    loop:true,
    smartSpeed: 1800,
    autoplay:true,
    autoplayTimeout:7000,
    autoplayTimeout:17000,
    autoWidth:true,
     nav:true,
    dots:false
})



