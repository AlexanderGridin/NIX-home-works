import ReVue from '../../ReVue/ReVue.js';
import ReVueComponent from '../../ReVue/ReVueComponent.js';
import ButtonSecondary from '../ButtonSecondary/ButtonSecondary.js';
import Game from '../../Game/Game.js';

let childrens = prepareChildrens();

function prepareChildrens(){
  let halfAnswersButton = new ButtonSecondary()
    .addClassNames('half-of-answers')
    .addAttributes({
      textContent: '50/50',
    });

    halfAnswersButton.setEventListeners({
      click: getHalfOfAnswers(halfAnswersButton),
    })
    .buildElement();

  let callFriendButton = new ButtonSecondary()
    .addClassNames('call-friend')
    .addAttributes({
      textContent: 'Звонок другу',
    });

    callFriendButton.setEventListeners({
      click: callFriend(callFriendButton),
    })
    .buildElement();

  return [
    halfAnswersButton,
    callFriendButton,
  ];
}

function getHalfOfAnswers(halfAnswersButton){
  return function(e){
    e.preventDefault();
    e.stopPropagation();

    if(Game.helprers.halfOfAnswers){
      let questionsList = ReVue.getComponentByName('MillionaireQuestionsList');
      let currentQuestionFromData = Game.questions[Game.currentQuestionIndex];
      let currentQuestionFromGame = questionsList.childrens[Game.currentQuestionIndex];
      let answersList = currentQuestionFromGame.childrens[1].childrens;
      
      let secondAnswerToStayIndex = Game.getRandomInteger(0, currentQuestionFromData.answers.length - 1);
      
      while(secondAnswerToStayIndex === currentQuestionFromData.correctAnswer){
        secondAnswerToStayIndex = Game.getRandomInteger(0, currentQuestionFromData.answers.length - 1);
      }

      answersList.forEach((answerLi) => {
        if
        (
          answerLi.childrens[0].value !== currentQuestionFromData.correctAnswer &&
          answerLi.childrens[0].value !== secondAnswerToStayIndex
        ){
          answerLi.element.classList.add('visually-hidden');
        }
      });

      Game.helprers.halfOfAnswers = false;
      halfAnswersButton.element.setAttribute('disabled', 'true');
      halfAnswersButton.element.classList.add('button--disabled');
    }
  }
}

function callFriend(callFriendButton){
  console.log('call-friend');

  return function(e){
    e.preventDefault();
    e.stopPropagation();

    if(Game.helprers.callFriend){
      let currentQuestionFromData = Game.questions[Game.currentQuestionIndex];

      let friendModal = ReVue.getComponentByName('FriendModal');
      let friendMessage = friendModal.childrens[0].childrens[1];

      if(Game.currentQuestionIndex < Game.questions.length / 3){
        friendMessage.element.innerHTML = `Очень странно, что ты решил позвонить мне на данном этапе викторины....очевидно же, что правильный ответ: <br /><strong>${currentQuestionFromData.answers[currentQuestionFromData.correctAnswer]}</strong>`;
      } else {
        let friendAnswerIndex = Game.getRandomInteger(0, currentQuestionFromData.answers.length - 1);
        let friendAnswer = currentQuestionFromData.answers[friendAnswerIndex];

        friendMessage.element.innerHTML = `Хм....мне кажется, что правильный ответ <br /><strong>${friendAnswer}</strong><br />но это не точно... <br /><i>(возможно, после такого ответа у Вас больше не будет лучшего друга...)</i>`;
      }

      friendModal.element.classList.remove('hidden');
      
      Game.helprers.callFriend = false;
      callFriendButton.element.setAttribute('disabled', 'true');
      callFriendButton.element.classList.add('button--disabled');
    }
  }
}

export {childrens};