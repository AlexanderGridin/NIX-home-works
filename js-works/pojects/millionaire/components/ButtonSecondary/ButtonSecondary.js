import Button from '../Button/Button.js';

class ButtonSecondary extends Button{
  constructor(props){
    super(props);

    this.addClassNames('button-secondary');
  }
}

export default ButtonSecondary;