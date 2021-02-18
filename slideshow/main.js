'use script'
$(document).ready(function() {
  $('.slideShow').slick({
   autoPlay:true,
   autoplaySpeed: 2500,
   asNavFor:'.thumb',
   arrows:true,
  });
  $('.thumb').slick({
    asNavFor:'.slideShow',
    focusOnSelect:true,
    slidesToShow:4,
    slidesToScroll:1,
    fade:false,
    arrows:false,
  });
})