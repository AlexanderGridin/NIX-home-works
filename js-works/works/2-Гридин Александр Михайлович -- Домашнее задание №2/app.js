/* -------------------------------- */
/* Задание №1
/* -------------------------------- */
function task1(){
  console.clear();

  let taskTitle = 'Задание №1';
  let i = 3;
  let comment = 'Последним значением alert(i--) будет 1, т.к. i декрементируется с помощью постфиксной формы записи оператора декремента, которая возвращает значение переменной до её изменения.';

  while(i){
    alert(i--);
  }

  logTaskResults(taskTitle, false, comment);
}

/* -------------------------------- */
/* Задание №2
/* -------------------------------- */
function task2(taskCase = 1){
  console.clear();

  let taskTitle = 'Задание №2';

  let minOfRange = -10;
  let maxOfRange = 10;
  let numbers = {};

  let initMessage;
  let resultMessage;
  let numbersStatus;

  switch(taskCase){
    case 1:
      numbers.a = getRandomNumber(minOfRange, maxOfRange);
      numbers.b = getRandomNumber(minOfRange, maxOfRange);
      numbers.c = getRandomNumber(minOfRange, maxOfRange);
      break;

    case 2:
      numbers.a = 1;
      numbers.b = 2;
      numbers.c = 3;
      break;
  }
  
  initMessage = `Сгенерированные числа: A: ${numbers.a}; B: ${numbers.b}; C: ${numbers.c}`;

  if(
    numbers.a < numbers.b && 
    numbers.a < numbers.c && 
    numbers.b < numbers.c
  ){
    numbersStatus = 'Числа упорядочены по возрастанию. Их значения будут удвоены.';

    for(let prop in numbers){
      numbers[prop] *= 2;
    }
  } else {
    numbersStatus = 'Числа не упорядочены по возрастанию. Их значения будут заменены на противоположные.';

    for(let prop in numbers){
      numbers[prop] = -numbers[prop];
    }
  }

  resultMessage = `Значения после обработки: A: ${numbers.a}; B: ${numbers.b}; C: ${numbers.c}`;

  logTaskResults(taskTitle, false, initMessage, numbersStatus, resultMessage);
}

/* -------------------------------- */
/* Задание №3
/* -------------------------------- */
function task3(taskCase = 1){
  console.clear();
  
  let taskTitle = 'Задание №3';

  let minOfRange = -10;
  let maxOfRange = 10;
  let numbers = {};

  let initMessage;
  let resultMessage;
  let numbersStatus;

  switch(taskCase){
    case 1:
      numbers.a = getRandomNumber(minOfRange, maxOfRange);
      numbers.b = getRandomNumber(minOfRange, maxOfRange);
      numbers.c = getRandomNumber(minOfRange, maxOfRange);
      break;

    case 2:
      numbers.a = 1;
      numbers.b = 2;
      numbers.c = 3;
      break;

    case 3:
      numbers.a = 3;
      numbers.b = 2;
      numbers.c = 1;
      break;
  }

  initMessage = `Сгенерированные числа: A: ${numbers.a}; B: ${numbers.b}; C: ${numbers.c}`;

  if(
    numbers.a < numbers.b && 
    numbers.a < numbers.c && 
    numbers.b < numbers.c
  ){
    numbersStatus = 'Числа упорядочены по возрастанию. Их значения будут удвоены.';

    for(let prop in numbers){
      numbers[prop] *= 2;
    }
  } else if(
    numbers.a > numbers.b && 
    numbers.a > numbers.c && 
    numbers.b > numbers.c
  ){
    numbersStatus = 'Числа упорядочены по убыванию. Их значения будут удвоены.';

    for(let prop in numbers){
      numbers[prop] *= 2;
    }
  } else {
    numbersStatus = 'Числа не упорядочены ни по возрастанию, ни по убыванию. Их значения будут заменены на противоположные.';

    for(let prop in numbers){
      numbers[prop] = -numbers[prop];
    }
  }
  
  resultMessage = `Значения после обработки: A: ${numbers.a}; B: ${numbers.b}; C: ${numbers.c}`;

  logTaskResults(taskTitle, false, initMessage, numbersStatus, resultMessage);
}

