import questionsData from './data/questionsData.js';
import questionsPrices from './data/questionsPrices.js'

let Game = {
  playerName: 'Аноним',
  playerEarnedMoneys: 0,
  playerCurrentMoneys: 0,

  questions: questionsData,
  questionsPrices: questionsPrices,
  currentQuestion: 0,
  currentQuestionIndex: 0,

  currency: '₴',

  helprers: {
    halfOfAnswers: true,
    callFriend: true
  },

  getRandomInteger(min, max){
    return Math.floor(Math.random() * (max + 1 - min) + min);
  }
};

export default Game;