import ReVue from '../../ReVue/ReVue.js';
import Game from '../../Game/Game.js';

export function startTheGame(startButton){
  return function(e){
    e.preventDefault();
    e.stopPropagation();

    let nameInput = startButton.parent.childrens[1];
    let playerName = nameInput.element.value.trim();

    if(playerName !== ''){
      Game.playerName = playerName;
      
      let playerProfile = ReVue.getComponentByName('PlayerProfile');
      playerProfile.childrens[0].element.textContent = Game.playerName;

      startButton.parent.parent.deleteComponent();
    }
    
  }
}