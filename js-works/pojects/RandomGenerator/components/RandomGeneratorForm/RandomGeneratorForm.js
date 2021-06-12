import ReVue from '../../ReVue/ReVue.js';
import ReVueComponent from '../../ReVue/ReVueComponent.js';

import {SubmitButton} from '../Buttons/Buttons.js';
import TextInput from '../TextInput/TextInput.js';

class RandomGeneratorForm extends ReVueComponent{
  constructor(props){
    super(props);

    this.tagName = 'form';
    this.name = 'randomGeneratorForm';
    this.attributes = {
      action: '#',
      classNames: 'random-generator__form'
    };

    this.childrens = prepareChildrens(props);
    this.setChildrens();

    this.buildElement();
  }
}

function prepareChildrens(props){
  let totalNumbers = new TextInput();
  totalNumbers
    .setName('totalNumbers')
    .addClassNames('random-generator__form-total-numbers')
    .addAttributes({
      placeholder: 'Введите количество цифр в Вашем числе'
    })
    .buildElement();

  let minTextInput = new TextInput();
  minTextInput
    .setName('minInput')
    .addClassNames('random-generator__form-min-text-input')
    .addAttributes({
      placeholder: 'Введите минимальное число'
    })
    .buildElement();

  let maxTextInput = new TextInput();
  maxTextInput
    .setName('maxInput')
    .addClassNames('random-generator__form-max-text-input')
    .addAttributes({
      placeholder: 'Введите максимальное число'
    })
    .buildElement();

  let inputsWrapper = new ReVueComponent();
  inputsWrapper.initElement({
    tagName: 'div',
    attributes: {
      classNames: 'random-generator__form-inputs-wrapper'
    },
    childrens: [
      totalNumbers,
      minTextInput,
      maxTextInput,
    ],
  });

  let button = new SubmitButton(props);
  button
    .setEventListeners({
      click: generateNumber(button)
    })
    .addClassNames('random-generator__form-submit')
    .buildElement();

  return [
    inputsWrapper,
    button,
  ];
}

function generateNumber(button){
  return function(e){
    e.preventDefault();
    e.stopPropagation();

    let totalNumbersInput = ReVue.getComponentByName('totalNumbers');
    let minInput = ReVue.getComponentByName('minInput');
    let maxInput = ReVue.getComponentByName('maxInput');
    let resultField = ReVue.getComponentByName('randomGeneratorResult');

    let min = +minInput.element.value;
    let max = +maxInput.element.value;
    let totalNumbers = +totalNumbersInput.element.value;

    if(isNaN(min) || isNaN(max) || isNaN(totalNumbers)){
      button.parent.element.reset();
      return;
    }

    let randomNumber = generateRandomInteger(min, max, totalNumbers);
    let randomNumberHTML = '';
    for(let number of randomNumber){
      randomNumberHTML += `<span style="color: ${getRandomColor()};">${number}</span>`;
    }
    resultField.element.innerHTML = randomNumberHTML;

    resultField.parent.element.classList.remove('hidden');
    button.parent.element.classList.add('hidden');

    button.parent.element.reset();
  }
}

function generateRandomInteger(min, max, totalNumbers = 1){
  let result = [];

  if(min > max){
    [min, max] = [max, min];
  }

  for(let i = 0; i < totalNumbers; i++){
    result.push(getRandomInteger(min, max));
  }

  return result;
}

function getRandomInteger(min, max){
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

function getRandomColor(){
  let colors = ['#DD5044', '#159F5C', '#0473B2', 'violet', 'orange', 'pink', 'black', '#FFCE44'];
  return colors[getRandomInteger(0, colors.length-1)];
}

export default RandomGeneratorForm;