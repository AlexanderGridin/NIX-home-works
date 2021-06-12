import ReVueComponent from '../../ReVue/ReVueComponent.js';
import CalculatorDisplay from '../CalculatorDisplay/CalculatorDisplay.js';
import CalculatorKeyboard from '../CalculatorKeyboard/CalculatorKeyboard.js';

class Calculator extends ReVueComponent{
  constructor(){
    super();

    this.tagName = 'div';
    this.name = 'Calculator';
    this.attributes = {
      classNames: 'calculator'
    };

    this.childrens = prepareChildrens();
    this.setChildrens().buildElement();

    this.result = 0;
    this.operands = [];
    this.status = 'init';
    this.currentOperation = '';
  }

  handleOperation(a, b, operation){
    if(operation){
      switch (operation) {
        case '+':
          return a + b;
        case '-':
          return a - b;
        case '/':
          return a / b;
        case '*':
          return a * b;
      }
    }

    return a;
  }
}

function prepareChildrens(){
  let calculatorDisplay = new CalculatorDisplay();
  let calculatorKeyboard = new CalculatorKeyboard();

  return [
    calculatorDisplay,
    calculatorKeyboard,
  ];
}

export default Calculator;