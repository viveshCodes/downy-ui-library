import './styles/tabs.css';

class Tabs {
  constructor(container){
    this.container = container;
    this.tabs = container.querySelectorAll('.trigger');
  }
  init(){
    this.tabs.forEach(tab => {
      tab.addEventListener('click', (event) => {
        if(event.target.tagName === 'LI'){
          this.toggleTabs(event);
          this.toggleContent(event);
        }
      });
    });
  }
  toggleTabs(event){
    // remove current active classes
    this.tabs.forEach(tab => tab.classList.remove('active'));
    // add new active class
    event.target.classList.add('active');
  }
  toggleContent(event){
    // remove current active classes
    this.container.querySelectorAll('.content').forEach(item => {
      item.classList.remove('active');
    });
    // add new active class
    const selector = event.target.getAttribute('data-target');
    const content = this.container.querySelector(selector);
    content.classList.add('active');
  }
}

export { Tabs as default };