/* -------------------------------- */
/* Задание №4
/* -------------------------------- */
function task4(){
  console.clear();

  let taskTitle = 'Задание №4';
  
  let minOfRange = -10;
  let maxOfRange = 10;
  let points = {
    a: getRandomNumber(minOfRange, maxOfRange),
    b: getRandomNumber(minOfRange, maxOfRange),
    c: getRandomNumber(minOfRange, maxOfRange),

    ab: 0,
    ac: 0,
  };

  let initMessage = `Сгенерированные точки: A:${points.a}; B:${points.b}; C:${points.c}`;
  let resultMessage;

  points.ab = Math.abs(points.b - points.a);
  points.ac = Math.abs(points.c - points.a);

  if(points.ab < points.ac){
    resultMessage = `Точка В:${points.b} является ближней к точке А. Расстояние от точки А составляет ${points.ab}`;
  } else if(points.ab > points.ac){
    resultMessage = `Точка C:${points.c} является ближней к точке А. Расстояние от точки А составляет ${points.ac}`;
  } else {
    resultMessage = `Точки B:${points.b} и C:${points.c} равноудалены от точки А. Расстояние от точки А составляет ${points.ab}`;
  }

  logTaskResults(taskTitle, false, initMessage, resultMessage);
}

/* -------------------------------- */
/* Задание №5
/* -------------------------------- */
function task5(taskCase = 1){
  console.clear();

  let taskTitle = 'Задание №5';

  let minOfRange = -10;
  let maxOfRange = 10;
  let point = {
    x: 0,
    y: 0,
  };

  if(taskCase === 2){
    point.x = getRandomNumber(minOfRange, maxOfRange);
    point.y = getRandomNumber(minOfRange, maxOfRange);
  }

  let initMessage = `Координаты сгенерированной точки: x:${point.x}; y:${point.y}`;
  let resultMessage;
  
  if(point.x === 0 && point.x === point.y){
    resultMessage = `0: точка совпадает с началом координат.`;
    logTaskResults(taskTitle, false, initMessage, resultMessage);

    return;
  }

  if(point.y === 0){
    resultMessage = `1: точка находится на оси ОХ.`;
    logTaskResults(taskTitle, false, initMessage, resultMessage);

    return;
  }
  
  if(point.x === 0){
    resultMessage = `2: точка находится на оси ОY.`;
    logTaskResults(taskTitle, false, initMessage, resultMessage);

    return;
  }

  resultMessage = `3: точка не лежит на координатных осях.`;
  logTaskResults(taskTitle, false, initMessage, resultMessage);
}

/* -------------------------------- */
/* Задание №6
/* -------------------------------- */
function task6(){
  console.clear();

  let taskTitle = 'Задание №6';
  let a = 2;
  let x = 1 + (a *= 2);

  logTaskResults(taskTitle, false, `a = ${a}`, `x = ${x}`);
}

/* -------------------------------- */
/* Задание №7
/* -------------------------------- */
function task7(){
  console.clear();

  let taskTitle = 'Задание №7';

  let case1 = 5 > 4;
  let case2 = 'ананас' > 'яблоко';
  let case3 = '2' > '12';
  let case4 = undefined == null;
  let case5 = undefined === null;
  let case6 = null == '\n0\n';
  let case7 = null === +'\n0\n';

  logTaskResults(taskTitle, true, case1, case2, case3, case4, case5, case6, case7);
}

