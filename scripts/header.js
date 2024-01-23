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


$(".main-nav ul.menu li.has-sub").click(function(){
	if($(this).children(".sub-menu").hasClass("active")){
		$(this).children(".sub-menu").removeClass('active')
	}else{
		$(this).children(".sub-menu").addClass('active')
	}
	
})

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
