let rootList = document.querySelector('.task ul');

parseChildrens(rootList.children);

function parseChildrens(elements){
  for(let i = 0; i < elements.length; i++){
    let element = elements[i];

    if(element.children === 0){
      return;
    }

    console.group(`li`);

    console.log(element);
    console.log(`Текст элемента: ${element.firstChild.data.trim()}`)
    
    let liChildrensList = element.querySelectorAll('li');
    console.log(`Количество потомков li: ${liChildrensList.length}`);

    console.groupEnd('li');

    for(let child of element.children){
      if(child.tagName === 'UL'){
        parseChildrens(child.children);
      }
    }
  }
}