import Component from '../../ReVue/Component.js';
import ReVue from '../../ReVue/ReVue.js';

let ButtonPrimary = new Component({
  name: 'ButtonPrimary',
  type: 'button',
  props: {
    classNames: 'btn btn-primary',
    type: 'button'
  },
});

let ButtonSecondary = new Component({
  name: 'ButtonSecondary',
  type: 'button',
  props: {
    classNames: 'btn btn-secondary',
    type: 'button'
  },
});


export {ButtonPrimary, ButtonSecondary};