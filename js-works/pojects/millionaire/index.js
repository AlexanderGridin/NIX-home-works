import ReVue from './ReVue/ReVue.js';
import Millionaire from './components/Millionaire/Millionaire.js';

ReVue.sayHello();

let millionaire = new Millionaire();

ReVue.build([
  millionaire
]);

console.log(ReVue.components);