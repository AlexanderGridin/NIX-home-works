/* -------------------------------- */
/* Задание №1
/* -------------------------------- */
// task1();

function task1(){
  let admin;
  let name;

  name = 'Александр';
  admin = name;

  logTaskResults('Задание №1', false, admin);
  // alert(admin);
}

/* -------------------------------- */
/* Задание №2
/* -------------------------------- */
// task2();

function task2(){
  let answerToTask2 = 'Буквы в верхнем регистре используются для имён констант, которые "жёстко закодированы" (когда их значение известно до начала выполнения скрипта и записывается непосредственно в код). В отличие от константы BIRTHDAY, константа age является "менее константной", т.к. её значение вычисляется. В связи с этим, её имя должно писаться в нижнем регистре.)';
  logTaskResults('Задание №2', false, answerToTask2);
}

/* -------------------------------- */
/* Задание №3
/* -------------------------------- */
// task3();

function task3(){
  let name = 'Alexander';

  let case1 = `hello ${1}`;
  let case2 = `hello ${'name'}`;
  let case3 = `hello ${name}`;

  logTaskResults('Задание №3', false, case1, case2, case3);
}

/* -------------------------------- */
/* Задание №4
/* -------------------------------- */
// task4();

function task4(){
  let case1 = '' + 1 + 0;
  let case2 = '' - 1 + 0;
  let case3 = true + false;
  let case4 = 6 / '3';
  let case5 = '2' * '3';
  let case6 = 4 + 5 + 'px';
  let case7 = '$' + 4 + 5;
  let case8 = '4' - 2;
  let case9 = '4px' - 2;
  let case10 = 7 / 0;
  let case11 = '  -9  ' + 5;
  let case12 = '  -9  ' - 5;
  let case13 = null + 1;
  let case14 = undefined + 1;

  logTaskResults('Задание №4', false, case1, case2, case3, case4, case5, case6, case7, case8, case9, case10, case11, case12, case13, case14);
}

/* -------------------------------- */
/* Задание №5
/* -------------------------------- */
// task5();

function task5(){
  let a = 1;
  let b = 1;

  let c = ++a;
  let d = b++;

  logTaskResults('Задание №5', false, c, d);
}

/* -------------------------------- */
/* Задание №6
/* -------------------------------- */
// task6();

function task6(){
  let a = 2;

  let x = 1 + (a *= 2);

  logTaskResults('Задание №6', false, a, x);
}

/* -------------------------------- */
/* Задание №7
/* -------------------------------- */
// task7();

function task7(){
  let case1 = 5 > 4;
  let case2 = 'ананас' > 'яблоко';
  let case3 = '2' > '12';
  let case4 = undefined == null;
  let case5 = undefined === null;
  let case6 = null == '\n0\n';
  let case7 = null === +'\n0\n';

  logTaskResults('Задание №7', true, case1, case2, case3, case4, case5, case6, case7);
}

/* -------------------------------- */
/* Задание №8
/* -------------------------------- */
// task8();

function task8(){
  let userName = prompt('Введите Ваше имя (результат отобразится в консоли)', '');

  logTaskResults('Задание №8', false, `Ваше имя: ${userName}`);
}

/* -------------------------------- */
/* Задание №9
/* -------------------------------- */
// task9();

function task9(){
  /*
  if('0'){
    alert('Привет');
  }
  */

  let answerToTask9 = 'alert выведется, т.к. строка \"0\" не является пустой, и при приведении к типу Boolean вернет true.';

  logTaskResults('Задание №9', false, answerToTask9);
}

/* -------------------------------- */
/* Задание №10
/* -------------------------------- */
// task10();

function task10(){
  let officialJavscriptName = prompt('Каково \"официальное\" название JavaScript? (результат будет выведен в консоль)', '');
  let result  = '';

  if(officialJavscriptName === null){
    logTaskResults('Задание №10', false, 'Вы отменили ввод текста');
    return;
  }

  if(officialJavscriptName === ''){
    task10();
    return;
  }

  officialJavscriptName = officialJavscriptName.trim().toLowerCase();

  if(officialJavscriptName === 'ecmascript'){
    result = 'Верно';
  } else {
    result = 'Не знаете? ECMAScript!';
  }

  logTaskResults('Задание №10', false, result);
}

