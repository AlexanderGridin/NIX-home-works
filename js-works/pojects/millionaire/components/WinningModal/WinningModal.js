import ReVueComponent from '../../ReVue/ReVueComponent.js';
import {childrens} from './WinningModal__Childrens.js';

class WinningModal extends ReVueComponent{
  constructor(){
    super();

    this.tagName = 'div';
    this.name = 'WinningModal';
    this.attributes = {
      classNames: 'millionaire__wining-modal hidden',
    };

    this.childrens = childrens;
    this.setChildrens().buildElement();
  }
}

export default WinningModal;