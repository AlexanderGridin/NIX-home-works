import ReVueComponent from '../../ReVue/ReVueComponent.js';

class TextInput extends ReVueComponent{
  constructor(){
    super();

    this.tagName = 'input';
    this.attributes = {
      type: 'text',
      classNames: 'text-input'
    }
  }
}

export default TextInput;