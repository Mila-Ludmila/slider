$(document).ready(function(){
  $('.slider').slick({
    arrows:true,
    dots:true,
    adaptiveHeight:true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 1000,
    easing:'linear',
    infinite:false,
    initialSlide:0,
    autoplay:false,
    autoplaySpeed:1500,
    pauseOnFocus:true,
    pauseOnHover:true,
    pauseOnDotsHover:true,
    draggable:false,
    swipe:false,
    touchThreshold:10,
    touchMove:true,
    waitForAnimate:false,
    centerMode:true,
    /* centerPadding: '60px', */
    variableWidth:false,
    rows:1,
    slidesPerRow:1,
    vertical:false,
    verticalSwiping:false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ],
    mobileFirst:false
    /* infinite:true */
  });
});