// animate.min.css is used to provide animations for some pictures of the webpage. When the webpage is scrolled to the corresponding part, pictures become shown and animations occur. $(window).height() is multiplied by a fraction to avoid the situation that animations happen before the webpage is scrolled to the corresponding part. 
$(window).scroll(function(){

	var scrollTStar=document.documentElement.scrollTop || document.body.scrollTop;
	var backTopStar=$("#star").offset().top-$(window).height()/2;
	if(scrollTStar>backTopStar){
		$("#star .a1").addClass("animated bounceInRight show").removeClass("fade");
		$("#star .a2").addClass("animated bounceInDown show").removeClass("fade");
		$("#star .a3").addClass("animated bounceInUp show").removeClass("fade");
		$("#star .a4").addClass("animated bounceInLeft show").removeClass("fade");
	};	

	var scrollTAcc=document.documentElement.scrollTop || document.body.scrollTop;
	var backTopAcc=$("#accessory").offset().top-$(window).height()/2;
	if(scrollTAcc>backTopAcc){
		$("#accessory .a1").addClass("animated bounceInRight show").removeClass("fade");
		$("#accessory .a2").addClass("animated bounceInDown show").removeClass("fade");
		$("#accessory .a3").addClass("animated bounceInUp show").removeClass("fade");
		$("#accessory .a4").addClass("animated bounceInLeft show").removeClass("fade");
	};

	var scrollTWorld=document.documentElement.scrollTop || document.body.scrollTop;
	var backTopWorld=$("#world").offset().top-$(window).height()/2;
	if(scrollTWorld>backTopWorld){
		$("#world .a1").addClass("animated bounceInRight show").removeClass("fade");
		$("#world .a2").addClass("animated bounceInDown show").removeClass("fade");
		$("#world .a3").addClass("animated bounceInUp show").removeClass("fade");
		$("#world .a4").addClass("animated bounceInLeft show").removeClass("fade");
	};

	var scrollTServe=document.documentElement.scrollTop || document.body.scrollTop;
	var backTopServe=$("#serve").offset().top-$(window).height()*3/4;
	console.log(scrollTServe-backTopServe)
	if(scrollTServe>backTopServe){
		$("#serve .a1").addClass("animated zoomInUp show").removeClass("fade");
		$("#serve .a2").addClass("animated zoomInUp show").removeClass("fade");
		$("#serve .a3").addClass("animated zoomInUp show").removeClass("fade");
		$("#serve .a4").addClass("animated zoomInUp show").removeClass("fade");
		$("#serve .a5").addClass("animated zoomInUp show").removeClass("fade");
	};
});




