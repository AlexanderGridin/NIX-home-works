/* -------------------------------- */
/* Задание №1
/* -------------------------------- */
// task1();

function task1(){
  let admin;
  let name;

  name = 'Александр';
  admin = name;

  logTaskResults('Задание №1', admin);
  // alert(admin);
}

/* -------------------------------- */
/* Задание №2
/* -------------------------------- */
// task2();

function task2(){
  let answerToTask2 = 'Буквы в верхнем регистре используются для имён констант, которые "жёстко закодированы" (когда их значение известно до начала выполнения скрипта и записывается непосредственно в код). В отличие от константы BIRTHDAY, константа age является "менее константной", т.к. её значение вычисляется. В связи с этим, её имя должно писаться в нижнем регистре.)';
  logTaskResults('Задание №2', answerToTask2);
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

  logTaskResults('Задание №3', case1, case2, case3);
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

  logTaskResults('Задание №4', case1, case2, case3, case4, case5, case6, case7, case8, case9, case10, case11, case12, case13, case14);
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

  logTaskResults('Задание №5', c, d);
}

/* -------------------------------- */
/* Задание №6
/* -------------------------------- */
// task6();

function task6(){
  let a = 2;

  let x = 1 + (a *= 2);

  logTaskResults('Задание №6', a, x);
}


/* -------------------------------- */
/* TOOLS
/* -------------------------------- */
function logTaskResults(taskTitle, ...results){
  console.group(taskTitle);

  results.forEach((result) => {
    console.log(result);
  });

  console.groupEnd();
}
