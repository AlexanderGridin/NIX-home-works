let elem = document.querySelector('#elem');
let button = document.querySelector('#reset-button');

button.addEventListener('click', clear(elem));

function clear(elem){
  return function(e){
    e.preventDefault();
    e.stopPropagation();

    elem.innerHTML = '';
    this.remove();
    elem.innerHTML = '<i>Элемент очищен :)</i>';
  }
}