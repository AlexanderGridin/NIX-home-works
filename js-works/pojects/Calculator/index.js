import ReVue from './ReVue/ReVue.js';
import Calculator from './components/Calculator/Calculator.js';

ReVue.sayHello();

let calculator = new Calculator();

ReVue.build([
  calculator
]);

console.log(ReVue.components);