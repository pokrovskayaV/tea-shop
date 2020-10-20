import lazy from "./parts/lazyLoad";
import initSliders from "./parts/sliders";
import initHeader from "./parts/changeHeader";
import initPopup from "./parts/popup";


$(document).ready(() => {
  $('.footer__menu').on( "click", function (e) {
    e.preventDefault();
    if ($(e.target).hasClass('_open-list')) {
    let menuList = $(e.target).parent().parent();
    menuList.find('.menu__list').toggleClass('hidden');
    menuList.find('span').toggleClass('rotate');
    }
  })
 $('.counter__minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
 $('.counter__plus').click(function () {
   var $input = $(this).parent().find('input');
   $input.val(parseInt($input.val()) + 1);
   $input.change();
   return false;
  });

  $('.item__like').click(function () {
    $(this).toggleClass('_active');
  });

  lazy();
  initSliders();
  initHeader();
  initPopup(); 
}); 