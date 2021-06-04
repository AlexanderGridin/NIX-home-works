/* -------------------------------- */
/* Задание №1
/* -------------------------------- */
function task1(taskCase){
  console.clear();

  let taskTitle = 'Задание №1';
  let resultMessage;
  
  let obj;

  switch(taskCase){
    case 1:
      obj = {
        name: 'Alexander',
        surname: 'Gridin'
      };
      break;

    case 2:
      obj = {};
      break;

    default:
      obj = {
        name: 'name'
      };
  }

  if(isEmpty(obj)){
    resultMessage = `У объекта нет свойств.`;
  } else {
    resultMessage = `У объекта есть свойства.`;
  }

  logTaskResults(taskTitle, false, resultMessage, obj);

  // Functions
  function isEmpty(obj){
    for(let propName in obj){
      if(obj.hasOwnProperty(propName)){
        return false;
      }
    }

    return true;
  }
}

/* -------------------------------- */
/* Задание №2
/* -------------------------------- */
function task2(){
  console.clear();

  let taskTitle = 'Задание №2';

  let obj = {
    name: 'Alexander',
    age: 28,
    surname: 'Gridin',
    hands: 2,
    brother: 1,
    whife: 'Kseniya',
  };

  let initMessage = `Изначальный объект ${JSON.stringify(obj)}`;

  multiplyNumeric(obj);

  let resultMessage = `Измененный объект ${JSON.stringify(obj)}`;

  logTaskResults(taskTitle, false, initMessage, resultMessage);

  // Functions
  function multiplyNumeric(obj){
    for(let propName in obj){
      if(typeof obj[propName] === 'number'){
        obj[propName] *= 2;
      }
    }
  }
}

/* -------------------------------- */
/* Задание №3
/* -------------------------------- */
function task3(){
  console.clear();
  
  let taskTitle = 'Задание №3';

  let userNumber = readNumber();

  if(userNumber){
    logTaskResults(taskTitle, false, `Ваше число: ${userNumber}`);
    return;
  }

  logTaskResults(taskTitle, false, `Что-то пошло не так...`);

  // Functions
  function readNumber(){
    let number = 0;

    while(!number && number !== null && number !== ''){
      number = prompt('Введите число', '');
    }

    if(number){
      number = +number;

      if(!isNaN(number)){
        return number;
      }
    }
  }
}

/* -------------------------------- */
/* Задание №4
/* -------------------------------- */
function task4(){
  console.clear();

  let taskTitle = 'Задание №4';

  logTaskResults(taskTitle, false,`Случайное число в от 3 до 7: ${random(3, 7)}`);

  // Functions
  function random(min, max){
    return Math.random() * (max - min) + min;
  }
}

/* -------------------------------- */
/* Задание №5
/* -------------------------------- */
function task5(){
  console.clear();

  let taskTitle = 'Задание №5';

  logTaskResults(taskTitle, false, `Случайное целое число от 1 до 5 (числа появляются с равной вероятностью): ${randomInteger(1, 5)}`)

  // Functions
  function randomInteger(min, max){
    return Math.floor(Math.random() * (max + 1 - min) + min);
  }
}

/* -------------------------------- */
/* Задание №6
/* -------------------------------- */
function task6(){
  console.clear();

  let taskTitle = 'Задание №6';

  let str = 'javaScript';

  logTaskResults(taskTitle, false, `Исходная строка: ${str}.\nОбработанная строка: ${ucFirst(str)}`);

  // Functions
  function ucFirst(str){
    let newStr = '';

    for(let i = 0; i < str.length; i++){
      let symbol = str[i];

      if(i === 0){
        newStr += symbol.toUpperCase();
        continue;
      }

      newStr += symbol;
    }

    return newStr;
  }
}

