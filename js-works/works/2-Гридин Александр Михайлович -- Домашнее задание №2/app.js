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

  let minOfRange = -10;
  let maxOfRange = 10;
  let point = {
    x: getRandomNumber(minOfRange, maxOfRange),
    y: getRandomNumber(minOfRange, maxOfRange),
  };

  if(point.x === 0 && point.x === point.y){
    point.x = getRandomNumber(minOfRange, maxOfRange);
    point.y = getRandomNumber(minOfRange, maxOfRange);
  }

  let initMessage = `Координаты сгенерированной точки: x:${point.x}; y:${point.y}`;
  let resultMessage;

  let coordinateQuarterOfPoint = getCoordinateQuarterOfPoint(point);

  switch(coordinateQuarterOfPoint){
    case 1:
      resultMessage = 'Точка находится в 1-й координатной четверти';
      logTaskResults(taskTitle, false, initMessage, resultMessage);

      break;

    case 2:
      resultMessage = 'Точка находится во 2-й координатной четверти';
      logTaskResults(taskTitle, false, initMessage, resultMessage);

      break;

    case 3:
      resultMessage = 'Точка находится в 3-й координатной четверти';
      logTaskResults(taskTitle, false, initMessage, resultMessage);

      break;

    case 4:
      resultMessage = 'Точка находится в 4-й координатной четверти';
      logTaskResults(taskTitle, false, initMessage, resultMessage);

      break;

    default:
      resultMessage = 'Был очень маленький шанс, что это произойдет....но все таки точка совпадает с началом координат...';
      logTaskResults(taskTitle, false, initMessage, resultMessage);
  }

  // Functions
  function getCoordinateQuarterOfPoint(point){
    if(point.x > 0 && point.y > 0){
      return 1;
    }

    if(point.x < 0 && point.y > 0){
      return 2;
    }

    if(point.x < 0 && point.y < 0){
      return 3;
    }

    if(point.x > 0 && point.y < 0){
      return 4;
    }

    return 0;
  }
}

/* -------------------------------- */
/* Задание №7
/* -------------------------------- */
function task7(taskCase){
  console.clear();

  let taskTitle = 'Задание №7';
  let square;

  switch(taskCase){
    case 1:
      square = {
        topLeft: {
          x: 1,
          y: 3,
        },

        topRight: {
          x: 4,
          y: 3,
        },

        bottomLeft: {
          x: 1,
          y: 1,
        },

        bottomRight: {
          x: null,
          y: null
        }
      };
      break;

    case 2:
      square = {
        topLeft: {
          x: null,
          y: null,
        },

        topRight: {
          x: 2,
          y: 7,
        },

        bottomLeft: {
          x: -2,
          y: 5,
        },

        bottomRight: {
          x: 2,
          y: 5
        }
      };
      break;

    case 3:
      square = {
        topLeft: {
          x: -7,
          y: 2,
        },

        topRight: {
          x: -2,
          y: 2,
        },

        bottomLeft: {
          x: null,
          y: null,
        },

        bottomRight: {
          x: -2,
          y: -2
        }
      };
      break;

    case 4:
      square = {
        topLeft: {
          x: 0,
          y: -2,
        },

        topRight: {
          x: null,
          y: null,
        },

        bottomLeft: {
          x: 0,
          y: -5,
        },

        bottomRight: {
          x: 5,
          y: -5,
        }
      };
      break;
  }

  console.group(taskTitle);
  console.log('Таблица координат исходного квадрата:');
  console.table(square);

  for(let pointName in square){
    let squarePoint = square[pointName];

    if(!isSetCoordinatesOfPoint(squarePoint)){
      console.log(`Отсутствуют координаты вершины квадара: "${getReadableSquarePointName(pointName)}" (${pointName})`);

      calcSquarePointCoordsByName(pointName, square);

      console.log(`Координаты 4-й вершины: х:${squarePoint.x}; y:${squarePoint.y}`);
      console.log('Таблица координат квадрата с найденными координатами 4-й вершины:');
      console.table(square);
    }
  }

  console.groupEnd();

  // Functions
  function getReadableSquarePointName(name){
    let readableName;

    switch(name){
      case 'topLeft':
        readableName = 'Верхняя левая вершина';
        break;

      case 'topRight':
        readableName = 'Верхняя правая вершина';
        break;

      case 'bottomLeft':
        readableName = 'Нижняя левая вершина';
        break;

      case 'bottomRight':
        readableName = 'Нижняя правая вершина';
        break;
    }

    return readableName;
  }

  function calcSquarePointCoordsByName(name, square){
    switch(name){
      case 'topLeft':
        square.topLeft.x = square.bottomLeft.x;
        square.topLeft.y = square.topRight.y;
        break;

      case 'topRight':
        square.topRight.x = square.bottomRight.x;
        square.topRight.y = square.topLeft.y;
        break;

      case 'bottomLeft':
        square.bottomLeft.x = square.topLeft.x;
        square.bottomLeft.y = square.bottomRight.y;
        break;

      case 'bottomRight':
        square.bottomRight.x = square.topRight.x;
        square.bottomRight.y = square.bottomLeft.y;
        break;
    }
  }

  function isSetCoordinatesOfPoint(point){
    return (typeof point.x === 'number') && (typeof point.y === 'number') ? true : false;
  }
}

