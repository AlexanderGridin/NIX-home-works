import ReVueComponent from '../../ReVue/ReVueComponent.js';
import {childrens} from './QuestionsList__Childrens.js';

class QuestionsList extends ReVueComponent{
  constructor(props){
    super(props);

    this.tagName = 'ul';
    this.name = 'MillionaireQuestionsList';
    this.attributes = {
      classNames: 'millionaire__questions-list'
    }

    this.childrens = childrens;
    this.setChildrens().buildElement();
  }
}

export default QuestionsList;