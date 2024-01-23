     

     
//set max-height -scollbar
function set_max_height_scrollbar(){
    var max_height_scrollbar=$(".slide-news ").outerHeight()-$("#slider-1").outerHeight();
    $("#slider-2 .scrollbar").css("max-height",max_height_scrollbar)
}
set_max_height_scrollbar();

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

 $(window).on("load",function(){
    $(".scrollbar").mCustomScrollbar();
    set_max_height_scrollbar();

});


set_max_height_scrollbar();




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
     
$( ".video-star-tv" ).each(function( index ) {
    console.log( index);
       $(this).find(".youtube-embed").attr("id-number", index);
     });

     
     let players=[] ; 
    function run_hide_related_yt(){
        document.addEventListener('DOMContentLoaded', function() {
            // Activate only if not already activated
           if (window.hideYTActivated) return;
            // Activate on all players
            let onYouTubeIframeAPIReadyCallbacks = [];
            for (let playerWrap of document.querySelectorAll(".hytPlayerWrap")) {
                let playerFrame = playerWrap.querySelector("iframe");
                
                let tag = document.createElement('script');
                tag.src = "https://www.youtube.com/iframe_api";
                let firstScriptTag = document.getElementsByTagName('script')[0];
                firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

                
                let onPlayerStateChange = function(event) {
                    if (event.data == YT.PlayerState.ENDED) {
                        playerWrap.classList.add("ended");
                    } else if (event.data == YT.PlayerState.PAUSED) {
                        playerWrap.classList.add("paused");
                    } else if (event.data == YT.PlayerState.PLAYING) {
                        playerWrap.classList.remove("ended");
                        playerWrap.classList.remove("paused");
                    }
                };
                let player;
                
                onYouTubeIframeAPIReadyCallbacks.push(function() {
                    player = new YT.Player(playerFrame, {
                        events: {
                            'onStateChange': onPlayerStateChange
                        }
                    });
                    // add to players array
                    players.push(player);
                });
              
                playerWrap.addEventListener("click", function() {
                    let playerState = player.getPlayerState();
                    if (playerState == YT.PlayerState.ENDED) {
                        player.seekTo(0);
                    } else if (playerState == YT.PlayerState.PAUSED) {
                        player.playVideo();
                    }
                });
            }
            
            window.onYouTubeIframeAPIReady = function() {
                for (let callback of onYouTubeIframeAPIReadyCallbacks) {
                    callback();
                }
            };
            
            window.hideYTActivated = true;
        });
    }
    run_hide_related_yt();    

    $( ".video-star-tv" ).each(function() {
      $( this).find(".youtube-embed").attr('src');
    });


    $('.dropdown')
  .dropdown({
    onChange: function(value, text, $selectedItem) {
         $(".video-star-tv").removeClass("active-video");
         $(value).addClass("active-video");
         var id_number=$(value).find(".youtube-embed").attr("id-number");
         for(var i = 0; i < $(".video-star-tv").length; i++){
             players[i].stopVideo();
         }
         players[id_number].playVideo();
     $('html,body').animate({
         scrollTop: $(".video-star-tv.active-video").offset().top
     }, 'slow');
      
    setTimeout(function(){ $("#yt").show(); }, 200);
    }
  })



 $(".block-three-videos .thumb-nail").click(function(){
    $(".block-three-videos .blk-col").removeClass("active");
    $(this).parent(".blk-col").addClass("active");
    var data_src=$(this).attr("data-src");
    $(".video-star-tv").removeClass("active-video");
    $(data_src).addClass("active-video");

    var id_number=$(data_src).find(".youtube-embed").attr("id-number");
    for(var i = 0; i < $(".video-star-tv").length; i++){
        players[i].stopVideo();
    }
    players[id_number].playVideo();
    
    $('html,body').animate({
         scrollTop: $(".video-star-tv.active-video").offset().top
     }, 'slow');
})
     
                