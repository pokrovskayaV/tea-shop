export default function changeHeader() {
  
  $('.js__slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    let imageClass = $(".slick-active img");
    let header = $(".header__content");
    if(imageClass.hasClass('_gradient')) {
      header.removeClass('_dark');
      header.addClass('_gradient');
    } else if(imageClass.hasClass('_dark')){
      header.removeClass('_gradient');
      header.addClass('_dark');
    } else {
      header.removeClass('_dark _gradient')
    }
  });
}