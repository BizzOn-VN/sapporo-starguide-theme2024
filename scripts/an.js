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

//set max-height -scollbar
function set_max_height_scrollbar(){
	var max_height_scrollbar=$(".slide-news ").outerHeight()-$("#slider-1").outerHeight();
	$("#slider-2 .scrollbar").css("max-height",max_height_scrollbar)
}
set_max_height_scrollbar();
$(".main-nav ul.menu li.has-sub").click(function(){
	if($(this).children(".sub-menu").hasClass("active")){
		$(this).children(".sub-menu").removeClass('active')
	}else{
		$(this).children(".sub-menu").addClass('active')
	}
	
})
// $("#open-sapporo-nav img").click(function(){
// 	$(".main-nav").addClass("active-menu");
// })
$(document).mouseup(function(e){
	var container = $(".main-nav ul.menu li.has-sub");
	if (!container.is(e.target) && container.has(e.target).length === 0){
		$(".sub-menu").removeClass('active')
	}
});

$(".page-header .meta-right #open-sapporo-nav").click(function(){
	if($(".main-nav").hasClass("active-menu")){
		$(".main-nav").removeClass('active-menu')
	}else{
		$(".main-nav").addClass('active-menu')
	}
	
})
$(".main-nav .sidebar-header img").click(function(){
	$(".main-nav").removeClass('active-menu');
})
if (window.matchMedia("(max-width: 768px)").matches) {
	$(document).mouseup(function(e){
	var container = $(".main-nav");
	if (!container.is(e.target) && container.has(e.target).length === 0){
		$(".main-nav").removeClass('active-menu');
	}
});
} else {
}

$('.banner').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dot:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('.slider-home-blk3').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    autoplay:true,
    center:true,
    responsive:{
        0:{
            items:1,
            stagePadding: 70
        },
        450:{
            items:1,
            stagePadding: 80
        },
        500:{
            items:1,
            stagePadding: 120
        },
         600:{
            items:1,
            stagePadding: 150
        },
        768:{
            items:3
        }
    }
})
var  owl=$('.slide-news').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:true,
    center:true,
    items:1,
    onInitialized: set_max_height_scrollbar,
  	onResized: set_max_height_scrollbar
})

$('.owl-carousel').on("dragged.owl.carousel", function(e) {
  console.log('center item is:'+ (e.item.index + 1));
});


var slider1 = $('#slider-1');
var slider2 = $('#slider-2');

var slider1FirstSlideIndex; // to determine clone
var prevIndex = 0; // to determine the direction


// slider1
slider1.owlCarousel({
	loop: true,
	nav: true,
	center: true,
	smartSpeed: 800,
	dots: false,
	items: 1,
	onInitialized: function(event) {
		slider1FirstSlideIndex = event.item.index; // to determine clone
	},
	onTranslate: function(event) {
		sliderSync(event);
	}
});

function sliderSync(event) {
	var index = event.item.index;
	var loop = event.relatedTarget.options.loop;
	var slider2CloneCount = slider2.find('.owl-item.cloned').length / 2;
	
	if(loop) {
		if(index < slider1FirstSlideIndex) { // if active slide is clone
			slider2.trigger('prev.owl.carousel');
		} else {
			if(event.item.count === 2 && event.item.index === 2 && prevIndex === 3) { // if two slides and trigger = next
				slider2.trigger('next.owl.carousel');
			} else {
				slider2.trigger('to.owl.carousel', index - slider2CloneCount);
			}
		}

		prevIndex = event.item.index; // to determine the direction
		
	} else {
		slider2.trigger('to.owl.carousel', index);
	}
}


// slider2
slider2.owlCarousel({
	loop: true,
	nav: false,
	dots: false,
	smartSpeed: 800,
	touchDrag: false,
	mouseDrag: false,
	pullDrag: false,
	items: 1
});

 $(window).on("load",function(){
    $(".scrollbar").mCustomScrollbar();
    set_max_height_scrollbar();
});

set_max_height_scrollbar();






$('.info-gift .item').hover(function(){
		$(".info-gift .item .info").removeClass("active");
        $(this).children(".info").addClass("active");
    },function(){
        $(".info-gift .item .info").removeClass("active");
});



function playVideo() {
        $('.video-blk-dt').get(0).play();
        
    }

function playVideomb() {
        $('.video-blk-mb').get(0).play();
        
    }
$('.img-cube').click(function(){
  $('.video-blk-right').css('z-index',999);
  setTimeout( function(){
    $('.video-blk-right').css('z-index',0);
       },21000);
    
});

var loopslider=0;

var deg=0;
$(".img-cube").click(function(){
  
  $(".click-rotate").addClass("disabled-click");
  $('.bg-cube').addClass('active-cube');
  setTimeout(function(){
     $('.bg-cube').removeClass('active-cube');
    }, 21000);
  // if(loopslider===0){
    setTimeout(function(){
      $(".slider-url-1").addClass("active-slider-url");
      $(".blk-whell").addClass("hidden");
      $(".share-khoanh-khac").addClass("hidden");
      

    //   $(".slider-url .inner-slider-url .item").removeClass("active");
    // $(".slider-url .inner-slider-url .data-hash-cold").addClass("active");
      // $(".slider").addClass("next-2");
      $(".slider-url-1 .item").removeClass("active");
      $(".slider-url-1 .data-hash-cold").addClass("active");

      // $(".slider-url .inner-slider-url .item").removeClass("active");
      // $(".slider-url .inner-slider-url .data-hash-clear").addClass("active");
      // $("#next").trigger('click');
    }, 1500);
    setTimeout(function(){
      $(".slider-url-1").addClass("active-slider-url");
      $(".blk-whell").addClass("hidden");
      $(".share-khoanh-khac").addClass("hidden");

      $(".slider-url .inner-slider-url .item").removeClass("active");
    $(".slider-url .inner-slider-url .data-hash-cold").addClass("active");
      // $("#next").trigger('click');
      $(".slider-url-1 .item").removeClass("active");
      $(".slider-url-1 .data-hash-cold").addClass("active");

      $(".slider-url .inner-slider-url .item").removeClass("active");
      $(".slider-url .inner-slider-url .data-hash-clear").addClass("active");
      deg -=100;

    }, 5000);
    setTimeout(function(){
      // $("#next").trigger('click');
      loopslider=1;
      $(".slider-url .inner-slider-url .item").removeClass("active");
      $(".slider-url .inner-slider-url .data-hash-creamy").addClass("active");
      // $(".image-rotate .img").css("transform","rotate(-270deg)");
      deg -=154;

    }, 12000);
    setTimeout(function(){
      // $("#next").trigger('click');
      loopslider=1;
      $(".slider-url .inner-slider-url .item").removeClass("active");
      $(".slider-url .inner-slider-url .data-hash-chuan3c").addClass("active");
      // $(".image-rotate .img").css("transform","rotate(-270deg)");
      deg -=154;

    }, 15000);
     setTimeout(function(){
      // $("#next").trigger('click');
      loopslider=1;
      $(".slider-url .inner-slider-url .item").removeClass("active");
      $(".slider-url .inner-slider-url .data-hash-cold").addClass("active");
      $(".share-khoanh-khac").removeClass("hidden")
      $(".slider-url-1").removeClass("active-slider-url");
      $(".button-click").removeClass("disabled");
      $(".blk-whell").removeClass("hidden");
      $(".click-rotate").removeClass("disabled-click");
      // $(".image-rotate .img").css("transform","rotate(0deg)");
      deg -=106;

    }, 18000);
    
})







