var tomCS={};$(document).ready(function(){tomCS.winW=$(window).width(),tomCS.isTouch=!1,$(".touch")[0]&&(tomCS.isTouch=!0),tomCS.isMobile=!1,tomCS.winW<=767&&(tomCS.isMobile=!0),tomCS.isMobile||(tomCS.s=skrollr.init({forceHeight:!1}))}),$(window).resize(function(){console.log("RESIZE"),tomCS.winW=$(window).width(),tomCS.winW<=767?(console.log("MOBILE"),tomCS.isMobile=!0,$(".skrollable")[0]&&tomCS.s.destroy()):(console.log("NOT MOBILE"),$(".skrollable")[0]||(tomCS.s=skrollr.init({forceHeight:!1})))}),$(function(){$("#menu-button").click(function(){$(".nav-list").toggleClass("open"),$("#menu-button").html(""==$("#menu-button").text()?"":"")})}),jQuery(".sub-page-header > .wrapper > h1, h2.headline").fitText(1.2,{minFontSize:"24px",maxFontSize:"60px"}),jQuery(".header-text > h1").fitText(1.2,{minFontSize:"36px",maxFontSize:"100px"}),jQuery("h2.class-name").fitText(.75,{minFontSize:"40px",maxFontSize:"60px"}),document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("barley-bar");e.style.display="none",document.addEventListener("keydown",function(o){27===o.keyCode&&(e.style.display="block")})});