/* -------------------------------- */
/* Задание №11
/* -------------------------------- */
// task11();

function task11(){
  let userNumber = prompt('Введите число', '');

  if(userNumber === null){
    logTaskResults('Задание №11', false, 'Вы отменили ввод текста');
    return;
  }

  if(userNumber === ''){
    task11();
    return;
  }

  userNumber = userNumber.trim();
  userNumber = +userNumber;

  if(Number.isNaN(userNumber)){
    task11();
    return;
  }

  if(userNumber == 0){
    logTaskResults('Задание №11', false, 0);
  } else if(userNumber > 0){
    logTaskResults('Задание №11', false, 1);
  } else {
    logTaskResults('Задание №11', false, -1);
  }
}

/* -------------------------------- */
/* Задание №12
/* -------------------------------- */
// task12();

function task12(){
  let a = 2;
  let b = 4;
  let result = (a + b < 4) ? 'Мало' : 'Много';

  logTaskResults('Задание №12', false, result);
}

/* -------------------------------- */
/* Задание № 13
/* -------------------------------- */
// task13();

function task13(){
  let message;

  let login = 'Директор';
  // let login = 'Сотрудник';
  // let login = '';
  // let login = 3243;

  message = login === 'Сотрудник' ? 'Привет':
            login === 'Директор'? 'Здравствуйте':
            login === '' ? 'Нет логина' : '';

  logTaskResults('Задание №13', false, message);
}

/* -------------------------------- */
/* Задание №14
/* -------------------------------- */
// task14();

function task14(){
  let result = null || 2 || undefined;
  let answerToTask14 = 'Возвращенным значением будет число 2, т.к. ИЛИ возвращает либо первый true, либо последний false.';

  logTaskResults('Задание №14', false, `Возвращенное значение: ${result}`, answerToTask14);
}

/* -------------------------------- */
/* Задание №15
/* -------------------------------- */
// task15();

function task15(){
  let result = alert(1) || 2 || alert(3);
  let answerToTask15 = 'Возвращенным значением будет число 2, т.к. alert() после нажатия на кнопку \"Ok\" возвращает undefined.';

  logTaskResults('Задание №15', false, `Возвращенное значение: ${result}`, answerToTask15);
}

/* -------------------------------- */
/* Задание №16
/* -------------------------------- */
// task16();

function task16(){
  let result = 1 && null && 2;
  let answerToTask16 = 'Возвращенным значением будет null, т.к. И возвращает либо первый false, либо последний true.';

  logTaskResults('Задание №16', false, `Возвращенное значение: ${result}`, answerToTask16);
}

/* -------------------------------- */
/* Задание №17
/* -------------------------------- */
// task17();

function task17(){
  let result = alert(1) && alert(2);
  let answerToTask17 = 'Возвращенным значением будет undefined, т.к. alert() после нажатия на кнопку \"Ok\" возвращает undefined.';

  logTaskResults('Задание №17', false, `Возвращенное значение: ${result}`, answerToTask17);
}

/* -------------------------------- */
/* Задание №18
/* -------------------------------- */
// task18();

function task18(){
  let result = null || 2 && 3 || 4;
  let answerToTask18 = 'Возвращенным значением будет число 3. У оператора И больший приоритет, поэтому он выполнится первым и вернет число 3, т.к. возвращает либо первый false, либо последний true. Затем слева на право выполнится оператор ИЛИ и вернет число 3, т.к. ИЛИ возвращает либо первый true, либо последний false.';

  logTaskResults('Задание №18', false, `Возвращенное значение: ${result}`, answerToTask18);
}

/* -------------------------------- */
/* Задание №19
/* -------------------------------- */
// task19();

function task19(){
  let age = 14;

  let successMessage = 'Вам от 14 до 90 лет';
  let failureMessage = 'Вам либо меньше 14, либо больше 90 лет';
  let errorMessage = 'Возраст не может быть отрицательным числом!';
  
  if(age >= 14 && age <= 90){
    logTaskResults('Задание №19', false, successMessage);
  } else if(age < 0){
    logTaskResults('Задание №19', false, errorMessage);
  } else {
    logTaskResults('Задание №19', false, failureMessage);
  }
}

/* -------------------------------- */
/* Задание №20
/* -------------------------------- */
task20();

