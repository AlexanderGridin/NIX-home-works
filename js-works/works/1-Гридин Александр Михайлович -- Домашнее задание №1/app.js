/* -------------------------------- */
/* Задание №1
/* -------------------------------- */
function task1(){
  console.clear();

  let taskTitle = 'Задание №1';
  let admin;
  let name;

  name = 'Александр';
  admin = name;

  logTaskResults(taskTitle, false, admin);
}

/* -------------------------------- */
/* Задание №2
/* -------------------------------- */
function task2(){
  console.clear();

  let taskTitle = 'Задание №2';
  let answerToTask2 = 'Буквы в верхнем регистре используются для имён констант, которые "жёстко закодированы" (когда их значение известно до начала выполнения скрипта и записывается непосредственно в код). В отличие от константы BIRTHDAY, константа age является "менее константной", т.к. её значение вычисляется. В связи с этим, её имя должно писаться в нижнем регистре.)';

  logTaskResults(taskTitle, false, answerToTask2);
}

/* -------------------------------- */
/* Задание №3
/* -------------------------------- */
function task3(){
  console.clear();
  
  let taskTitle = 'Задание №3';
  let name = 'Alexander';

  let case1 = `hello ${1}`;
  let case2 = `hello ${'name'}`;
  let case3 = `hello ${name}`;

  logTaskResults(taskTitle, false, case1, case2, case3);
}

/* -------------------------------- */
/* Задание №4
/* -------------------------------- */
function task4(){
  console.clear();

  let taskTitle = 'Задание №4';
  
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

  logTaskResults(taskTitle, false, case1, case2, case3, case4, case5, case6, case7, case8, case9, case10, case11, case12, case13, case14);
}

