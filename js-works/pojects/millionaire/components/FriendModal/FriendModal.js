import ReVueComponent from '../../ReVue/ReVueComponent.js';
import {childrens} from './FriendModal__Childrens.js';

class FriendModal extends ReVueComponent{
  constructor(){
    super();

    this.tagName = 'div';
    this.name = 'FriendModal';
    this.attributes = {
      classNames: 'millionaire__friend-modal hidden'
    };

    this.childrens = childrens;
    this.setChildrens().buildElement();
  }
}

export default FriendModal;