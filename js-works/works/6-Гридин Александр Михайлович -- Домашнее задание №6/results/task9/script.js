
let insert = '<li>2</li><li>3</li>';
let actionButton = document.querySelector('.action');

actionButton.addEventListener('click', insertListItems(insert));

function insertListItems(listItemsString){
  let list = document.querySelector('#ul');
  let listItems = list.querySelectorAll('li');

  return function(e){
    e.preventDefault();
    e.stopPropagation();

    for(let i = 0; i < listItems.length; i++){
      let li = listItems[i];

      if(i === 0){
        list.innerHTML = li.outerHTML + listItemsString;
        continue;
      }

      list.innerHTML += li.outerHTML;
    }

    this.remove();
  }
}