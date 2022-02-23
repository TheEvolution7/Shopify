$(window).scroll(function() {
    var theta = $(window).scrollTop();
    $('.rotate-img').css({ transform: 'rotate(' + theta*0.2 + 'deg)' });
    $('#rightgear').css({ transform: 'rotate(-' + theta + 'rad)' });
  });

  $('.slide-pro-img').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: false,
    fade: true,
    autoplaySpeed: 500,
    speed: 500,
    slidesToShow: 1,
    
  });
  $('.product-hover-slide').mouseover(function() {
    $('.slide-pro-img',this).slick('play')
});
$('.product-hover-slide').mouseout(function() {
    $('.slide-pro-img',this).slick('pause')
});