/* -------------------------------- */
/* Задание №8
/* -------------------------------- */
function task8(){
  console.clear();

  let taskTitle = 'Задание №8';
  let userName = prompt('Введите Ваше имя (результат отобразится в консоли)', '');

  if(!userName){
    logTaskResults(taskTitle, false, `Вы не ввели имя`);

    return;
  }

  userName = userName.trim();
  logTaskResults(taskTitle, false, `Ваше имя: ${userName}`);
}

/* -------------------------------- */
/* Задание №9
/* -------------------------------- */
function task9(){
  console.clear();

  let taskTitle = 'Задание №9';
  
  /*
  if('0'){
    alert('Привет');
  }
  */

  let answerToTask9 = 'alert выведется, т.к. строка \"0\" не является пустой, и при приведении к типу Boolean вернет true.';

  logTaskResults(taskTitle, false, answerToTask9);
}

/* -------------------------------- */
/* Задание №10
/* -------------------------------- */
function task10(){
  console.clear();

  let taskTitle = 'Задание №10';
  let officialJavscriptName = prompt('Каково \"официальное\" название JavaScript? (результат будет выведен в консоль)', '');
  let result  = '';

  if(officialJavscriptName === null){
    logTaskResults(taskTitle, false, 'Вы отменили ввод текста');
    return;
  }

  if(officialJavscriptName === ''){
    task10();
    return;
  }

  officialJavscriptName = officialJavscriptName.trim().toLowerCase();

  if(officialJavscriptName === 'ecmascript'){
    result = 'Верно, ECMAScript!';
  } else {
    result = 'Не знаете? ECMAScript!';
  }

  logTaskResults(taskTitle, false, result);
}

/* -------------------------------- */
/* Задание №11
/* -------------------------------- */
function task11(){
  console.clear();

  let taskTitle = 'Задание №11';
  let userNumber = prompt('Введите число', '');

  if(userNumber === null){
    logTaskResults(taskTitle, false, 'Вы отменили ввод текста');
    return;
  }

  if(userNumber === ''){
    task11();
    return;
  }

  userNumber = +userNumber.trim();

  if(Number.isNaN(userNumber)){
    task11();
    return;
  }

  if(userNumber == 0){
    logTaskResults(taskTitle, false, 0);
  } else if(userNumber > 0){
    logTaskResults(taskTitle, false, 1);
  } else {
    logTaskResults(taskTitle, false, -1);
  }
}

/* -------------------------------- */
/* Задание №12
/* -------------------------------- */
function task12(){
  console.clear()

  let taskTitle = 'Задание №12';
  let numbers = prompt('Введите 2 числа, разделенных пробелом, чтобы узнать, их сумма больше нашего загаднного числа, или меньше?', '');

  if(numbers){
    numbers = numbers.trim().split(' ');
  } else {
    logTaskResults(taskTitle, false, 'Что-то пошло не так при вводе чисел...');
    return;
  }

  let[a, b] = numbers;

  a = +a;
  b = +b;

  if(!Number.isNaN(a) && !Number.isNaN(b)){
    let result = (a + b < 4) ? 'Мало' : 'Много';

    logTaskResults(taskTitle, false, result);
  } else {
    logTaskResults(taskTitle, false, 'Извините, но данный пример работает только с числами');
  }
}

/* -------------------------------- */
/* Задание № 13
/* -------------------------------- */
function task13(){
  console.clear();

  let taskTitle = 'Задание №13';
  let message;
  let login = prompt('Введите логин (Доступные логины - "Директор", "Сотрудник")', '');

  if(login){
    login = login.trim();
  }

  message = login === 'Сотрудник' ? 'Привет!':
            login === 'Директор'? 'Здравствуйте!':
            login === '' ? 'Нет логина' : '';

  logTaskResults(taskTitle, false, message);
}

/* -------------------------------- */
/* Задание №14
/* -------------------------------- */
function task14(){
  console.clear();

  let taskTitle = 'Задание №14';
  let result = null || 2 || undefined;
  let answerToTask14 = 'Возвращенным значением будет число 2, т.к. ИЛИ возвращает либо первый true, либо последний false.';

  logTaskResults(taskTitle, false, `Возвращенное значение: ${result}`, answerToTask14);
}

