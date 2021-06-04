import ReVue from './ReVue/ReVue.js';
import {ButtonPrimary} from './components/Buttons/Buttons.js';
import data from './data.js';

console.log(data)

ReVue.sayHello();

let button = ButtonPrimary
  .setChildrens('Тестовая кнопка')
  .build();

ReVue.build(button);