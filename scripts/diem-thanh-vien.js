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

 $(window).on("load",function(){
    $(".blk-scroll").mCustomScrollbar({
    axis:"y" // vertical and horizontal scrollbar
   });
   $(".table-htr").mCustomScrollbar({
    axis:"y" // vertical and horizontal scrollbar
   });
});
