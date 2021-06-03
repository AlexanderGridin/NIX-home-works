/* -------------------------------- */
/* Задание №1
/* -------------------------------- */
function task1(){
  console.clear();

  let taskTitle = 'Задание №1';
  
  let fruits = ['Яблоки', 'Груша', 'Апельсин'];
  let shoppingCart = fruits;

  shoppingCart.push('Банан');

  let resultMessage = `Массивы в JS являются специализированной формой объекта. Объекты в JS относятся к ссылочному типу данных. По этому, при выполнении\n\tlet shoppingCard = fruits;\nпеременной shoppingCart присваивается ссылка на объект, на который ссылается и переменная fruits. Т.к. обе переменные ссылаются на один и тот же объект, изменения отобразятся в обеих переменных.`;
  logTaskResults(taskTitle, false, resultMessage, `Длина массива fruits: ${fruits.length}`, `Массив fruits: ${fruits}`, `Массив shoppingCart: ${shoppingCart}`);
}

/* -------------------------------- */
/* Задание №2
/* -------------------------------- */
Array.prototype.replaceMiddleElement = function(newElement){
  if(this.length % 2 === 0){
    console.error('Данный массив состоит из четного количества элементов.');
    return;
  }

  let middlePosition = (this.length - 1) / 2;
  this[middlePosition] = newElement;

  return this;
};

function task2(){
  console.clear();

  let taskTitle = 'Задание №2';
  let resultMessage = '';

  let styles = ['Джаз', 'Блюз'];
  resultMessage += `Создан массив styles: \n\t${styles}.\n\n`;

  styles.push('Рок-н-ролл');
  resultMessage += `"Рок-н-ролл" добавлен в конец массива styles: \n\t${styles}.\n\n`;

  styles.replaceMiddleElement('Классика'); 
  resultMessage += `Значение в середине массива заменено на "Классика": \n\t${styles}.\n\n`;

  let firstElementOfArray = styles.shift();
  resultMessage += `Удален первый элемент массива.\n\tЭлемент: "${firstElementOfArray}". \n\tМассив: ${styles}.\n\n`;

  styles.unshift('Рэп', 'Регги');
  resultMessage += `В начало массива вставлены 2 элемента "Рэп" и "Регги": \n\t${styles}.\n`;

  logTaskResults(taskTitle, false, resultMessage);
}

/* -------------------------------- */
/* Задание №3
/* -------------------------------- */
function task3(){
  console.clear();
  
  let taskTitle = 'Задание №3';

  let arr = ['a', 'b'];

  arr.push(function(){
    return this;
  });

  let resultMessage = `Результатом arr[2](); будет сам массив:\n\t${arr[2]()}\n\nЭто произошло потому, что Массивы в JS являются специализированной формой объекта, а индексы массивов в действительности являются именами свойств, которые оказались целыми числами. Т.о. получается, что наша анонимная функция стала методом массива(объекта) arr. this метода объекта ссылается на сам объект.`;

  logTaskResults(taskTitle, false, resultMessage);
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
