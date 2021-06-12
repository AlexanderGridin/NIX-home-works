import ReVue from './ReVue/ReVue.js';
import RandomGenerator from './components/RandomGenerator/RandomGenerator.js';

ReVue.sayHello();

let randomGenerator = new RandomGenerator();

ReVue.build([
  randomGenerator,
]);

console.log(ReVue.components);