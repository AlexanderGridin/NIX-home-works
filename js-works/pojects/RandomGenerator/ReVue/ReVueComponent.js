import ReVue from './ReVue.js';

class ReVueComponent{
  constructor(props){
    this.name = null;
    this.id = null;
    this.tagName = null;
    this.attributes = null;
    this.props = props;
    this.element = null;
    this.childrens = [];
    this.eventListeners = null;
    this.parent = null;
  }

  initElement(data){
    this.tagName = data.tagName;
    this.name = data.name;
    this.attributes = data.attributes;
    this.childrens = data.childrens ? data.childrens : [];

    this.setChildrens(this.childrens);
    this.buildElement();
  }

  setChildrens(){
    if(this.childrens.length > 0){
      for(let child of this.childrens){
        child.parent = this;
      }
    }

    return this;
  }

  setName(name){
    this.name = name;
    return this;
  }

  setEventListeners(eventListeners){
    this.eventListeners = eventListeners;
    return this;
  }

  setProperties(props){
    this.props = props;
    return this;
  }

  buildElement(){
    this.id = ++ReVue.elementsCounter;
    
    if(!this.name){
      this.name = `${this.constructor.name}-${this.id}`;
    }

    this.element = document.createElement(this.tagName);
    this.element.setAttribute('data-name', this.name);
    
    handleElementAttributes(this.element, this.attributes);
    handleElementEventListeners(this.element, this.eventListeners);

    ReVue.components.push(this);
    return this;
  }

  addClassNames(str){
    this.attributes.classNames += ` ${str}`;
    return this;
  }

  addAttributes(obj){
    for(let attrName in obj){
      this.attributes[attrName] = obj[attrName];
    }

    return this;
  }

  sayHi(){
    console.log(`I am ${this.name} component!`);
    console.log(this);
  }
}

function handleElementAttributes(element, attributes){
  for(let attrName in attributes){
    switch(attrName){
      case 'classNames':
        let classNames = attributes[attrName].split(' ');
        
        classNames.forEach((name) => {
          element.classList.add(name);
        });

        break;

      case 'textContent':
        element.textContent = attributes[attrName];
        break;

      case 'innerHTML':
        element.innerHTML = attributes[attrName];
        break;

      default:
        element.setAttribute(attrName, attributes[attrName]);
    }
  }
}

function handleElementEventListeners(element, eventListeners){
  if(eventListeners){
    for(let event in eventListeners){
      element.addEventListener(event, eventListeners[event], false);
    }
  }
}

export default ReVueComponent;