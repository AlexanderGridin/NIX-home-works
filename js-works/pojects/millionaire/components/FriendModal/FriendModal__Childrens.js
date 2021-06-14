import ReVueComponent from '../../ReVue/ReVueComponent.js';
import Button from '../Button/Button.js';

let childrens = prepareChildrens();

function prepareChildrens(){
  let title = new ReVueComponent().initElement({
    tagName: 'h2',
    attributes: {
      classNames: 'millionaire__friend-modal-title',
      textContent: 'Вы позвонили своему лучшему другу:',
    }
  });

  let message = new ReVueComponent().initElement({
    tagName: 'div',
    attributes: {
      classNames: 'millionaire__friend-modal-message',
      innerHTML: `Земля в иллюминаторе....Земля в иллюминаторе видна.....`,
    }
  });

  let confirmButton = new Button();
  confirmButton
    .addClassNames('millionaire__friend-modal-confirm')
    .addAttributes({
      textContent: 'Понятно',
    })
    .setEventListeners({
      click: confirmFriendAnswer(confirmButton),
    })
    .buildElement();

  let container = new ReVueComponent().initElement({
    tagName: 'div',
    attributes: {
      classNames: 'millionaire__friend-modal-container'
    },
    childrens: [
      title,
      message,
      confirmButton,
    ]
  });

  return [container];
}

function confirmFriendAnswer(confirmButton){
  return function(e){
    e.preventDefault();
    e.stopPropagation();

    confirmButton.parent.parent.deleteComponent();
  }
}

export {childrens};