     
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
     
        