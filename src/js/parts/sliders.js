let initSlidersMain = () => {
  $(".js__slider").slick({
  variableWidth: true,
  lazyLoad: 'ondemand',
  arrows: true,
  dots: true,
  appendArrows:$('.slider__nav'),
  appendDots:$('.slider__nav'),
  });
};

let initSlidersItem = () => {
  $(".js__slider-for").slick({
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    infinite: true,
    asNavFor: ".js__slider-nav"
  });
  $(".js__slider-nav").slick({
    lazyLoad: 'ondemand',
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".js__slider-for",
    dots: false,
    focusOnSelect: true,
    infinite: true,
    arrows: false,
    vertical: false,
  });
};

let initSliderNews = () => {
  $(".js__slider-news").on('init', function(){
    
  });
  $(".js__slider-news").slick({
    lazyLoad: 'ondemand',
    infinite: false,
    slidesToShow: 3.3,
    centerMode: false,
    focusOnSelect: false,
    slidesToScroll:1,
    appendArrows:$('.news__nav'),
    arrows: true,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 3.2,
        }
      },
      {
        breakpoint: 1210,
        settings: {
          slidesToShow: 2.5,
        }
      },
      {
        breakpoint:630,
        settings: {
          slidesToShow: 1.7,
        }
      },
      {
        breakpoint:430,
        settings: {
          slidesToShow: 1.3,
        }
      },
      {
        breakpoint:330,
        settings: {
          slidesToShow: 1.2,
        }
      },
    ]
  });
};


export default function initSliders() {
  initSlidersMain();
  initSlidersItem();
  initSliderNews();
}
