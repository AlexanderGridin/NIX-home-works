import Question from '../Question/Question.js';
import Game from '../../Game/Game.js';

let childrens = prepareChildrens(Game.questions);

function prepareChildrens(questionsData){
  let childrens = [];

  questionsData.forEach((dataItem) => {
    let question = new Question({
      questionText: dataItem.question,
      answers: dataItem.answers,
      correctAnswer: dataItem.correctAnswer,
    }).buildElement();

    childrens.push(question);
  });

  return childrens;
}

export {childrens};