/* -------------------------------- */
/* Задание №8
/* -------------------------------- */
function task8(){
  console.clear();

  let taskTitle = 'Задание №8';
  let resultMessage;
  
  let yearNumber = +prompt('Введите номер года', '');

  if(isLeapYear(yearNumber)){
    resultMessage = `Год ${yearNumber} является високостным. Количество дней в году - 366.`;
  } else {
    resultMessage = `Год ${yearNumber} не является високостным. Количество дней в году - 365.`;
  }

  logTaskResults(taskTitle, false, resultMessage);

  // Functions
  function isLeapYear(yearNumber){
    if(yearNumber % 4 === 0){
      if(
        yearNumber % 100 === 0 &&
        yearNumber % 400 !== 0
      ){
        return false;
      }

      return true;
    }
  }
}

/* -------------------------------- */
/* Задание №9
/* -------------------------------- */
function task9(){
  console.clear();

  let taskTitle = 'Задание №9';
  let resultMessage = '';

  let number = +prompt('Введите число', '');

  if(number === 0){
    resultMessage = 'Нулевое число';
    logTaskResults(taskTitle, false, resultMessage);

    return;
  }
  
  resultMessage += (number > 0) ? 'Положительное ' : 'Отрицательное ';
  resultMessage += (number % 2 === 0) ? 'четное ' : 'нечетное ';
  resultMessage += 'число';

  logTaskResults(taskTitle, false, resultMessage);
}

/* -------------------------------- */
/* Задание №10
/* -------------------------------- */
function task10(){
  console.clear();

  let taskTitle = 'Задание №10';
  let resultMessage = '';

  let numberString = prompt('Введите число', '');
  let number = +numberString;
  numberString = String(Math.abs(number));

  if(number === 0){
    resultMessage = 'Нулевое число';
    logTaskResults(taskTitle, false, resultMessage);

    return;
  }

  if(number % 2 === 0){
    resultMessage += 'Четное ';
  } else {
    resultMessage += 'Нечетное ';
  }

  if(numberString.length === 2){
    resultMessage += 'двузначное ';
  } else if(numberString.length === 3){
    resultMessage += 'трехзначное ';
  }

  if(number > 0){
    resultMessage += 'положительное ';
  } else {
    resultMessage += 'отрицательное ';
  }

  resultMessage += 'число';

  logTaskResults(taskTitle, false, resultMessage);
}

/* -------------------------------- */
/* Задание №11
/* -------------------------------- */
function task11(){
  console.clear();

  let taskTitle = 'Задание №11';
  let resultMessage = '';
  let numbersString = '';

  resultMessage += `Циклы выведут разные значения, т.к. префиксный и постфиксный инкременты работают по-разному: префиксный инкремент сразу возвращает инкрементированное значение, а постфиксный - нет. `;

  let i = 0;

  while(++i < 5){
    numbersString += `${i} `;
  }

  resultMessage += `Префиксная форма. Выведенные значения: ${numbersString}. `;

  i = 0;
  numbersString = '';

  while(i++ < 5){
    numbersString += `${i} `;
  }

  resultMessage += `Постфиксная форма. Выведенные значения: ${numbersString}.`;
  
  logTaskResults(taskTitle, false, resultMessage);
}

