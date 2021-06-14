import ReVueComponent from '../../ReVue/ReVueComponent.js';
import Button from '../Button/Button.js';
import {startTheGame} from './StartModal__EventHandlers.js';

let childrens = prepareChildrens();

function prepareChildrens(){
  let introText = new ReVueComponent().initElement({
    tagName: 'div',
    attributes: {
      classNames: 'text',
      innerHTML: `<p>Приветствуем Вас в игре</p><h2>Кто хочет стать миллионером?</h2><p>Перед началом игры представьтесь пожалуйста:</p>`,
    },
  });

  let playerNameInput = new ReVueComponent().initElement({
    tagName: 'input',
    attributes: {
      type: 'text',
      name: 'player-name',
      required: true,
      classNames: 'millionaire__start-modal-form-input',
      placeholder: 'Введите Ваши ФИО',
    },
  });

  let startButton = new Button()
    .addClassNames('start-game-button')
    .addAttributes({
      type: 'submit',
      textContent: 'Начать игру',
    });

    startButton.setEventListeners({
      click: startTheGame(startButton),
    })
    .buildElement();

  let modalForm = new ReVueComponent().initElement({
    tagName: 'form',
    attributes: {
      action: '#',
      classNames: 'millionaire__start-modal-form',
    },
    childrens: [
      introText,
      playerNameInput,
      startButton,
    ],
  });

  return [
    modalForm,
  ];
}

export {childrens};