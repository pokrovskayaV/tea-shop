//Выбираем цвет шапки для каждого слайда по свайпу или клику на стрелки
let changeHeader = () => {
 let header = $(".js-menuScroll");
 let addColorClass = () => {
    $('.slick-current').hasClass('_gradient') ? header.addClass('_gradient') : header.removeClass('_gradient')
  }
  $('.js__slider').on('swipe', addColorClass);
  $('.slick-arrow').on('click', addColorClass);
}

//Выбираем цвет шапки для разных страниц
let changeMobileHeader = () => {
  if($("div").is(".js__slider")) {
  $(".header__content").addClass('_black');
  }
}

export default function initHeader() {
  changeHeader();
  changeMobileHeader();
}