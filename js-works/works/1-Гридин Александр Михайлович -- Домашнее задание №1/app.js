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
