import ReVueComponent from "../../ReVue/ReVueComponent.js";


class CalculatorDisplay extends ReVueComponent{
  constructor(){
    super();

    this.tagName = 'div';
    this.name = 'CalculatorDisplay';
    this.attributes = {
      classNames: 'calculator__display'
    };

    this.childrens = prepareChildrens();
    this.setChildrens().buildElement();
  }
}

function prepareChildrens(){
  let displayInput = new ReVueComponent()
    .initElement({
      tagName: 'input',
      name: 'CalculatorDisplayInput',
      attributes: {
        type: 'text',
        classNames: 'calculator__display-input',
        value: 0,
      }
    });

  return [displayInput];
}

export default CalculatorDisplay;