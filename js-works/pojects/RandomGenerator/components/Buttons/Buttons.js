import ReVueComponent from '../../ReVue/ReVueComponent.js';

class ButtonPrimary extends ReVueComponent{
  constructor(props){
    super(props);

    this.tagName = 'button';
    this.attributes = {
      type: 'button',
      classNames: 'button',
      textContent: props.text
    };
  }
}

class SubmitButton extends ReVueComponent{
  constructor(props){
    super(props);

    this.tagName = 'button',
    this.attributes = {
      type: 'submit',
      classNames: 'button',
      textContent: props.submitButtonText
    }
  }
}

export {ButtonPrimary, SubmitButton};