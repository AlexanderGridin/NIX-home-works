import ReVue from '../../ReVue/ReVue.js';

function handleCalculatorKeyboard(e){
  let calculator = ReVue.getComponentByName('Calculator');

  if(e.target.tagName === 'BUTTON' && e.target.dataset.type === 'numeric'){
    console.log('numeric');
    handleNumericButton(e.target, calculator);
  }

  if(e.target.tagName === 'BUTTON' && e.target.dataset.type === 'action'){
    console.log('action');
    handleActionButton(e.target, calculator);
  }

  if(e.target.tagName === 'BUTTON' && e.target.dataset.type === 'operation'){
    console.log('operation');
    handleOperationButton(e.target, calculator);
  }
}

function handleNumericButton(button, calculator){
  let displayInput = ReVue.getComponentByName('CalculatorDisplayInput');

  if(calculator.status === 'error'){
    return;
  }

  if(+displayInput.element.value === 0 && +button.value === 0){
    return;
  }

  if(calculator.status === 'init' && button.value !== '.'){
    displayInput.element.value = button.value;
    calculator.status = 'number';

    return;
  }

  if(button.value === '.' && +displayInput.element.value % 1 !== 0){
    return;
  }

  if(button.value === '.' && +displayInput.element.value % 1 === 0){
    let dotsInNumber = displayInput.element.value.match(/\./g);

    if(dotsInNumber && dotsInNumber.length > 0){
      return;
    }

    displayInput.element.value += button.value;
    calculator.status = 'number';

    return;
  }

  if(calculator.status === 'operation' || calculator.status === 'result'){
    if(button.value === '.'){
      displayInput.element.value = `0${button.value}`;
      return;
    }

    displayInput.element.value = button.value;
    calculator.status = 'number';
    return;
  }

  displayInput.element.value = displayInput.element.value + button.value;
  calculator.status = 'number';
}

function handleActionButton(button, calculator){
  let displayInput = ReVue.getComponentByName('CalculatorDisplayInput');

  if(button.value === 'c'){
    displayInput.element.value = 0;
    calculator.result = 0;
    calculator.operands = [];
    calculator.status = 'init';

    return;
  }

  if(calculator.status === 'error'){
    return;
  }

  if(button.value === '+-'){
    displayInput.element.value = displayInput.element.value * -1;
  }

  if(button.value === '%'){
    console.log(calculator.operands, calculator.status)
    if(calculator.operands.length === 0){
      return;
    }

    if(calculator.operands.length === 1 && calculator.status === 'number'){
      calculator.operands.push(+displayInput.element.value / 100);
      calculator.result = calculator.handleOperation(...calculator.operands, calculator.currentOperation);
      calculator.operands = [];
      calculator.status = 'result';
      calculator.currentOperation = '';
      displayInput.element.value = calculator.result;
    }
  }

  calculator.status = 'action';
}

function handleOperationButton(button, calculator){
  let displayInput = ReVue.getComponentByName('CalculatorDisplayInput');
  let displayValue = +displayInput.element.value;

  if(calculator.status === 'error'){
    return;
  }

  if(calculator.status === 'operation'){
    calculator.currentOperation = button.value !== '=' ? button.value : calculator.currentOperation;
    return;
  }

  calculator.operands.push(displayValue);
  console.log(calculator.operands, calculator.currentOperation)


  if(calculator.operands.length === 1 && button.value === '='){
    return;
  }

  if(calculator.operands.length === 1 && button.value === '=' && calculator.status === 'action'){
    return;
  }

  if(calculator.operands.length === 2 && button.value === '='){
    console.log(calculator.currentOperation)

    calculator.result = calculator.handleOperation(...calculator.operands, calculator.currentOperation);

    if(!isFinite(calculator.result)){
      calculator.operands = [];
      calculator.status = 'error';
      displayInput.element.value = 'Ошибка';
      calculator.currentOperation = '';

      return;
    }

    calculator.operands = [];
    calculator.status = 'result';
    displayInput.element.value = calculator.result;
    calculator.currentOperation = '';

    return; 
  }

  if(calculator.operands.length === 2){
    calculator.result = calculator.handleOperation(...calculator.operands, calculator.currentOperation);

    if(isFinite(calculator.result)){
      calculator.operands = [calculator.result];
      calculator.status = 'result';
      displayInput.element.value = calculator.result;
    } else {
      calculator.operands = [];
      calculator.status = 'error';
      displayInput.element.value = 'Ошибка';
      calculator.currentOperation = '';

      return;
    }
  }

  calculator.status = 'operation';
  calculator.currentOperation = button.value !== '=' ? button.value : calculator.currentOperation;
}

export {handleCalculatorKeyboard};