/* -------------------------------- */
/* Задание №15
/* -------------------------------- */
function task15(){
  console.clear();

  let taskTitle = 'Задание №15';
  let result = alert(1) || 2 || alert(3);
  let answerToTask15 = 'Возвращенным значением будет число 2, т.к. alert() после нажатия на кнопку \"Ok\" возвращает undefined.';

  logTaskResults(taskTitle, false, `Возвращенное значение: ${result}`, answerToTask15);
}

/* -------------------------------- */
/* Задание №16
/* -------------------------------- */
function task16(){
  console.clear();

  let taskTitle = 'Задание №16';
  let result = 1 && null && 2;
  let answerToTask16 = 'Возвращенным значением будет null, т.к. И возвращает либо первый false, либо последний true.';

  logTaskResults(taskTitle, false, `Возвращенное значение: ${result}`, answerToTask16);
}

/* -------------------------------- */
/* Задание №17
/* -------------------------------- */
function task17(){
  console.clear();

  let taskTitle = 'Задание №17';
  let result = alert(1) && alert(2);
  let answerToTask17 = 'Возвращенным значением будет undefined, т.к. alert() после нажатия на кнопку \"Ok\" возвращает undefined.';

  logTaskResults(taskTitle, false, `Возвращенное значение: ${result}`, answerToTask17);
}

/* -------------------------------- */
/* Задание №18
/* -------------------------------- */
function task18(){
  console.clear();

  let taskTitle = 'Задание №18';
  let result = null || 2 && 3 || 4;
  let answerToTask18 = 'Возвращенным значением будет число 3. У оператора И больший приоритет, поэтому он выполнится первым и вернет число 3, т.к. возвращает либо первый false, либо последний true. Затем слева на право выполнится оператор ИЛИ и вернет число 3, т.к. ИЛИ возвращает либо первый true, либо последний false.';

  logTaskResults(taskTitle, false, `Возвращенное значение: ${result}`, answerToTask18);
}

/* -------------------------------- */
/* Задание №19
/* -------------------------------- */
function task19(){
  console.clear();

  let taskTitle = 'Задание №19';
  let age = +prompt('Введите Ваш возраст', '');

  if(Number.isNaN(age) || !age){
    logTaskResults(taskTitle, false, 'Извините, но так уж сложилось, что возраст должен быть числом');
    return;
  }

  let successMessage = 'Вам от 14 до 90 лет';
  let failureMessage = 'Вам либо меньше 14, либо больше 90 лет';
  let errorMessage = 'Возраст не может быть отрицательным числом!';
  
  if(age >= 14 && age <= 90){
    logTaskResults(taskTitle, false, successMessage);
  } else if(age < 0){
    logTaskResults(taskTitle, false, errorMessage);
  } else {
    logTaskResults(taskTitle, false, failureMessage);
  }
}

/* -------------------------------- */
/* Задание №20
/* -------------------------------- */
function task20(subtaskNumber){
  console.clear();

  let taskTitle = 'Задание №20';
  let age = +prompt('Введите Ваш возраст', '');

  if(Number.isNaN(age) || !age){
    logTaskResults(taskTitle, false, 'Извините, но так уж сложилось, что возраст должен быть числом');
    return;
  }

  let successMessage = 'Вам либо 14 лет и меньше, либо 90 лет и больше';
  let failureMessage = 'Вам от 15 до 89 лет';
  let errorMessage = 'Возраст не может быть отрицательным числом!';

  if(subtaskNumber === 1){
    if(!(age > 14) || !(age < 90)){
      logTaskResults(taskTitle, false, successMessage);
    } else if(age < 0){
      logTaskResults(taskTitle, false, errorMessage);
    } else {
      logTaskResults(taskTitle, false, failureMessage);
    }
  }

  if(subtaskNumber === 2){
    if(age <= 14 || age >= 90 ){
      logTaskResults(taskTitle, false, successMessage);
    } else if(age < 0){
      logTaskResults(taskTitle, false, errorMessage);
    } else {
      logTaskResults(taskTitle, false, failureMessage);
    }
  }
}

