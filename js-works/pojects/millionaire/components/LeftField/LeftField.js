import ReVueComponent from '../../ReVue/ReVueComponent.js';
import {childrens} from './LeftField__Childrens.js'

class LeftField extends ReVueComponent{
  constructor(){
    super();

    this.tagName = 'div';
    this.attributes = {
      classNames: 'millionaire__left-field'
    };

    this.childrens = childrens;
    this.setChildrens().buildElement();
  }
}

export default LeftField;