import ReVueComponent from '../../ReVue/ReVueComponent.js';
import StartModal from '../StartModal/StartModal.js';
import LeftField from '../LeftField/LeftField.js';
import RightField from '../RightField/RightField.js';
import WinningModal from '../WinningModal/WinningModal.js';
import FriendModal from '../FriendModal/FriendModal.js';

let childrens = prepareChildrens();

function prepareChildrens(){
  let startModal = new StartModal();

  let leftFiled = new LeftField();
  let rightField = new RightField();

  let winningModal = new WinningModal();
  let friendModal = new FriendModal();

  let gameWrapper = new ReVueComponent().initElement({
    tagName: 'div',
    name: 'MillionaireGameWrapper',
    attributes: {
      classNames: 'millionaire__game-wrapper',
    },
    childrens: [
      leftFiled,
      rightField,
    ],
  });


  return [
    startModal,
    gameWrapper,
    winningModal,
    friendModal,
  ];
}

export {childrens};