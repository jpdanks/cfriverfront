var tomCS = {};

$(document).ready(function() {
    // Check the width of the screen
    tomCS.winW = $(window).width();
    // Check if it's a touch screen (based on Modernizr) - Remove if it if you want    
    tomCS.isTouch = false;
    if($('.touch')[0]){
        tomCS.isTouch = true;
    }
    // If the size of the screen is lower or equal to 767, we are on a mobile device
    tomCS.isMobile = false;
    if(tomCS.winW <= 767){
        tomCS.isMobile = true;
    }
    // If we are not on a mobile device, initiate skrollr
    if (!tomCS.isMobile){
        tomCS.s = skrollr.init({forceHeight: false});
    }
});

// Disable or enable skrollr on window resize
$(window).resize(function(){
    console.log("RESIZE");
    tomCS.winW = $(window).width();
    if(tomCS.winW <= 767){
        console.log("MOBILE");
        tomCS.isMobile = true;
        if($('.skrollable')[0]){
        tomCS.s.destroy();
        }
    } else {
        console.log("NOT MOBILE");
        if(!$('.skrollable')[0]){
        tomCS.s = skrollr.init({forceHeight: false});
        }
    }
});



$(function() {                       //run when the DOM is ready
  $("#menu-button").click(function() {  //use a class, since your ID gets mangled 
    $(".nav-list").toggleClass("open");      //add the class to the clicked element
    $('#menu-button').html($('#menu-button').text() == '' ? '' : '');
  });
});

jQuery(".sub-page-header > .wrapper > h1, h2.headline").fitText(1.2, { minFontSize: '24px', maxFontSize: '60px' });

jQuery(".header-text > h1").fitText(1.2, { minFontSize: '36px', maxFontSize: '100px' });

jQuery("h2.class-name").fitText(0.75, { minFontSize: '40px', maxFontSize: '60px' });

// Hide the Barley Icon by default
// Show the Barley Icon on ESC Key Press
 
// Make sure DOM is loaded
document.addEventListener('DOMContentLoaded', function(){
 
  // The Barley Icon Element
  var barleybar = document.getElementById('barley-bar');
 
  // Hide By Default
  barleybar.style.display = 'none';
  
  // Listen for Escape Key Press and Show Icon
  document.addEventListener('keydown', function (e) {
    if ( e.keyCode === 27 ) {
      barleybar.style.display = 'block';
    }
  });
 
});

