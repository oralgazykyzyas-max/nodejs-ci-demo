'use strict';
const { add, subtract, multiply, divide } = require('./calculator');

console.log('Қарапайым калькулятор (Node.js + Jenkins CI)');
console.log('8 + 2 =', add(8, 2));
console.log('8 - 2 =', subtract(8, 2));
console.log('8 * 2 =', multiply(8, 2));
console.log('8 / 2 =', divide(8, 2));
