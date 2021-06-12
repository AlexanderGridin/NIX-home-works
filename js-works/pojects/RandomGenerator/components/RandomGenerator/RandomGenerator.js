import ReVueComponent from '../../ReVue/ReVueComponent.js';

import Header from '../Header/Header.js';
import RandomGeneratorForm from '../RandomGeneratorForm/RandomGeneratorForm.js';
import RandomGeneratorResult from '../RandomGeneratorResult/RandomGeneratorResult.js';

class RandomGenerator extends ReVueComponent{
  constructor(){
    super();

    this.tagName = 'section';
    this.attributes = {
      classNames: 'random-generator'
    }

    this.childrens = prepareChildrens();
    this.setChildrens();

    this.buildElement();
  }
}

function prepareChildrens(){
  let header = new Header({
    titleText: 'Генератор случайных чисел'
  });
  header
    .addClassNames('random-generator__header')
    .buildElement();


  let randomGeneratorFrom = new RandomGeneratorForm({
    submitButtonText: 'Сгенерировать число'
  });

  let randomGeneratorResult = new RandomGeneratorResult();

  return [
    header,
    randomGeneratorFrom,
    randomGeneratorResult,
  ];
}

export default RandomGenerator;