import ReVueComponent from '../../ReVue/ReVueComponent.js';
import {childrens} from './Helpres__Childrens.js';

class Helpers extends ReVueComponent{
  constructor(){
    super();

    this.tagName = 'div';
    this.attributes = {
      classNames: 'millionaire__helpers'
    };
    this.childrens = childrens;
    this.setChildrens().buildElement();
  }
}

export default Helpers;