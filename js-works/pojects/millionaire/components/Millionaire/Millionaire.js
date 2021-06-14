import ReVueComponent from '../../ReVue/ReVueComponent.js';
import {childrens} from './Millionaire__Childrens.js';

class Millionaire extends ReVueComponent{
  constructor(){
    super();

    this.tagName = 'div';
    this.name = 'MillionaireGame';
    this.attributes = {
      classNames: 'millionaire'
    };

    this.childrens = childrens;
    this.setChildrens().buildElement();
  }
}

export default Millionaire;