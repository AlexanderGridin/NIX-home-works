import ReVueComponent from '../../ReVue/ReVueComponent.js';
import {childrens} from './PlayerProfile__Childrens.js';

class PlayerProfile extends ReVueComponent{
  constructor(){
    super();

    this.tagName = 'div';
    this.name = 'PlayerProfile';
    this.attributes = {
      classNames: 'millionaire__player-profile'
    };
    this.childrens = childrens;
    this.setChildrens().buildElement();
  }
}

export default PlayerProfile;