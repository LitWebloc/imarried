$(document).ready(function(){
  $('.slider-run').slick({
  slidesToShow: 9,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 1670,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 1320,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 1120,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 970,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 820,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: false,
        centerMode: true,
        centerPadding: '12px',
        autoplay: true
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        centerMode: true,
        centerPadding: '15px',
        autoplay: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: '30px',
        autoplay: true
      }
    }
  ]
  });
});