/* -------------------------------- */
/* Задание №12
/* -------------------------------- */
function task12(){
  console.clear()

  let taskTitle = 'Задание №12';
  let resultMessage = '';
  let numbersString = '';

  resultMessage += `Циклы выведут одинаковые значения, т.к. цикл for сначала проверяет условие, затем выполняет тело цикла, затем изменяет счетчик. `;

  for(let i = 0; i < 5; i++){
    numbersString += `${i} `;
  }

  resultMessage += `Постфиксная форма. Выведенные значения: ${numbersString}. `;

  numbersString = '';

  for(let i = 0; i < 5; ++i){
    numbersString += `${i} `;
  }

  resultMessage += `Префиксная форма. Выведенные значения: ${numbersString}.`;
  
  logTaskResults(taskTitle, false, resultMessage);
}

/* -------------------------------- */
/* Задание № 13
/* -------------------------------- */
function task13(){
  console.clear();

  let taskTitle = 'Задание №13';
  let resultMessage;
  let evenNumbersString = '';

  for(let i = 2; i <= 10; i++){
    if(i % 2 === 0){
      evenNumbersString += `${i} `;
    }
  }

  resultMessage = `Четные числа: ${evenNumbersString}`;
  logTaskResults(taskTitle, false, resultMessage);
}

/* -------------------------------- */
/* Задание №14
/* -------------------------------- */
function task14(){
  console.clear();

  let taskTitle = 'Задание №14';
  let initMessage = 'Результат работы цикла for: ';
  let resultMessage = 'Результат работы цикла while: ';

  for(let i = 0; i < 3; i++){
    initMessage += `number ${i}! `;
  }

  let i = 0;

  while(i < 3){
    resultMessage += `number ${i}! `;
    i++;
  }

  logTaskResults(taskTitle, false, initMessage, resultMessage);
}

/* -------------------------------- */
/* Задание №15
/* -------------------------------- */
function task15(){
  console.clear();

  let taskTitle = 'Задание №15';
  
  let number = 0;
  let userInput;

  while(number <= 100 && userInput !== null){
    userInput = prompt('Введите число больше 100', '');
    number = +userInput;
  }

  if(userInput === null){
    logTaskResults(taskTitle, false, `Вы отменили ввод числа.`);
  }

  if(number > 100){
    logTaskResults(taskTitle, false, `Ваше число: ${number} и оно больше 100.`);
  }
}

/* -------------------------------- */
/* Задание №16
/* -------------------------------- */
function task16(){
  console.clear();

  let taskTitle = 'Задание №16';
  
  let primeNumbers = getPrimeNumbers(10);

  logTaskResults(taskTitle, false, `Простые числа: ${primeNumbers}`);

  // Functions
  function getPrimeNumbers(maxOfRange){
    let primeNumbers = '';

    for(let i = 2; i <= maxOfRange; i++){
      let zeroRemainderDivisionsCounter = 0;

      for(let j = 2; j <= maxOfRange; j++){
        if(j === i){
          continue;
        }

        if(i % j === 0){
          zeroRemainderDivisionsCounter++;
        }
      }

      if(zeroRemainderDivisionsCounter === 0){
        primeNumbers += `${i} `;
      }
    }

    return primeNumbers;
  }
}

/* -------------------------------- */
/* Задание №17
/* -------------------------------- */
function task17(){
  console.clear();

  let taskTitle = 'Задание №17';

  let num1 = +prompt('Введите первое число', '');
  let num2 = +prompt('Введите второе число', '');

  let average = (num1 + num2) / 2;
  

  logTaskResults(taskTitle, false, `Среднее арифметическое чисел ${num1} и ${num2} равно ${average}`);
}

/* -------------------------------- */
/* Задание №18
/* -------------------------------- */
function task18(){
  console.clear();

  let taskTitle = 'Задание №18';

  let number = +prompt('Введите число', '');
  let square = number * number;

  logTaskResults(taskTitle, false, `Квадрат Вашего числа ${number} составляет ${square}`);
}

