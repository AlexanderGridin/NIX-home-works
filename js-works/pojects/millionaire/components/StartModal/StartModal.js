import ReVueComponent from '../../ReVue/ReVueComponent.js';
import {childrens} from './StartModal__Childrens.js';

class StartModal extends ReVueComponent{
  constructor(){
    super();

    this.tagName = 'div',
    this.attributes = {
      classNames: 'millionaire__start-modal'
    };

    this.childrens = childrens;
    this.setChildrens().buildElement();
  }
}

export default StartModal;