/* -------------------------------- */
/* Задание №5
/* -------------------------------- */
function task5(){
  console.clear();

  let taskTitle = 'Задание №5';
  let a = 1;
  let b = 1;

  let c = ++a;
  let d = b++;

  logTaskResults(taskTitle, false, `Результат работы префиксной формы: ${c}`, `Результат работы постфиксной формы: ${d}`);
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

  let tasktitle = 'Задание №17';
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
/* Задание №31
/* -------------------------------- */
function task31(){
  console.clear();

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
function task32(){
  console.clear();

  let taskTitle = 'Задание №32';

  let min = -10;
  let max = 10;

  let num1 = getRandomNumber(min, max);
  let num2 = getRandomNumber(min, max);
  let defaultsInfo = `Сгенерированные числа: ${num1}, ${num2}`;

  if(num1 > num2){
    logTaskResults(taskTitle, false, defaultsInfo, `Числа в порядке от большего к меньшему: ${num1}, ${num2}`);
  }

  if(num2 > num1){
    logTaskResults(taskTitle, false, defaultsInfo, `Числа в порядке от большего к меньшему: ${num2}, ${num1}`);
  }

  if(num1 === num2){
    logTaskResults(taskTitle, false, defaultsInfo, `Числа равны`);
  }
}

/* -------------------------------- */
/* Задание №33
/* -------------------------------- */
function task33(){
  console.clear();

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
function task33alternate(){
  console.clear();

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
/* Задание №34
/* -------------------------------- */
function task34(taskCase){
  console.clear();

  let taskTitle = 'Задание №34';

  let minOfRange = -10;
  let maxOfRange = 10;

  let a;
  let b;

  switch(taskCase){
    case 1:
      a = getRandomNumber(minOfRange, maxOfRange);
      b = getRandomNumber(minOfRange, maxOfRange);
      break;
    
    case 2:
    a = b = 10;
    break;
  }

  let defaultsInfo = `Исходные переменные: a: ${a}, b: ${b}`;

  if(a !== b){
    let sum = a + b;
    a = b = sum;
    logTaskResults(taskTitle, false, defaultsInfo, `Новые значения переменных: a: ${a}, b: ${b}`);

    return;
  }else {
    a = b = 0;
    logTaskResults(taskTitle, false, defaultsInfo, `Новые значения переменных: a: ${a}, b: ${b}`);
    return;
  }
}

/* -------------------------------- */
/* Задание №35
/* -------------------------------- */
function task35(taskCase){
  console.clear();

  let taskTitle = 'Задание №35';

  let minOfRange = -10;
  let maxOfRange = 10;

  let a;
  let b;

  switch(taskCase){
    case 1:
      a = getRandomNumber(minOfRange, maxOfRange);
      b = getRandomNumber(minOfRange, maxOfRange);
      break;

    case 2:
      a = b = 10;
      break;
  }

  let defaultsInfo = `Исходные переменные: a: ${a}, b: ${b}`;

  if(a !== b){
    a = b = (a > b) ? a : b;
    logTaskResults(taskTitle, false, defaultsInfo, `Новые значения переменных: a: ${a}, b: ${b}`);
    return;
  } else {
    a = b = 0;
    logTaskResults(taskTitle, false, defaultsInfo, `Новые значения переменных: a: ${a}, b: ${b}`);
    return;
  }
}

/* -------------------------------- */
/* Задание №36
/* -------------------------------- */
function task36(){
  console.clear();

  let taskTitle = 'Задание №36';

  let minOfRange = -10;
  let maxOfRange = 10;

  let num1 = getRandomNumber(minOfRange, maxOfRange);
  let num2 = getRandomNumber(minOfRange, maxOfRange);
  let num3 = getRandomNumber(minOfRange, maxOfRange);
  let min;

  let defaultsInfo = `Сгенерированные переменные: ${num1}, ${num2}, ${num3}`;

  if(num1 <= num2){
    min = num1;
  } else {
    min = num2;
  }

  if(min > num3){
    min = num3;
  }

  logTaskResults(taskTitle, false, defaultsInfo, `Наименьшее из трёх чисел: ${min}`);
}

/* -------------------------------- */
/* Задание №37
/* -------------------------------- */
function task37(){
  console.clear();

  let taskTitle = 'Задание №37';

  let minOfRange = -10;
  let maxOfRange = 10;

  let num1 = getRandomNumber(minOfRange, maxOfRange);
  let num2 = getRandomNumber(minOfRange, maxOfRange);
  let num3 = getRandomNumber(minOfRange, maxOfRange);
  let tmp;

  let defaultsInfo = `Сгенерированные переменные: ${num1}, ${num2}, ${num3}`;
  let sortedInfo;

  if(num1 > num2){
    tmp = num1;
    num1 = num2;
    num2 = tmp;
    tpm = null;
  }

  if(num1 > num3){
    tpm = num1;
    num1 = num3;
    num3 = tpm;
    tpm = null;
  }

  if(num2 > num3){
    tpm = num2;
    num2 = num3;
    num3 = tpm;
    tpm = null;
  }

  sortedInfo = `Отсортированные переменные: ${num1}, ${num2}, ${num3}`;

  logTaskResults(taskTitle, false, defaultsInfo, sortedInfo, `Среднее из трёх чисел: ${num2}`);
}

/* -------------------------------- */
/* Задание №38
/* -------------------------------- */
function task38(){
  console.clear();

  let taskTitle = 'Задание №38';

  let minOfRange = -10;
  let maxOfRange = 10;

  let num1 = getRandomNumber(minOfRange, maxOfRange);
  let num2 = getRandomNumber(minOfRange, maxOfRange);
  let num3 = getRandomNumber(minOfRange, maxOfRange);
  let tmp;

  let defaultsInfo = `Сгенерированные переменные: ${num1}, ${num2}, ${num3}`;
  let sortedInfo;

  if(num1 > num2){
    tmp = num1;
    num1 = num2;
    num2 = tmp;
    tpm = null;
  }

  if(num1 > num3){
    tpm = num1;
    num1 = num3;
    num3 = tpm;
    tpm = null;
  }

  if(num2 > num3){
    tpm = num2;
    num2 = num3;
    num3 = tpm;
    tpm = null;
  }

  sortedInfo = `Отсортированные переменные: ${num1}, ${num2}, ${num3}`;

  logTaskResults(taskTitle, false, defaultsInfo, sortedInfo, `Наименьшее из трёх чисел: ${num1}. Наибольшее из трёх чисел: ${num3}`);
}

/* -------------------------------- */
/* Задание №39
/* -------------------------------- */
function task39(){
  console.clear();

  let taskTitle = 'Задание №39';

  let minOfRange = -10;
  let maxOfRange = 10;

  let num1 = getRandomNumber(minOfRange, maxOfRange);
  let num2 = getRandomNumber(minOfRange, maxOfRange);
  let num3 = getRandomNumber(minOfRange, maxOfRange);
  let tmp;
  let summOfTwoBiggestNumbers;

  let defaultsInfo = `Сгенерированные переменные: ${num1}, ${num2}, ${num3}`;
  let sortedInfo;

  if(num1 > num2){
    tmp = num1;
    num1 = num2;
    num2 = tmp;
    tpm = null;
  }

  if(num1 > num3){
    tpm = num1;
    num1 = num3;
    num3 = tpm;
    tpm = null;
  }

  if(num2 > num3){
    tpm = num2;
    num2 = num3;
    num3 = tpm;
    tpm = null;
  }

  sortedInfo = `Отсортированные переменные: ${num1}, ${num2}, ${num3}`;
  summOfTwoBiggestNumbers = num2 + num3;

  logTaskResults(taskTitle, false, defaultsInfo, sortedInfo, `Сумма двух наибольших чисел: ${summOfTwoBiggestNumbers}`);
}

/* -------------------------------- */
/* Задание №40
/* -------------------------------- */
function task40(taskCase){
  console.clear();

  let taskTitle = 'Задание №40';

  let num1;
  let num2;
  let num3;

  switch(taskCase){
    case 1:
      num1 = 1;
      num2 = 0;
      num3 = 0;
      break;

    case 2:
      num1 = 0;
      num2 = 1;
      num3 = 0;
      break;

    case 3:
      num1 = 0;
      num2 = 0;
      num3 = 1;
      break;
  }

  let defaultsInfo = `Переменные: ${num1}, ${num2}, ${num3}`;
  let uniqueNumPosition;

  if(num2 !== num1 && num2 !== num3){
    uniqueNumPosition = 2;
    logTaskResults(taskTitle, false, defaultsInfo, `Позиция уникального числа: ${uniqueNumPosition}`);
    return;
  }

  if(num2 !== num1){
    uniqueNumPosition = 1;
    logTaskResults(taskTitle, false, defaultsInfo, `Позиция уникального числа: ${uniqueNumPosition}`);
    return;
  } else {
    uniqueNumPosition = 3;
    logTaskResults(taskTitle, false, defaultsInfo, `Позиция уникального числа: ${uniqueNumPosition}`);
    return;
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
