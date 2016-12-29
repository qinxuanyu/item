(function(){
	var bool=true;
	$(".head-toggle").click(function(){
		if(bool){
			$(".head-toggle").addClass("active");
			$(".head-menu").slideDown(100);
			bool=false;
		}
		else{
			$(".head-toggle").removeClass("active");
			$(".head-menu").slideUp(100);
			bool=true;
		}
	});
})();

$(".goToTop").css("display","none");
$(window).scroll(function(){
    var t = $(this).scrollTop();
    if(t > 200){
        $(".goToTop").fadeIn(500);
    }
    else{
        $(".goToTop").fadeOut(500);
    }
});
$(".goToTop").click(function(){
	$('body,html').animate({ scrollTop: 0 },200);
});