/* -------------------------------- */
/* Задание №19
/* -------------------------------- */
function task19(){
  console.clear();

  let taskTitle = 'Задание №19';
  
  let num1 = +prompt('Введите первое число', '');
  let num2 = +prompt('Введите второе число', '');
  let num3 = +prompt('Введите третье число', '');

  let initMessage = `Введенные числа: ${num1} ${num2} ${num3}`;
  let resultMessage = '';

  let min;
  let max;

  if(num1 < num2 && num1 < num3){
    min = num1;
  } else if(num2 < num3){
    min = num2;
  } else {
    min = num3;
  }

  if(num1 > num2 && num1 > num3){
    max = num1;
  } else if(num2 > num3){
    max = num2;
  } else {
    max = num3;
  }

  let dif = max - min;

  resultMessage = `Наименьшее из трёх чисел: ${min}. Наибольшее из трёх чисел: ${max}. Разница между большим и меньшим: ${dif}`;

  logTaskResults(taskTitle, false, initMessage, resultMessage);
}

/* -------------------------------- */
/* Задание №20
/* -------------------------------- */
function task20(){
  console.clear();

  let taskTitle = 'Задание №20';
  
  let number = Math.abs(+prompt('Введите число', ''));
  let numberType;

  if(number % 2 === 0){
    numberType = 'четное';
  } else {
    numberType = 'нечетное';
  }

  logTaskResults(taskTitle, false, `Ваше число ${number} ${numberType}`);
}

/* -------------------------------- */
/* Задание №21
/* -------------------------------- */
function task21(){
  console.clear();

  let taskTitle = 'Задание №21';
  
  let number = prompt('Введите число от 1 до 99', '');
  let sumOfNumberItems = 0;

  for(let i = 0; i < number.length; i++){
    let numberItem = +number[i];
    sumOfNumberItems +=numberItem;
  }

  logTaskResults(taskTitle, false, `Ваше число: ${number}. Количество цифр в числе: ${number.length}. Сумма цифр числа: ${sumOfNumberItems}`);

}

/* -------------------------------- */
/* Задание №22
/* -------------------------------- */
function task22(){
  console.clear();

  let taskTitle = 'Задание №22';
  
  const CENTIMETERS_IN_INCHES = 2.54;
  let isInchesToCentimeters = confirm('Вы хотите перевести дюймы в сантиметры?');

  if(isInchesToCentimeters){
    let inches = Math.abs(+prompt('Введите количество дюймов',''));
    let centimeters = inches * CENTIMETERS_IN_INCHES;

    logTaskResults(taskTitle, false, `В ${inches} дюймах ${centimeters} сантиметров.`);
  } else {
    let centimeters = Math.abs(+prompt('Введите количество сантиметров', ''));
    let inches = centimeters / CENTIMETERS_IN_INCHES;
    inches = inches.toFixed(2);

    logTaskResults(taskTitle, false, `В ${centimeters} сантиметрах ${inches} дюймов.`);
  }
}

/* -------------------------------- */
/* Задание №23
/* -------------------------------- */
function task23(){
  console.clear();

  let taskTitle = 'Задание №23';
  
}

/* -------------------------------- */
/* Задание №24
/* -------------------------------- */
function task24(){
  console.clear();

  let taskTitle = 'Задание №24';
  
  let number = Math.abs(+prompt('Введите трёхзначное число', ''));
  let numberInfo = `Ваше число: ${number}. `;
  let numberString = String(number);

  if(number % 2 === 0){
    numberInfo += 'Число четное. ';

    let sumOfDigits = 0;

    for(let i = 0; i < numberString.length; i++){
      let digit = +numberString[i];

      sumOfDigits += digit;
    }

    numberInfo += `Сумма его цифр равна ${sumOfDigits}.`;
    logTaskResults(taskTitle, false, numberInfo);
  } else {
    numberInfo += 'Число нечетное. ';

    let multiplicationOfDigits = 1;

    for(let i = 0; i < numberString.length; i++){
      let digit = +numberString[i];

      multiplicationOfDigits *= digit;
    }

    numberInfo += `Произведение его цифр равно ${multiplicationOfDigits}.`;
    logTaskResults(taskTitle, false, numberInfo);
  }
}

