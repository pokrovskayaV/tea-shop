import lazy from "./parts/lazyLoad";
import initSliders from "./parts/sliders";
import initHeader from "./parts/changeHeader";
import scrollMenu from "./parts/scrollMenu";
import initPopup from "./parts/popup";


$(document).ready(() => {
  lazy();
  initSliders();
  initHeader();
  scrollMenu();
  initPopup(); 
}); 