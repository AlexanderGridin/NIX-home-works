import ReVue from '../../ReVue/ReVue.js';
import ReVueComponent from '../../ReVue/ReVueComponent.js';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary.js';
import Game from '../../Game/Game.js';

export default function prepareChildrens(props){
  let questionText = new ReVueComponent().initElement({
    tagName: 'div',
    attributes: {
      classNames: 'millionaire__question-text',
      textContent: props.questionText,
    }
  });

  let answerButtons = [];

  props.answers.forEach((answer, i) => {
    let answerButton = new ButtonPrimary({
      text: answer,
      value: i,
    });
    
    answerButton.value = i;
    answerButton.buildElement();

    let answerLi = new ReVueComponent().initElement({
      tagName: 'li',
      childrens: [answerButton]
    });

    answerButtons.push(answerLi);
  });

  let answers = new ReVueComponent().initElement({
    tagName: 'ol',
    name: 'MillionaireQuestionAnswers',
    attributes: {
      classNames: 'millionaire__question-answers'
    },
    childrens: answerButtons,
  });

  answers.correctAnswer = props.correctAnswer;
  answers.setEventListeners({
    click: handleAnswers(answers),
  })
  .buildElement();

  return [
    questionText,
    answers
  ];
}

function handleAnswers(answers){
  return function(e){
    if(e.target.tagName === 'BUTTON'){
      let answerButton = e.target;
      let answerButtonComponent = ReVue.getComponentByName(answerButton.dataset.name);
      let answersList = answerButtonComponent.parent.parent;
      let question = answersList.parent;
      let questionPrices = ReVue.getComponentByName('QuestionsPrices');
      let playerProfileMoneys = ReVue.getComponentByName('playerEarnedMoneysValue');

      answersList.childrens.forEach((li) => {
        li.childrens[0].element.setAttribute('disabled', 'true');
      });

      if(!question.hasAnswer){
        answerButton.classList.add('warning');
        question.hasAnswer = true;

        setTimeout(() => {
          if(+answerButton.value === Game.questions[Game.currentQuestionIndex].correctAnswer){
            answerButton.classList.add('success');
            Game.currentQuestionIndex++;

            setTimeout(() => {
              questionPrices.childrens.forEach((li) => {
                if(li.element.classList.contains('current')){
                  li.element.classList.remove('current');
                }
              });

              questionPrices.childrens[Game.currentQuestionIndex-1].element.classList.add('current');
              Game.playerCurrentMoneys = questionPrices.childrens[Game.currentQuestionIndex-1].value;
              playerProfileMoneys.element.textContent = `${Game.playerCurrentMoneys}${Game.currency}`;
              if(questionPrices.childrens[Game.currentQuestionIndex-1].constant){
                Game.playerEarnedMoneys = Game.playerCurrentMoneys;
              }
              answerButtonComponent.parent.parent.parent.deleteComponent();

              if(Game.currentQuestionIndex === Game.questions.length){
                let gameWrapper = ReVue.getComponentByName('MillionaireGameWrapper');
                gameWrapper.deleteComponent();

                let winningModal = ReVue.getComponentByName('WinningModal');
                winningModal.element.classList.remove('hidden');
              }
            }, 1500);
          } else {
            answerButton.classList.add('error');
            answerButtonComponent.parent.parent.childrens[Game.questions[Game.currentQuestionIndex].correctAnswer].childrens[0].element.classList.add('success');

            setTimeout(() => {
              let winningModal = ReVue.getComponentByName('WinningModal');
              winningModal.childrens[0].childrens[0].element.innerHTML = `<h2>Игра завершена!</h2><div class="text">Вы выиграли<br /><span class="sum">${Game.playerEarnedMoneys}${Game.currency}</span></div>`;
              winningModal.element.classList.remove('hidden');
            }, 2000);
          }
        }, 1500);
      }
    }
  }
}