/* -------------------------------- */
/* Задание №25
/* -------------------------------- */
function task25(){
  console.clear();

  let taskTitle = 'Задание №25';
  
  let triangleSideLenght1 = Math.abs(+prompt('Введите длину первой стороны треугольника', ''));
  let triangleSideLenght2 = Math.abs(+prompt('Введите длину второй стороны треугольника', ''));
  let triangleSideLenght3 = Math.abs(+prompt('Введите длину третьей стороны треугольника', ''));

  if(
    (triangleSideLenght1 + triangleSideLenght2) > triangleSideLenght3 &&
    (triangleSideLenght1 + triangleSideLenght3) > triangleSideLenght2 &&
    (triangleSideLenght2 + triangleSideLenght3) > triangleSideLenght1
  ){
    logTaskResults(taskTitle, false, `Введенные длины сторон треугольника: ${triangleSideLenght1} ${triangleSideLenght2} ${triangleSideLenght3} . При таких длинах сторон треугольник может существовать.`);
  } else {
    logTaskResults(taskTitle, false, `Введенные длины сторон треугольника: ${triangleSideLenght1} ${triangleSideLenght2} ${triangleSideLenght3} . При таких длинах сторон треугольник не может существовать.`)
  }
}

/* -------------------------------- */
/* Задание №26
/* -------------------------------- */
function task26(taskCase){
  console.clear();

  let taskTitle = 'Задание №26';

  let minOfRange = -10;
  let maxOfRange = 10;
  
  let point = {
    x: null,
    y: null,
    dstanceToCoordinatesStart: null,
  };

  switch(taskCase){
    case 1:
      point.x = getRandomNumber(minOfRange, maxOfRange);
      point.y = getRandomNumber(minOfRange, maxOfRange);
      break;

    case 2:
      point.x = 4;
      point.y = 9;
      break;
  }

  let initMessage = `Координаты точки: Х:${point.x}, Y:${point.y}`;
  let radius = 10;
  let dstanceToCoordinatesStart = Math.sqrt(point.x * point.x + point.y * point.y);

  if(dstanceToCoordinatesStart < radius){
    logTaskResults(taskTitle, false, initMessage, `Данная точка лежит внутри окружности.`);
  } else {
    logTaskResults(taskTitle, false, initMessage, `Данная точка лежит за пределами окружности.`);
  }
}

/* -------------------------------- */
/* Задание №27
/* -------------------------------- */
function task27(){
  console.clear();

  let taskTitle = 'Задание №27';
  
  console.group(taskTitle);

  let user = {};
  user.name = 'John';
  user.surname = 'Smith';
  console.table(user);

  user.name = 'Pete';
  console.table(user);

  delete user.name;
  console.table(user);

  console.groupEnd();
}

/* -------------------------------- */
/* Задание №28
/* -------------------------------- */
function task28(){
  console.clear();

  let taskTitle = 'Задание №28';
  
  console.group(taskTitle);

  const user = {
    name: 'John'
  };
  console.table(user);

  user.name = 'Pete';
  console.table(user);

  console.log('Это работает потому, что переменной user нельзя присвоить другое значение. А изменить свойство объекта - можно.');

  console.groupEnd();
}

/* -------------------------------- */
/* Задание №29
/* -------------------------------- */
function task29(){
  console.clear();

  let taskTitle = 'Задание №29';
  
  let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
  };
  let isEmptySalaries = isEmptyObject(salaries);
  let sum = 0;

  if(!isEmptySalaries){
    for(let teammate in salaries){
      sum += salaries[teammate];
    }
  }

  logTaskResults(taskTitle, false, `Сумма зарплат равна ${sum}`);

  // Functions
  function isEmptyObject(obj){
    for(let i in obj){
      if(obj.hasOwnProperty(i)){
        return false;
      }
    }
    return true;
  }
}

/* -------------------------------- */
/* Задание №30
/* -------------------------------- */
function task30(){
  console.clear();

  let taskTitle = 'Задание №30';

  logTaskResults(taskTitle, false, `Цикл будет бесконечным, из-за хранения чисел в двоичной форме, потери точности при округлении, что ведет к суммированию неточности числа 0.2.`);
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
