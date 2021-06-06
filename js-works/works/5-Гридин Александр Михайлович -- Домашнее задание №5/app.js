/* -------------------------------- */
/* Задание №1
/* -------------------------------- */
function task1(){
  console.clear();

  let taskTitle = 'Задание №1';
  
  let arr = ['HTML', 'JavaScript', 'CSS'];
  let arrCopySorted = copySorted(arr);

  logTaskResults(taskTitle, false, `Исходный массив: ${arr.join(', ')}\nОтсортированный массив: ${arrCopySorted.join(', ')}\nИсходный массив после сортировки: ${arr.join(', ')}`);

  // Functions
  function copySorted(arr){
    let copy = [];

    for(let item of arr){
      copy.push(item);
    }

    copy.sort((a, b) => {
      let aLowerCase = a.toLowerCase();
      let bLowerCase = b.toLowerCase();

      if(aLowerCase < bLowerCase){
        return -1;
      }

      if(aLowerCase > bLowerCase){
        return 1;
      }

      return 0;
    });

    return copy;
  }
}

/* -------------------------------- */
/* Задание №2
/* -------------------------------- */
function task2(){
  console.clear();

  let taskTitle = 'Задание №2';

  let users = [
    {
      name: 'Вася',
      age: 25
    },
    {
      name: 'Петя',
      age: 30
    },
    {
      name: 'Маша',
      age: 28
    },
  ];

  let names = getUserNames(users);

  logTaskResults(taskTitle, false, `Полученный массив имен: [${names.join(', ')}]`);

  // Functions
  function getUserNames(arr){
    let names = arr.reduce((initial, item) => {
      for(let prop in item){
        if(prop === 'name'){
          initial.push(item[prop]);
        }
      }

      return initial;
    }, []);

    return names;
  }
}

/* -------------------------------- */
/* Задание №3
/* -------------------------------- */
function task3(){
  console.clear();
  
  let taskTitle = 'Задание №3';

  let users = [
    {
      name: 'Вася',
      age: 25
    },
    {
      name: 'Петя',
      age: 30
    },
    {
      name: 'Маша',
      age: 29
    },
  ];

  let usersAverageAge = getAverageAge(users);
  
  logTaskResults(taskTitle, false, `Средний возраст пользователей составляет: ${usersAverageAge}`);

  // Functions
  function getAverageAge(arr){
    let averageAge = arr.reduce((initial, item) => {
      return initial += item.age;
    }, 0);

    return averageAge / arr.length;
  }
}

/* -------------------------------- */
/* Задание №4
/* -------------------------------- */
function task4(){
  console.clear();

  let taskTitle = 'Задание №4';

  let strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', ':-O'];

  let uniqueStrings = unique(strings);
  logTaskResults(taskTitle, false, `Исходный массив: ${strings.join(', ')}\n\nУникальные элементы массива: ${uniqueStrings.join(', ')}`);

  // Functions
  function unique(strings){
    let uniqueArr = [];
    let unique = new Set(strings);

    unique.forEach((item) => {
      uniqueArr.push(item);
    });

    return uniqueArr;
  }
}

/* -------------------------------- */
/* Задание №5
/* -------------------------------- */
function task5(){
  console.clear();

  let taskTitle = 'Задание №5';

  let a = +prompt('Введите число a', '');
  let b = +prompt('Введите число b', '');

  let result = sum(a)(b);
  logTaskResults(taskTitle, false, `Сумма ваших числе составляет: ${result}`);

  // Functions
  function sum(a){
    return function(b){
      return a + b;
    }
  }
}

/* -------------------------------- */
/* Задание №6
/* -------------------------------- */
function task6(){
  console.clear();

  let taskTitle = 'Задание №6';

  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  logTaskResults(taskTitle, false, `Исходный массив: ${arr.join(', ')}\n\nРезультат работы ф-ии inBetween(5, 10): ${arr.filter(inBetween(5, 10)).join(', ')}\nРезультат работы ф-ии inArray([1, 7, 10]): ${arr.filter(inArray([1, 7, 10])).join(', ')}`);

  // Functions
  function inBetween(a, b){
    return function(item){
      if(item >= a && item <= b){
        return true;
      }
    }
  }

  function inArray(arr){
    return function(item){
      for(let element of arr){
        if(item === element){
          return true;
        }
      }
    }
  }
}

/* -------------------------------- */
/* Задание №7
/* -------------------------------- */
function task7(){
  console.clear();

  let taskTitle = 'Задание №7';


  let number = +prompt('Введите число', '');

  logTaskResults(taskTitle, false, `Факториал Вашего числа: ${factorial(number)}`);

  // Functions
  function factorial(n){
    if(n === 1){
      return 1;
    }

    return n * factorial(n - 1);
  }
}

/* -------------------------------- */
/* Задание №8
/* -------------------------------- */
function task8(){
  console.clear();

  let taskTitle = 'Задание №8';

  let searchedPosition = +prompt('Введите номер числа Фибоначчи, которое Вы хотите узнать', '');

  console.group(taskTitle);

  console.time('Время работы ф-ии fib()');
  let result = fib(searchedPosition);
  console.timeEnd('Время работы ф-ии fib()');

  console.log(`Номер числа Фибоначчи, которое Вы хотите узнать: ${searchedPosition}`);
  console.log(`Массив с числами Фибоначчи: ${result.fibNums.join(', ')}`);
  console.log(`Ваше число Фибоначчи: ${result.result}`);

  console.groupEnd();

  

  // Functions
  function fib(n){
    let fibNums = generateFib(n);

    return {
      fibNums,
      result: fibNums[n-1]
    };
  }

  function generateFib(n){
    let a = n - 1;
    let b = n - 2;
    let nums = [];

    if(b === 0){
      nums.push(1, 1);
      return nums;
    }

    nums = nums.concat(generateFib(a));
    nums.push(nums[nums.length - 1] + nums[nums.length - 2]);
    return nums;
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
