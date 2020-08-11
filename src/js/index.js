import lazy from "./parts/lazyLoad";
import initPopup from "./parts/popup";
import initSliders from "./parts/sliders";
import scrollMenu from "./parts/scrollMenu";
import initHeader from "./parts/changeHeader";

$(document).ready(() => {
  lazy();
  scrollMenu();
  initPopup();
  initSliders();
  initHeader();
}); 