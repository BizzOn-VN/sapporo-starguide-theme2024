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

     
function set_position_main_menu(){
    var height_header=$(".page-header").outerHeight();
    var min_height_header=$(window).height() -height_header;
    $(".main-nav").css("top", height_header);
    $(".main-nav").css("min-height", min_height_header);
    $(".page-main").css("padding-top", height_header);
}
 set_position_main_menu();  
 $(window).resize(function(){
  set_position_main_menu();
});  
 window.addEventListener('resize', function(event) {
   set_position_main_menu();
});
$(".main-nav ul.menu li.has-sub").click(function(){
	if($(this).children(".sub-menu").hasClass("active")){
		$(this).children(".sub-menu").removeClass('active')
	}else{
		$(this).children(".sub-menu").addClass('active')
	}
	
})
$(".main-nav ul.menu li.has-sub").hover(function(){
 if($(this).children(".sub-menu").hasClass("active")){
 		$(this).children(".sub-menu").removeClass('active')
 	}else{
 		$(this).children(".sub-menu").addClass('active')
 	}
});
$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    $(".main-nav").addClass("fixed-menu");
  } else {
    $(".main-nav").removeClass("fixed-menu")
  }
});
$(document).mouseup(function(e){
	var container = $(".main-nav ul.menu li.has-sub");
	if (!container.is(e.target) && container.has(e.target).length === 0){
		$(".sub-menu").removeClass('active')
	}
});

$(".page-header .meta-right #open-sapporo-nav .toggle-menu-icon").click(function(){
	if($(".main-nav").hasClass("active-menu")){
		$(".main-nav").removeClass('active-menu')
		$(".toggle-menu-icon").addClass("active");
		$("#close-sapporo-nav").removeClass("active");
	}else{
		$(".main-nav").addClass('active-menu')
		
        $(".toggle-menu-icon").removeClass("active");
        $("#close-sapporo-nav").addClass("active");
	}
	
})
$("#close-sapporo-nav").click(function(){
	$(".main-nav").removeClass('active-menu');
	$(".toggle-menu-icon").addClass("active");
		$("#close-sapporo-nav").removeClass("active");
})
if (window.matchMedia("(max-width: 768px)").matches) {
	$(document).mouseup(function(e){
	var container = $(".main-nav");
	if (!container.is(e.target) && container.has(e.target).length === 0){
		$(".main-nav").removeClass('active-menu');
		$(".toggle-menu-icon").addClass("active");
		$("#close-sapporo-nav").removeClass("active");
	}
});
} else {
}