function task20(){
  let taskTitle = 'Задание №20';
  let age = 16;

  let successMessage = 'Вам либо 14 лет и меньше, либо 90 лет и больше';
  let failureMessage = 'Вам от 15 до 89 лет';
  let errorMessage = 'Возраст не может быть отрицательным числом!';

  // task20_1();
  // task20_2();

  function task20_1(){
    if(!(age > 14) || !(age < 90)){
      logTaskResults(taskTitle, false, successMessage);
    } else if(age < 0){
      logTaskResults(taskTitle, false, errorMessage);
    } else {
      logTaskResults(taskTitle, false, failureMessage);
    }
  }

  function task20_2(){
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
// task21();

function task21(){
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
// task22();

function task22(){
  let taskTitle = 'Задание №22';

  let userLogin = prompt('Введите логин', '');

  if(userLogin === null || userLogin === ''){
    logTaskResults(taskTitle, false, 'Ввод логина отменен.');
    return;
  }

  userLogin = userLogin.trim();

  if(userLogin === 'Админ'){
    let password = prompt('Введите пароль', '');

    if(password === null || password === ''){
      logTaskResults(taskTitle, false, 'Ввод пароля отменен.');
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
// task23();

function task23(){
  let taskTitle = 'Задание №23';

  let browser = 'Brave';

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
// task24();

function task24(){
  let taskTitle = 'Задание №24';
  let a = +prompt('a?', '');

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
// task25();

function task25(){
  let taskTitle = 'Задание №25';
  let number = 5;

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
// task26();

function task26(){
  let taskTitle = 'Задание №26';
  let number = -1;

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
// task27();

function task27(){
  let taskTitle = 'Задание №27';
  let number = -1;

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
// task28();

function task28(){
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
// task29();

function task29(){
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
// task30();

function task30(){
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
/* Задание №31
/* -------------------------------- */
// task31();

function task31(){
  let taskTitle = 'Задание №31';

  let min = -10;
  let max = 10;

  let num1 = getRandomNumber(min, max);
  let num2 = getRandomNumber(min, max);

  if(num1 < num2){
    logTaskResults(taskTitle, false, `Сгенерированные числа: №1: ${num1}, №2: ${num2}`, `Порядковый номер меньшего числа: №1`);
  }

  if(num2 < num1){
    logTaskResults(taskTitle, false, `Сгенерированные числа: №1: ${num1}, №2: ${num2}`, `Порядковый номер меньшего числа: №2`);
  }
}

/* -------------------------------- */
/* Задание №32
/* -------------------------------- */
// task32();

function task32(){
  let taskTitle = 'Задание №32';

  let min = -10;
  let max = 10;

  let num1 = getRandomNumber(min, max);
  let num2 = getRandomNumber(min, max);

  if(num1 > num2){
    logTaskResults(taskTitle, false, `Сгенерированные числа: ${num1}, ${num2}`, `Числа в порядке от большего к меньшему: ${num1}, ${num2}`);
  }

  if(num2 > num1){
    logTaskResults(taskTitle, false, `Сгенерированные числа: ${num1}, ${num2}`, `Числа в порядке от большего к меньшему: ${num2}, ${num1}`);
  }
}

/* -------------------------------- */
/* Задание №33
/* -------------------------------- */
// task33();

function task33(){
  let taskTitle = 'Задание №33';

  let a = 3.14;
  let b = 2.34;
  let defaultsInfo = `Исходные переменные: a: ${a}, b: ${b}`;
  let temp;

  if(a > b){
    temp = b;
    b = a;
    a = temp;
    temp = null;
  }

  logTaskResults(taskTitle, false, 'Решение с использованием временной переменной.', defaultsInfo, `Новые значения переменных: a: ${a}, b: ${b}`);
}

/* -------------------------------- */
/* Задание №33 (Альтернативный вариант)
/* -------------------------------- */
// task33alternate();

function task33alternate(){
  let taskTitle = 'Задание №33 (альтернативный вариант)';

  let a = 3.14;
  let b = 2.34;
  let defaultsInfo = `Исходные переменные: a: ${a}, b: ${b}`;

  if(a > b){
    [b,a] = [a,b];
  }

  logTaskResults(taskTitle, false, 'Решение с использованием деструктурирующего присваивания.', defaultsInfo, `Новые значения переменных: a: ${a}, b: ${b}`);
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
