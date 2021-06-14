import ReVueComponent from '../../ReVue/ReVueComponent.js';
import Game from '../../Game/Game.js';
import Button from '../Button/Button.js';

let childrens = prepareChildrens();

function prepareChildrens(){
  let msg = new ReVueComponent().initElement({
    tagName: 'div',
    attributes: {
      classNames: 'millionaire__wining-modal-message',
      innerHTML: `<h2>Поздравляем!</h2><div class="text">Вы выиграли<br /><span class="sum">${Game.questionsPrices[Game.questionsPrices.length-1].value}${Game.currency}</span></div>`,
    }
  });

  let newGameButton = new Button()
    .addAttributes({
      textContent: 'Начать новую игру',
    })
    .setEventListeners({
      click: function(){
        location.reload();
      }
    })
    .buildElement();

  let container = new ReVueComponent().initElement({
    tagName: 'div',
    attributes: {
      classNames: 'millionaire__wining-modal-container',
    },
    childrens: [
      msg,
      newGameButton,
    ],
  });

  return [container];
}

export {childrens}