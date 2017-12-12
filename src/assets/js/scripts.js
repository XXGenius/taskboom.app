	if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0 && ($(window).width() > 600)) 
{
             
}

else {
	
	
	
	$(document).on("scroll", function(){
		if
      ($(document).scrollTop() > 100){
		  $("header").addClass("shrink");
		  $(".logo").addClass("logo-m");
		  $(".pr-bar").addClass("pr-bar-active");
		  $(".photo").addClass("photo-active");
		}
		else
		{
			$("header").removeClass("shrink");
			$(".logo").removeClass("logo-m");
			$(".pr-bar").removeClass("pr-bar-active");
			$(".photo").removeClass("photo-active");
			
		}
	});
	
}// Empty JS for your own code to be here