(function($,root,undefined){$(function(){'use strict';$(".lines-button").on('click',function(e){e.preventDefault();$(this).toggleClass("close");$(".nav").toggleClass("open");});var currentMousePos={x:-1,y:-1};var windowWidth=0;var oldX=parseInt($(".prev").css("left"));var oldXR=parseInt($(".next").css("right"));var mouseLimit=parseInt(24-oldX);var mouseLimitR=0;var newX=0;var newXR=0;var newOpacity=0;$(document).mousemove(function(event){var mainHeight=$(".single .main > article").height();currentMousePos.y=event.pageY;if((currentMousePos.y>96)&(currentMousePos.y<mainHeight)){currentMousePos.x=event.pageX;windowWidth=$(window).width();mouseLimitR=parseInt(windowWidth+oldXR-24);if(currentMousePos.x<96){$(".no-touch .prev").css("left","24px");$(".no-touch .prev").css("opacity","1");}
else if(currentMousePos.x<mouseLimit){newX=parseInt(oldX+((mouseLimit-currentMousePos.x)*2));newOpacity=((mouseLimit-currentMousePos.x)*1/96);$(".no-touch .prev").css("left",newX+"px");$(".no-touch .prev").css("opacity",newOpacity);}
else if(currentMousePos.x>(mouseLimitR+96)){$(".no-touch .next").css("right","24px");$(".no-touch .next").css("opacity","1");}
else if(currentMousePos.x>mouseLimitR){newX=parseInt(oldXR+((currentMousePos.x-mouseLimitR)*2));newOpacity=((currentMousePos.x-mouseLimitR)*1/96);$(".no-touch .next").css("right",newX+"px");$(".no-touch .next").css("opacity",newOpacity);}
else{$(".prev").css("left",oldX+"px");$(".no-touch .prev").css("opacity","0");$(".next").css("right",oldXR+"px");$(".no-touch .next").css("opacity","0");}}
else{$(".no-touch .next").css("right","-168px");$(".no-touch .next").css("opacity","0");$(".no-touch .prev").css("left","-168px");$(".no-touch .prev").css("opacity","0");}});jQuery('.wpcf7-form fieldset input[type="text"]').focus(function(){jQuery(this).css("border-color","#111");jQuery("label[for='"+jQuery(this).attr("name")+"']").css("border-color","#111");jQuery("label[for='"+jQuery(this).attr("name")+"']").css("background","#111");jQuery("label[for='"+jQuery(this).attr("name")+"']").css("color","#fff");});jQuery('.wpcf7-form fieldset input[type="email"]').focus(function(){jQuery(this).css("border-color","#111");jQuery("label[for='"+jQuery(this).attr("name")+"']").css("border-color","#111");jQuery("label[for='"+jQuery(this).attr("name")+"']").css("background","#111");jQuery("label[for='"+jQuery(this).attr("name")+"']").css("color","#fff");});jQuery('.wpcf7-form textarea').focus(function(){jQuery(this).css("border-color","#111");});jQuery('.wpcf7-form fieldset input[type="text"]').blur(function(){jQuery("label[for='"+jQuery(this).attr("name")+"']").css("background","transparent");jQuery("label[for='"+jQuery(this).attr("name")+"']").css("color","#111");});jQuery('.wpcf7-form fieldset input[type="email"]').blur(function(){jQuery("label[for='"+jQuery(this).attr("name")+"']").css("background","transparent");jQuery("label[for='"+jQuery(this).attr("name")+"']").css("color","#111");});var nua=navigator.userAgent;var is_android=((nua.indexOf('Mozilla/5.0')>-1&&nua.indexOf('Android ')>-1&&nua.indexOf('AppleWebKit')>-1)&&!(nua.indexOf('Chrome')>-1));if(is_android)$(".home-letter figcaption > a").css("opacity","1");$(window).load(function(){if($('body').is(':visible')){$('body').addClass("ready");}});$(window).scroll(function(event){var scroll=$(window).scrollTop();if(scroll>=315)$(".home .header").addClass("overlay");else $(".home .header").removeClass("overlay");if(scroll>=292)$(".about .header").addClass("overlay");else $(".about .header").removeClass("overlay");if(scroll>=328)$(".contact .header").addClass("overlay");else $(".contact .header").removeClass("overlay");if(scroll>=100)$(".single .header").addClass("overlay");else $(".single .header").removeClass("overlay");});});})(jQuery,this);