import initPopup from "./parts/popup";
import initSliders from "./parts/sliders";
import lazy from "./parts/lazyLoad";
import scrollMenu from "./parts/scrollMenu";
import changeHeader from "./parts/changeHeader";

$(document).ready(() => {
  lazy();
  scrollMenu();
  initPopup();
  initSliders();
  changeHeader();

}); 