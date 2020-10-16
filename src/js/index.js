import lazy from "./parts/lazyLoad";
import initSliders from "./parts/sliders";
import initHeader from "./parts/changeHeader";
import initPopup from "./parts/popup";


$(document).ready(() => {
  let changeMargin = () => {
    if($(window).width() > 1681) {
    let marginLeft = $('._container').css('margin-left');
    $('.news__list').css({'margin-left':marginLeft})
    } 
  } 
  changeMargin();
  $(window).on( "resize", function () {
    changeMargin();
  })

  $('.footer__menu').on( "click", function (e) {
    e.preventDefault();
    if ($(e.target).hasClass('_open-list')) {
    let menuList = $(e.target).parent().parent();
    menuList.find('.menu__list').toggleClass('hidden');
    menuList.find('span').toggleClass('rotate');
    }
  })

  lazy();
  initSliders();
  initHeader();
  initPopup(); 
}); 