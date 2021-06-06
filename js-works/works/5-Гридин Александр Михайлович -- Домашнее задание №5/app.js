/* -------------------------------- */
/* Задание №1
/* -------------------------------- */
function task1(){
  console.clear();

  let taskTitle = 'Задание №1';
  
  let arr = ['HTML', 'JavaScript', 'CSS'];
  let arrCopySorted = copySorted(arr);

  logTaskResults(taskTitle, false, `Исходный массив: ${arr}\nОтсортированный массив: ${arrCopySorted}\nИсходный массив после сортировки: ${arr}`);

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
  logTaskResults(taskTitle, false, `Уникальные элементы массива: ${uniqueStrings.join(', ')}`);

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

  let arr1 = [-1, 2, 3, -9];
  let arr2 = [2, -1, 2, 3, -9];
  let arr3 = [-1, 2, 3, -9, 11];
  let arr4 = [-2, -1, 1, 2];
  let arr5 = [100, -9, 2, -3, 5];
  let arr6 = [1, 2, 3];
  let arr7 = [-1, -2, -3];

  let maxSubSum = getMaxSubSum(arr2);

  logTaskResults(taskTitle, false, `Исходный массив: ${maxSubSum.arr}\nНайденный подмассив: ${maxSubSum.newArr}\nСумма элементов: ${maxSubSum.maxSum}`);

  // Functions
  function getMaxSubSum(arr){
    let maxSum = 0;
    let currentSum = 0;
    let firsItem = arr[0];
    let newArr = [];

    for(let item of arr){
      currentSum += item;
      
      maxSum = Math.max(maxSum, currentSum);

      if(currentSum < 0){
        currentSum = 0;
        continue;
      }

      newArr.push(item);

      if(item >= maxSum){
        newArr = [];
        newArr.push(item);
      }
    }

    if(arr[0] >= maxSum){
      newArr = [];
      newArr.push(firsItem);
    }

    return {
      arr,
      maxSum,
      newArr
    };
  }
}

/* -------------------------------- */
/* Задание №12
/* -------------------------------- */
function task12(){
  console.clear();

  let taskTitle = 'Задание №12';

  logTaskResults(taskTitle, false, `Если убрать else поведение функции никак не изменится, т.к., когда мы доходим до return при выполнении кода ф-ии, осуществляется возврат значения и выход из ф-ии. При этом, код, который находится ниже return выполнен не будет.`);
}

/* -------------------------------- */
/* Задание №13
/* -------------------------------- */
function task13(){
  console.clear();

  let taskTitle = 'Задание №13';
  let resultMessage;

  let age = +prompt('Введите Ваш возраст');

  if(checkAge(age)){
    resultMessage = 'Доступ разрешен!';
  } else {
    resultMessage = 'Родители разрешили?';
  }

  logTaskResults(taskTitle, false, resultMessage);

  // Functions
  function checkAge(age){
    return age > 18 || false;
  }
}

/* -------------------------------- */
/* Задание №14
/* -------------------------------- */
function task14(){
  console.clear();

  let taskTitle = 'Задание №14';

  let a = +prompt('Введите число a');
  let b = +prompt('Введите число b');

  logTaskResults(taskTitle, false, `Число а: ${a}\nЧисло b: ${b}\n\nМеньшее из этих чисел: ${min(a, b)}`);

  // Functions
  function min(a, b){
    return a > b ? b : a;
  }
}

/* -------------------------------- */
/* Задание №15
/* -------------------------------- */
function task15(){
  console.clear();

  let taskTitle = 'Задание №15';

  let values = {
    number: +prompt('Введите число', ''),
    n: +prompt('Введите степень, в которую необходимо возвести Ваше число')
  }

  if(checkValues(values)){
    let x = values.number;
    let n = values.n;

    let result = pow(x, n);
    logTaskResults(taskTitle, false, `Ваше число: ${values.number}\nСтепень, в которую необходимо возвести число: ${values.n}\n\nРезультат возведения числа в степень: ${result}`);
  } else {
    task15();
  }

  // Functions
  function pow(x, n){
    let result = 1;

    for(let i = 0; i < n; i++){
      result *= x;
    }

    return result;
  }
  
  function checkValues(values){
    for(let prop in values){
      let value = values[prop];

      if(
        value <= 0 || 
        isNaN(value) || 
        value % 1 !== 0
      ){
        return false;
      }
    }

    return true;
  }
}

/* -------------------------------- */
/* Задание №16
/* -------------------------------- */
function task16(){
  console.clear();

  let taskTitle = 'Задание №16';

  let ask = (question, yes, no) => confirm(question) ? yes() : no();

  let result = ask(
    'Вы согласны?',
    () => 'Вы согласились',
    () => 'Вы отменили выполнение'
  );

  logTaskResults(taskTitle, false, result);
}

/* -------------------------------- */
/* Задание №17
/* -------------------------------- */
function task17(){
  console.clear();

  let taskTitle = 'Задание №17';

  let monthlyIncome = 3333;
  let monthlyExpenses = 1750;
  let palmTreeCost = 8000;

  let totalMonthsForSavingMoney = Math.ceil(palmTreeCost / (monthlyIncome - monthlyExpenses));

  logTaskResults(taskTitle, false, `Количество месяцев, за которое мы насобираем на пальму: ${totalMonthsForSavingMoney}`);
}

/* -------------------------------- */
/* Задание №18
/* -------------------------------- */
function task18(){
  console.clear();

  let taskTitle = 'Задание №18';

  let sumOfNegativeNumbers = 0;
  let numbersCounter = 0;
  let negativeNumbers = [];
  let numbersList = [];

  while(numbersCounter < 10){
    let number = +prompt(`Введите число №${numbersCounter+1}`, '');

    numbersList.push(number);

    if(number < 0){
      negativeNumbers.push(number);
      sumOfNegativeNumbers += number;
    }

    numbersCounter++;
  }

  logTaskResults(taskTitle, false, `Введенные числа: ${numbersList}\nВведенные отрицательные числа: ${negativeNumbers}\n\nСумма введенных отрицательных чисел: ${sumOfNegativeNumbers}`);
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
