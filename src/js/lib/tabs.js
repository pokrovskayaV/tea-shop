class TabList {
  constructor(buttonsContainer, tabs) {
    this.buttonsContainer = buttonsContainer;
    this.tabs = tabs;
    
    this.buttonsContainer.addEventListener('click', event => {
      if (!event.target.classList.contains('tabs__link') && !event.target.classList.contains('tabs__text')) {
        return;
      }
      const index = event.target.closest('.tabs__link').dataset.value;
      const tabsLink = document.querySelectorAll('.tabs__link');
      tabsLink.forEach(link => link.classList.remove('_active'));
      event.target.closest('.tabs__link').classList.add('_active');
      this.openTab(index);
    });
  }
  
  openTab(index) {
    this.tabs.querySelector('.active').classList.remove('active');
    this.tabs.querySelector(`.tab--${index}`).classList.add('active');
  }
}

document.addEventListener('DOMContentLoaded', ()=>{
  const buttonsContainer = document.querySelector('.tabs__nav');
  const tabs             = document.querySelector('.tabs__content');
  
  const tabList = new TabList(buttonsContainer, tabs);
})