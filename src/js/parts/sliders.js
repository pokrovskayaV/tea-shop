let initSlidersMain = () => {
  $(".js__slider").slick({
  variableWidth: true,
  lazyLoad: 'ondemand'
  });
};

let initSlidersItem = () => {
  $(".js__slider-for").slick({
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    infinite: false,
    asNavFor: ".js__slider-nav"
  });
  $(".js__slider-nav").slick({
    lazyLoad: 'ondemand',
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".js__slider-for",
    dots: false,
    focusOnSelect: true,
    infinite: false,
    vertical: false,
  });
};

let initSliderReccomend = () => {
  $(".js__slider-recommend").slick({
    lazyLoad: 'ondemand',
    infinite: true,
    slidesToShow: 4,
    centerMode: false,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 819,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint:550,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
};


export default function initSliders() {
  initSlidersMain();
  initSlidersItem();
  initSliderReccomend();
}
