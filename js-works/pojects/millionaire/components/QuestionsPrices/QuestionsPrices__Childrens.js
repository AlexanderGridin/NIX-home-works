import ReVueComponent from '../../ReVue/ReVueComponent.js';
import Game from '../../Game/Game.js';

let childrens = prepareChildrens(Game.questionsPrices);

function prepareChildrens(questionsPrices){
  let childrens = [];
  
  questionsPrices.forEach((questionPrice, i) => {
    let li = null;

    if(questionPrice.constant){
      li = new ReVueComponent().initElement({
        tagName: 'li',
        attributes: {
          classNames: 'constant',
          textContent: `${questionPrice.value} ${Game.currency}`,
        },      
      });
    }

    if(!questionPrice.constant){
      li = new ReVueComponent().initElement({
        tagName: 'li',
        attributes: {
          textContent: `${questionPrice.value} ${Game.currency}`,
        },      
      });
    }

    li.constant = questionPrice.constant;
    li.order = i;
    li.value = questionPrice.value;

    childrens.push(li);
  });

  return childrens;
}

export {childrens};