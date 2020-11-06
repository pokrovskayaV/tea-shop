let initSlidersMain = () => {
  $(".js__slider").slick({
  infinite: true,
  lazyLoad: 'ondemand',
  arrows: true,
  dots: true,
  appendArrows:$('.slider__nav'),
  appendDots:$('.slider__nav'),
  });
};

let initSliderNews = () => {
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
        breakpoint: 980,
        settings: {
          slidesToShow: 2.8,
        }
      },
      {
        breakpoint:850,
        settings: {
          slidesToShow: 2.3,
        }
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1.7,
        }
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1.15,
        }
      },
    ]
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
    infinite: false,
    arrows: false,
    vertical: false,
  });
};


let initSlidersTabs = () => {
   $(".js-slider-tabs-content").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    swipe: false,
    fade: true,
    
  });

 
  $(".js-slider-tabs-nav").slick({
    lazyLoad: 'ondemand',
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    focusOnSelect: true,
    asNavFor: ".js-slider-tabs-content",
     
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3.5,
        }
      },
      {
        breakpoint: 440,
        settings: {
          slidesToShow: 2.5,
        }
      },
      {
        breakpoint: 340,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
     
});
};

let initSliderTab = () => {
  $(".js-slider-tab").slick({
   lazyLoad: 'ondemand',
   slidesToShow: 5,
   slidesToScroll: 1,
   arrows: false,
   infinite: false,
   cssEase:'ease-out',
  
   responsive: [
     {
       breakpoint: 1140,
       settings: {
         slidesToShow: 3.3,
       }
     },
     {
       breakpoint: 740,
       settings: {
         slidesToShow: 2.5,
       }
     },
     {
       breakpoint: 540,
       settings: {
         slidesToShow: 2,
       }
     },
     {
      breakpoint: 440,
      settings: {
        slidesToShow: 1.5,
      }
    },
    {
      breakpoint: 340,
      settings: {
        slidesToShow: 1.3,
      }
    },
   ]
 });


};


export default function initSliders() {
  initSlidersTabs();
  initSliderTab();
  initSlidersMain();
  initSlidersItem();
  initSliderNews();
}
