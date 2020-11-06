import initSliders from "./parts/sliders";
import initPopup from "./parts/popup";
import footerMenu from "./parts/footerMenu";
import itemBtn from "./parts/itemBtn";

$(document).ready(() => {
  footerMenu();
  itemBtn();
  initSliders();
  initPopup();

  /*$(".js-slider-tabs-content").on('afterChange', function(event, slick, currentSlide, nextSlide){

    let slide = $(".js-slider-tab:not(.slick-current)");
    let slideChild = $(".js-slider-tab:not(.slick-current) .items__product");
    slide.css({'transform':'translate3d(0px,0px,0px)'});
    slideChild.attr("aria-hidden", "false");
    slideChild.attr("tabindex", "0");
    })*/
}); 