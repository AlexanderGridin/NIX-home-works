import Button from '../Button/Button.js';

class ButtonPrimary extends Button{
  constructor(props){
    super(props);

    this.addClassNames('button-primary');
  }
}

export default ButtonPrimary;