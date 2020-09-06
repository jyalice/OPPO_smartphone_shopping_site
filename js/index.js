/* animate.min.css is used to provide animations for some pictures of the webpage. When the webpage is scrolled to the corresponding part, pictures become shown and animations occur. $(window).height() is multiplied by a fraction to avoid the situation that animations happen before the webpage is scrolled to the corresponding part. */
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
	if(scrollTServe>backTopServe){
		$("#serve .a1").addClass("animated zoomInUp show").removeClass("fade");
		$("#serve .a2").addClass("animated zoomInUp show").removeClass("fade");
		$("#serve .a3").addClass("animated zoomInUp show").removeClass("fade");
		$("#serve .a4").addClass("animated zoomInUp show").removeClass("fade");
		$("#serve .a5").addClass("animated zoomInUp show").removeClass("fade");
	};
});
// get elements
var login = document.querySelector('#login');
var bg = document.querySelector('#bg');
var link = document.querySelector('#link');
var closeBtn = document.querySelector('#closeBtn');
var loginTitle = document.querySelector('#loginTitle');
var ul = document.getElementById('header').querySelector('.right');
var li = document.createElement('li');
// Click the words "Log in" in the header part, and the login part and its background layer will be displayed.
link.addEventListener('click', function() {
        bg.style.display = 'block';
        login.style.display = 'block';
    })
// Click the close button to close the login part and its background layer. 
closeBtn.addEventListener('click', function() {
        bg.style.display = 'none';
        login.style.display = 'none';
        login.style.left = '50%';
        login.style.top = '50%';
    })
// Click in the upper area of the login part, and the position of the mouse cursor in the login part will be obtained.
loginTitle.addEventListener('mousedown', function(e) {
    var x = e.pageX - login.offsetLeft;
    var y = e.pageY - login.offsetTop;
 /* Continue to move the mouse, and the position of the login part in the page will be set according to the position of the mouse cursor in the page and the position of the mouse cursor in the login part. Therefore, the login area will move with the mouse cursor.*/
    document.addEventListener('mousemove', move)
    function move(e) {   	
        login.style.left = e.pageX - x + 'px';
        login.style.top = e.pageY - y + 'px';
    }
// When the mouse is not pressed, the login part will stop moving.
    document.addEventListener('mouseup', function() {
        document.removeEventListener('mousemove', move);
       
    })
})
// Get the submitted username, and insert the logout node.
var uname = location.search.substr(1).split('&')[0].split('=')[1];
if(uname) {
	link.innerHTML = 'Welcome, ' + uname;	
	li.innerHTML = '<a href="javascript:;" id="logout">Log out</a>';
	ul.insertBefore(li, ul.children[1]);
}
// Click the words "Log out" in the header part, and the logout node will be removed from the ul node.
var logout = document.getElementById('logout');
if(logout) {
	logout.addEventListener('click', function(){
	link.innerHTML = 'Log in';
	ul.removeChild(li);
    })
}



