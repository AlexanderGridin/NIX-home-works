import ReVue from '../../ReVue/ReVue.js';
import ReVueComponent from '../../ReVue/ReVueComponent.js';
import Button from '../Button/Button.js';
import Game from '../../Game/Game.js';

let childrens = prepareChildrens();

function prepareChildrens(){
  let playerName = new ReVueComponent().initElement({
    tagName: 'h2',
    attributes: {
      classNames: 'millionaire__player-profile-name',
      textContent: Game.playerName
    },
  });

  let playerEarnedMoneysTitle = new ReVueComponent().initElement({
    tagName: 'h3',
    attributes: {
      classNames: 'millionaire__player-profile-earned-moneys-title',
      textContent: 'Выигрыш:',
    },
  });

  let playerEarnedMoneysValue = new ReVueComponent().initElement({
    tagName: 'div',
    name: 'playerEarnedMoneysValue',
    attributes: {
      classNames: 'millionaire__player-profile-earned-moneys-value',
      textContent: `0${Game.currency}`,
    }
  });

  let playerEarnedMoneysInfo = new ReVueComponent().initElement({
    tagName: 'div',
    attributes: {
      classNames: 'millionaire__player-profile-earned-moneys'
    },
    childrens: [
      playerEarnedMoneysTitle,
      playerEarnedMoneysValue,
    ],
  });

  let getMoneysButton = new Button()
    .addAttributes({
      textContent: 'Забрать деньги.'
    })
    .setEventListeners({
      click: function(){
        let gameWrapper = ReVue.getComponentByName('MillionaireGameWrapper');
        gameWrapper.deleteComponent();

        let winningModal = ReVue.getComponentByName('WinningModal');
        winningModal.childrens[0].childrens[0].element.innerHTML = `<h2>Поздравляем!</h2><div class="text">Вы выиграли<br /><span class="sum">${Game.playerCurrentMoneys}${Game.currency}</span></div>`;
        winningModal.element.classList.remove('hidden');
      }
    })
    .buildElement();

  return [
    playerName,
    playerEarnedMoneysInfo,
    getMoneysButton
  ];
}

export {childrens};