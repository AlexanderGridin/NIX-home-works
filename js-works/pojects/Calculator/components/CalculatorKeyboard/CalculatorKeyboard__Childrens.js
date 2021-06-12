import ReVueComponent from '../../ReVue/ReVueComponent.js';
import Button from '../Button/Button.js';

let childrens = prepareChildrens();

function prepareChildrens(){
  let columnLeft = prepareColumnLeft();
  let columnRight = prepareColumnRight();

  return [
    columnLeft,
    columnRight,
  ];
}

function prepareColumnLeft(){
  let actionsSection = prepareActionsSection();
  let numericSection = prepareNumericSection();

  let columnLeft = new ReVueComponent();
  columnLeft.initElement({
    tagName: 'div',
    name: 'CalculatorColumnLeft',
    attributes: {
      classNames: 'calculator__keyboard-column-left',
    },
    childrens: [
      actionsSection,
      numericSection,
    ]
  });

  return columnLeft;
}

function prepareActionsSection(){
  let clearButton = new Button()
    .setName('ClearButton')
    .addClassNames('calculator__keyboard-clear')
    .addAttributes({
      value: 'c',
      textContent: 'C',
      'data-type': 'action',
    })
    .buildElement();

  let changeSignOfNumberButton = new Button()
    .setName('ChangeSignButton')
    .addClassNames('calculator__keyboard-change-sign')
    .addAttributes({
      value: '+-',
      textContent: '+/-',
      'data-type': 'action',
    })
    .buildElement();

  let percentButton = new Button()
    .setName('PercentButton')
    .addClassNames('calculator__keyboard-percent')
    .addAttributes({
      value: '%',
      textContent: '%',
      'data-type': 'action',
    })
    .buildElement();

  let actionsSection = new ReVueComponent()
    .initElement({
      tagName: 'div',
      name: 'CalculatorActionsSection',
      attributes: {
        classNames: 'calculator__keyboard-actions-section'
      },
      childrens: [
        clearButton,
        changeSignOfNumberButton,
        percentButton,
      ],
    });

  return actionsSection;
}

function prepareNumericSection(){
  let numericButtons = [];

  for(let i = 0; i < 10; i++){
    let numericButton = new Button()
      .setName('NumericButton')
      .addClassNames('calculator__keyboard-number')
      .addAttributes({
        value: `${i}`,
        textContent: `${i}`,
        'data-type': 'numeric'
      })
      .buildElement();

    numericButtons.push(numericButton);
  }

  let dotButton = new Button()
    .setName('DotButton')
    .addClassNames('calculator__keyboard-dot')
    .addAttributes({
      value: `.`,
      textContent: `.`,
      'data-type': 'numeric',
    })
    .buildElement();

  numericButtons.push(dotButton);

  let numericSection = new ReVueComponent()
    .initElement({
      tagName: 'div',
      name: 'CalculatorNumericSection',
      attributes: {
        classNames: 'calculator__keyboard-numeric-section'
      },
      childrens: numericButtons,
    });

    console.log(numericSection)

  return numericSection;
}

function prepareColumnRight(){
  let divideButton = new Button()
    .setName('DivideButton')
    .addClassNames('calculator__keyboard-divide')
    .addAttributes({
      value: '/',
      textContent: '/',
      'data-type': 'operation',
    })
    .buildElement();

  let multiplyButton = new Button()
    .setName('MultiplyButton')
    .addClassNames('calculator__keyboard-multiply')
    .addAttributes({
      value: '*',
      textContent: '*',
      'data-type': 'operation',
    })
    .buildElement();

  let substractButton = new Button()
    .setName('SubstractButton')
    .addClassNames('calculator__keyboard-substract')
    .addAttributes({
      value: '-',
      textContent: '-',
      'data-type': 'operation',
    })
    .buildElement();

  let sumButton = new Button()
    .setName('SumButton')
    .addClassNames('calculator__keyboard-sum')
    .addAttributes({
      value: '+',
      textContent: '+',
      'data-type': 'operation',
    })
    .buildElement();

  let resultButton = new Button()
    .setName('ResultButton')
    .addClassNames('calculator__keyboard-result')
    .addAttributes({
      value: '=',
      textContent: '=',
      'data-type': 'operation',
    })
    .buildElement();

  let columnRight = new ReVueComponent()
    .initElement({
      tagName: 'div',
      name: 'CalculatorColumnRight',
      attributes: {
        classNames: 'calculator__keyboard-column-right',
      },
      childrens: [
        divideButton,
        multiplyButton,
        substractButton,
        sumButton,
        resultButton,
      ]
    });

  return columnRight;
}

export default childrens;