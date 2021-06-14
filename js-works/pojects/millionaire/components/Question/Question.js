import ReVueComponent from '../../ReVue/ReVueComponent.js';
import prepareChildrens from './Question__Childrens.js';

class Question extends ReVueComponent{
  constructor(props){
    super(props);

    this.tagName = 'li';
    this.attributes = {
      classNames: 'millionaire__question'
    }

    this.childrens = prepareChildrens(props);
    this.setChildrens();

    this.hasAnswer = false;
  }
}

export default Question;