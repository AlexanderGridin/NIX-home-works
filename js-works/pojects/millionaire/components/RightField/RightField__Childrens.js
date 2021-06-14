import Helpers from '../Helpres/Helpers.js';
import QuestionsPrices from '../QuestionsPrices/QuestionsPrices.js';
import PlayerProfile from '../PlayerProfile/PlayerProfile.js';

let childrens = prepareChildrens();

function prepareChildrens(){
  let helpers = new Helpers();
  let questionPrices = new QuestionsPrices();
  let playerProfile = new PlayerProfile();

  return [
    helpers,
    questionPrices,
    playerProfile,
  ];
}

export {childrens};