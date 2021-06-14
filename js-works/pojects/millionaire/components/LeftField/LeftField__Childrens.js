import QuestionsList from '../QuestionsList/QuestionsList.js';

let childrens = prepareChildrens();

function prepareChildrens(){
  let questionsList = new QuestionsList();

  return [
    questionsList,
  ];
}

export {childrens};