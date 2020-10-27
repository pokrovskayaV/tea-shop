export default function footerMenu () {
  $('.footer__menu').on( "click", function (e) {
  e.preventDefault();
  if ($(e.target).hasClass('_open-list')) {
  let menuList = $(e.target).parent().parent();
  menuList.find('.menu__list').toggleClass('hidden');
  menuList.find('span').toggleClass('rotate');
  }
})
}
