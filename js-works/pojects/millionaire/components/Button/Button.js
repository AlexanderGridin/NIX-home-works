import ReVueComponent from '../../ReVue/ReVueComponent.js';

class Button extends ReVueComponent{
  constructor(props){
    super(props);

    this.tagName = 'button';
    this.attributes = {
      classNames: 'button',
      type: 'button',
    }

    if(props && props.text){
      this.attributes.textContent = props.text;
    }

    if(props && props.value){
      this.attributes.value = props.value;
    }
  }
}

export default Button;