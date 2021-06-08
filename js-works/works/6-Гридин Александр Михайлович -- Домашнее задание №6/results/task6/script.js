let root = document.querySelector('#root');
let info = document.querySelector('.info');
let actionButton = document.querySelector('.action');

actionButton.addEventListener('click', startListBuilding);

function startListBuilding(e){
  e.preventDefault();
  e.stopPropagation();

  let list = document.createElement('ul');
  let listItems = [];
  let input = true;

  while
  (
    input !== '' &&
    input !== null
  ){
    input = prompt('Введите элемент списка', '');
    
    if
    (
      input !== '' &&
      input !== null
    ){
      listItems.push(input);
    }
  }

  if(listItems.length > 0){
    listItems.forEach((el) => {
      let li = document.createElement('li');
      li.textContent = el;
      list.append(li);
    });

    root.append(list);
    info.remove();
  }
}

