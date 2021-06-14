import ReVueComponent from '../../ReVue/ReVueComponent.js';
import {childrens} from './QuestionsPrices__Childrens.js';

class QuestionsPrices extends ReVueComponent{
  constructor(){
    super();

    this.tagName = 'ol';
    this.name = 'QuestionsPrices';
    this.attributes = {
      classNames: 'millionaire__questions-prices'
    };

    this.childrens = childrens;
    this.setChildrens().buildElement();
  }
}

export default QuestionsPrices;