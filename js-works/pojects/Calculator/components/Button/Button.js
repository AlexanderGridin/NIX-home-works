import ReVueComponent from '../../ReVue/ReVueComponent.js';

class Button extends ReVueComponent{
  constructor(){
    super();

    this.tagName = 'button';
    this.attributes = {
      classNames: 'button',
      type: 'button'
    };
    this.numberOfClicks = 0;
  }
}

export default Button;