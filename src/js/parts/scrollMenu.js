export default function scrollMenu() {
  $(".js__nav-menu").scroll(function () {
    let scrolledMenu = $(".js__nav-menu");
    let scrollWidth = $(".js__nav-menu").scrollLeft();
    if (scrollWidth > 1 && scrollWidth < 280) {
      scrolledMenu.addClass("scroll-start scroll-end");
    } else if (scrollWidth > 280) {
      scrolledMenu.removeClass("scroll-end");
    } else if (scrollWidth == 0) {
      scrolledMenu.addClass("scroll-end");
      scrolledMenu.removeClass("scroll-start");
    }
  })
}