/* -------------------------------- */
/* Задание №7
/* -------------------------------- */
function task7(){
  console.clear();

  let taskTitle = 'Задание №7';

  let str1 = 'buy ViAgRA now';
  let str2 = 'free xxxxx';
  let str3 = 'innocent rabbit';

  logTaskResults(taskTitle, false, `Результаты работы функции checkSpam:\n\tСтрока "${str1}" => ${checkSpam(str1)}\n\tСтрока ${str2} => ${checkSpam(str2)}\n\tСтрока ${str3} => ${checkSpam(str3)}`);

  // Function
  function checkSpam(str){
    let spamWords = ['xxx', 'viagra'];
    str = str.toLowerCase();

    for(let i = 0; i < spamWords.length; i++){
      let spamWord = spamWords[i];

      if(str.includes(spamWord)){
        return true;
      }
    }

    return false;
  }
}

/* -------------------------------- */
/* Задание №8
/* -------------------------------- */
function task8(){
  console.clear();

  let taskTitle = 'Задание №8';

  let str = 'Lorem, ipsum dolor';
  let strMaxLength = 12;
  let truncatedStr = truncate(str, strMaxLength);

  logTaskResults(taskTitle, false, `Изначальная строка: ${str}.\nДлина изначальной строки: ${str.length}\n\nМаксимальная длина строки после обрезки: ${strMaxLength}\n\nОбработанная строка: ${truncatedStr}\nДлина обработанной строки: ${truncatedStr.length}`);

  // Functions
  function truncate(str, maxLength){
    if(str.length > maxLength){
      return str.slice(0, maxLength - 3) + '...';
    }

    return str;
  }
}

/* -------------------------------- */
/* Задание №9
/* -------------------------------- */
function task9(){
  console.clear();

  let taskTitle = 'Задание №9';

  let str1 = '$120';
  let str2 = '$120.50';

  logTaskResults(taskTitle, false, `Строка с целым числом: ${str1}\n\tВыделенное число: ${extractCurrencyValue(str1)}\n\nСтрока с дробным числом: ${str2}\n\tВыделенное число: ${extractCurrencyValue(str2)}`);

  // Functions
  function extractCurrencyValue(str){
    return +str.match(/[\d.]/g).join('');
  }
}

/* -------------------------------- */
/* Задание №10
/* -------------------------------- */
function task10(){
  console.clear();

  let taskTitle = 'Задание №10';

  let sum = sumInput();

  logTaskResults(taskTitle, false, `Введенные числа: ${sum.numbers}\n\tИх сумма: ${sum.value}`);
  
  // Functions
  function sumInput(){
    let numbers = [];
    let userInput = true;
    let sum = 0;

    while(
      userInput && 
      userInput !== null && 
      userInput !== '' &&
      !isNaN(+userInput)
    ){
      userInput = prompt('Введите число', '');

      if(
        userInput !== null && 
        userInput !== '' &&
        !isNaN(+userInput)
      ){
        numbers.push(+userInput);
      }
    }

    if(numbers.length > 0){
      for(let i = 0; i < numbers.length; i++){
        let number = numbers[i];
        sum +=number;
      }

      console.log(numbers);
      return {
        numbers,
        value: sum
      };
    }
  }
}

/* -------------------------------- */
/* Задание №11
/* -------------------------------- */
function task11(){
  console.clear();

  let taskTitle = 'Задание №11';
}

/* -------------------------------- */
/* MAIN
/* -------------------------------- */
initTaskPage();

function initTaskPage(){
  let buttons = document.querySelectorAll('.custom-list button');
  buttons = Array.from(buttons);

  buttons.forEach(function(button){
    button.addEventListener('click', function(e){
      if(!this.classList.contains('visited')){
        this.classList.add('visited');
      }
    });
  });
}

/* -------------------------------- */
/* TOOLS
/* -------------------------------- */
function logTaskResults(taskTitle, separation = false, ...results){
  console.group(taskTitle);

  results.forEach((result, i) => {
    if(i === 0 && separation){
      console.log('----');
    }

    console.log(result);

    if(separation){
      console.log('----');
    }
  });

  console.groupEnd();
}

function getRandomNumber(min, max){
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