/* -------------------------------- */
/* Задание №21
/* -------------------------------- */
function task21(){
  console.clear();

  let taskTitle = 'Задание №21';
  let answerToTask21 = 'Выведутся все, кроме значения \"second\". Число, независимо от того, положительное оно, или отрицательное, при преобразовании в Boolean возвращает true, если оно не равно нулю. \"third\" выводится, т.к. сначала вычисляется оператор && (его приоритет больше, чем ||), который возвращает true, затем вычисляется оператор ||.';

  let case1 = 'Ничего не вывелось';
  let case2 = 'Ничего не вывелось';
  let case3 = 'Ничего не вывелось';

  if(-1 || 0){
    case1 = 'first';
  }

  if(-1 && 0){
    case2 = 'second';
  }

  if(null || -1 && 1){
    case3 = 'third';
  }

  logTaskResults(taskTitle, false, answerToTask21, case1, case2, case3);
}

/* -------------------------------- */
/* Задание №22
/* -------------------------------- */
function task22(){
  console.clear();

  let taskTitle = 'Задание №22';
  let userLogin = prompt('Введите логин', '');

  if(userLogin === null || userLogin === ''){
    logTaskResults(taskTitle, false, 'Ввод логина отменен или не был выполнен.');
    return;
  }

  userLogin = userLogin.trim();

  if(userLogin === 'Админ'){
    let password = prompt('Введите пароль', '');

    if(password === null || password === ''){
      logTaskResults(taskTitle, false, 'Ввод пароля отменен или не был выполнен.');
      return;
    }

    password = password.trim();

    if(password === 'Я главный'){
      logTaskResults(taskTitle, false, 'Здравствуйте!');
    } else {
      logTaskResults(taskTitle, false, 'Неверный пароль');
    }
  } else {
    logTaskResults(taskTitle, false, 'Я Вас не знаю...');
  }
}

/* -------------------------------- */
/* Задание №23
/* -------------------------------- */
function task23(){
  console.clear();

  let taskTitle = 'Задание №23';
  let browser = prompt('Ввдеите название браузера', '');

  if(browser){
    browser = browser.trim();
  } else {
    logTaskResults(taskTitle, false, 'Что-то пошло не так при вводе названия браузера...');
    return;
  }

  if(browser === 'Edge'){
    logTaskResults(taskTitle, false, 'You\'ve got the Edge!');
  } else if(
    browser === 'Chrome' ||
    browser === 'Firefox' ||
    browser === 'Safari' ||
    browser === 'Opera'
  ){
    logTaskResults(taskTitle, false, 'Okay we support these browsers too');
  } else {
    logTaskResults(taskTitle, false, 'We hope that this page looks ok');
  }
}

/* -------------------------------- */
/* Задание №24
/* -------------------------------- */
function task24(){
  console.clear();

  let taskTitle = 'Задание №24';
  let a = +prompt('a? (Если что, это должно быть число:))', '');

  switch(a){
    case 0:
      logTaskResults(taskTitle, false, 0);
      break;

    case 1:
      logTaskResults(taskTitle, false, 1);
      break;

    case 2:
    case 3:
      logTaskResults(taskTitle, false, '2, 3');
      break;

    default:
      logTaskResults(taskTitle, false, 'Some other numbers');
  }
}

/* -------------------------------- */
/* Задание №25
/* -------------------------------- */
function task25(){
  console.clear();

  let taskTitle = 'Задание №25';
  let number = +prompt('Введите число (можно больше, или меньше нуля)', '');

  if(!number){
    logTaskResults(taskTitle, false, 'Что-то пошло не так при вводе числа...');
    return;
  }

  if(number >= 0){
    number++;
    logTaskResults(taskTitle, false, number);
  } else {
    logTaskResults(taskTitle, false, number);
  }
}

