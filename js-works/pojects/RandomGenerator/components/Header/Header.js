import ReVueComponent from '../../ReVue/ReVueComponent.js';

class Header extends ReVueComponent{
  constructor(props){
    super(props);

    this.tagName = 'header';
    this.attributes = {
      classNames: 'header'
    };

    this.childrens = prepareChildrens(props);
    this.setChildrens();
  }
}

function prepareChildrens(props){
  let h1 = new ReVueComponent();
  h1.initElement({
    tagName: 'h1',
    attributes: {
      classNames: 'random-generator__title',
      textContent: props.titleText,
    }
  });

  return [
    h1
  ];
}

export default Header;