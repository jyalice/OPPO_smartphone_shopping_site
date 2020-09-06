# OPPO smartphone shopping site

## This is a shopping site of OPPO smartphones, showing the most popular types of OPPO smartphones and providing properties, prices, services, news and other information. It contains several parts such as top, header, nav, OPPO star smartphone part, OPPO accessory, the world of OPPO, serve, after-sale and footer. 

## When hovered by the mouse, corresponding parts will respond like jumping upwards or changing the color of its border-bottom or the color of the words. 

## The nav part is always visible on the top when the mouse is scrolled.

## In the banner part, 4 pictures about OPPO smartphones are slided with the help of swiper.js. 

## When the webpage is scrolled to OPPO star smartphone part, OPPO accessory, the world of OPPO, or the serve part, animations occur to show images about OPPO smartphones. 

## When the back-to-top button -- which is the grey square in the lower right corner whose color darkens when hovered -- is clicked, the webpage will be scrolled back to top. The scroll speed is correlated positively with the distance from the top. 

## Many thanks to OPPO!

# some tips

## tip about animate.min.css: if you want to apply zoomInUp to a div, there will be no problems. However, if you want to apply bounceInUp to a div, you had better create a new div, and put the old div into that new div; apply bounceInUp to the new div, but not the old one. That is because if you apply bounceInUp directly to the old div, div:hover{transform:translateY(-10px);} does not work any more. This is only an example, so keep in mind that there may be unwanted influence of animate.min.css.

## tip about swiper.js: according to the information on the official website of Swiper, I tried to set the time during which one picture stays. (autoplay:true,) this does not work. (autoplay: {delay: 3000,},) this did not work neither. I also tried combinations of transition-duration, data-swiper-autoplay="3000", style="transition-duration: 5000ms;", without getting a satisfactory result. Finally the best solution is to set (autoplay: 3000,). I also want autoplay to continue after I click the pictures, so I set (autoplayDisableOnInteration: true,). Don't set (autoplay:{delay: 3000, autoplayDisableOnInteration: true},), because it does not seem to work.  

## tip about offset().top. The reference of offset().top in jQuery is the upper boundary of html, while the reference of offsetTop in JavaScript is the upper boundary of its first non-static (relative, absolute or fixed) ancestor element.

# updates

## Add the function to log in or log out. Click the words "log in" in the header part, the login part with its background layer will be shown. You may use the mouse to drag the login part or close it; You may enter and submit your username and password, and your submitted username will be shown in the header part; You may also log out by click the words "log out" in the header part. Even be dragged, the login part will always appear in the center when it is reopened.   

