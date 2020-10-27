import initSliders from "./parts/sliders";
import initPopup from "./parts/popup";
import footerMenu from "./parts/footerMenu";
import itemBtn from "./parts/itemBtn";

$(document).ready(() => {
  footerMenu();
  itemBtn();
  initSliders();
  initPopup(); 
}); 