/* -------------------------------- */
/* Задание №26
/* -------------------------------- */
function task26(){
  console.clear();

  let taskTitle = 'Задание №26';
  let number = +prompt('Введите число (можно больше, или меньше нуля)', '');

  if(!number){
    logTaskResults(taskTitle, false, 'Что-то пошло не так при вводе числа...');
    return;
  }

  if(number >= 0){
    number++;
  } else {
    number -= 2;
  }

  logTaskResults(taskTitle, false, number);
}

/* -------------------------------- */
/* Задание №27
/* -------------------------------- */
function task27(){
  console.clear();

  let taskTitle = 'Задание №27';
  let number = +prompt('Введите число (можно больше, или меньше нуля)', '');

  if(!number && number !== 0){
    logTaskResults(taskTitle, false, 'Что-то пошло не так при вводе числа...');
    return;
  }

  if(number === 0){
    number = 10;
  } else if(number > 0){
    number++;
  } else {
    number -= 2;
  }

  logTaskResults(taskTitle, false, number);
}

/* -------------------------------- */
/* Задание №28
/* -------------------------------- */
function task28(){
  console.clear();

  let taskTitle = 'Задание №28';
  let positiveNumbersCounter = 0;

  let min = -10;
  let max = 10;

  let num1 = getRandomNumber(min, max);
  let num2 = getRandomNumber(min, max);
  let num3 = getRandomNumber(min, max);

  if(num1 > 0){
    positiveNumbersCounter++;
  }

  if(num2 > 0){
    positiveNumbersCounter++;
  }

  if(num3 > 0){
    positiveNumbersCounter++;
  }

  logTaskResults(taskTitle, false, `Диапазон генерации чисел: ${min} -- ${max}`, `Сгенерированные числа: ${num1} ${num2} ${num3}`, `Количество положительных чисел: ${positiveNumbersCounter}`);
}

/* -------------------------------- */
/* Задание №29
/* -------------------------------- */
function task29(){
  console.clear();

  let taskTitle = 'Задание №29';
  let positiveNumbersCounter = 0;
  let negativeNumbersCounter = 0;

  let min = -10;
  let max = 10;

  let num1 = getRandomNumber(min, max);
  let num2 = getRandomNumber(min, max);
  let num3 = getRandomNumber(min, max);

  if(num1 > 0){
    positiveNumbersCounter++;
  }

  if(num1 < 0){
    negativeNumbersCounter++;
  }

  if(num2 > 0){
    positiveNumbersCounter++;
  }

  if(num2 < 0){
    negativeNumbersCounter++;
  }

  if(num3 > 0){
    positiveNumbersCounter++;
  }

  if(num3 < 0){
    negativeNumbersCounter++;
  }

  logTaskResults(taskTitle, false, `Диапазон генерации чисел: ${min} -- ${max}`, `Сгенерированные числа: ${num1} ${num2} ${num3}`, `Количество положительных чисел: ${positiveNumbersCounter}`, `Количество отрицательных чисел: ${negativeNumbersCounter}`);
}

/* -------------------------------- */
/* Задание №30
/* -------------------------------- */
function task30(){
  console.clear();

  let taskTitle = 'Задание №30';

  let min = -10;
  let max = 10;

  let num1 = getRandomNumber(min, max);
  let num2 = getRandomNumber(min, max);

  if(num1 > num2){
    logTaskResults(taskTitle, false, `Сгенерированные числа: ${num1}, ${num2}`, `Большее из двух чисел: ${num1}`);
  }

  if(num2 > num1){
    logTaskResults(taskTitle, false, `Сгенерированные числа: ${num1}, ${num2}`, `Большее из двух чисел: ${num2}`);
  }
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
