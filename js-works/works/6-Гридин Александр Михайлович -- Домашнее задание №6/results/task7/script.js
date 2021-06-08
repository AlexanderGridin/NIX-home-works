let rootList = document.querySelector('#root ul');

parseChildrens(rootList.children);

function parseChildrens(elements){
  for(let i = 0; i < elements.length; i++){
    let element = elements[i];

    if(element.children === 0){
      return;
    }
    
    let liChildrensList = element.querySelectorAll('li');

    if(liChildrensList.length > 0){
      element.firstChild.data = `${element.firstChild.data} [${liChildrensList.length}]`;
    }

    for(let child of element.children){
      if(child.tagName === 'UL'){
        parseChildrens(child.children);
      }
    }
  }
}