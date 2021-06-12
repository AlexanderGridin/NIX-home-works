import ReVue from '../../ReVue/ReVue.js';
import ReVueComponent from '../../ReVue/ReVueComponent.js';
import {ButtonPrimary} from '../Buttons/Buttons.js';

class RandomGeneratorResult extends ReVueComponent{
  constructor(){
    super();

    this.tagName = 'div';
    this.attributes = {
      classNames: 'random-generator__result hidden'
    };

    this.childrens = prepareChildrens();
    this.setChildrens()
    
    this.buildElement();
  }
}

function prepareChildrens(){
  let title = new ReVueComponent();
  title.initElement({
    tagName: 'h2',
    attributes: {
      classNames: 'random-generator__result-title',
      textContent: 'Ваше число'
    }
  });

  let resultNumber = new ReVueComponent();
  resultNumber.initElement({
    tagName: 'div',
    name: 'randomGeneratorResult',
    attributes: {
      classNames: 'random-generator__result-number',
      textContent: '0'
    },
  });

  let repeatGenerationButton = new ButtonPrimary({
    text: 'Сгенерировать новое число'
  });
  repeatGenerationButton
    .addClassNames('random-generator__repeat-button')
    .setEventListeners({
      click: repeatGeneration(repeatGenerationButton)
    })
    .buildElement();

  return [
    title,
    resultNumber,
    repeatGenerationButton
  ];
}

function repeatGeneration(button){
  return function(e){
    e.preventDefault();
    e.stopPropagation();

    let resultNumberField = ReVue.getComponentByName('randomGeneratorResult');
    resultNumberField.element.textContent = '0';

    let randomGeneratorForm = ReVue.getComponentByName('randomGeneratorForm');
    randomGeneratorForm.element.classList.remove('hidden');

    button.parent.element.classList.add('hidden');
  }
}

export default RandomGeneratorResult;