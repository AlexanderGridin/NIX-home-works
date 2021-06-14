import ReVueComponent from '../../ReVue/ReVueComponent.js';
import {childrens} from './RightField__Childrens.js';

class RightField extends ReVueComponent{
  constructor(){
    super();

    this.tagName = 'div';
    this.attributes = {
      classNames: 'millionaire__right-field'
    };

    this.childrens = childrens;
    this.setChildrens().buildElement();
  }
}

export default RightField;