import ReVueComponent from '../../ReVue/ReVueComponent.js';

import childrens from './CalculatorKeyboard__Childrens.js';
import {handleCalculatorKeyboard} from './CalculatorKeyboard__EventHandlers.js';

class CalculatorKeyboard extends ReVueComponent{
  constructor(){
    super();

    this.tagName = 'div';
    this.name = 'CalculatorKeyboard';
    this.attributes = {
      classNames: 'calculator__keyboard'
    };

    this.eventListeners = {
      click: handleCalculatorKeyboard,
    };

    this.childrens = childrens;
    this.setChildrens().buildElement();
  }
}

export default CalculatorKeyboard;