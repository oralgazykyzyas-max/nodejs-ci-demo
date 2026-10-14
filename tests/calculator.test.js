'use strict';
const test = require('node:test');
const assert = require('node:assert');
const { add, subtract, multiply, divide } = require('../src/calculator');

test('1-тест: қосу дұрыс нәтиже береді', () => {
  assert.strictEqual(add(2, 3), 5);
});

test('2-тест: басқа мәндермен қосу және алу', () => {
  assert.strictEqual(add(-1, 1), 0);
  assert.strictEqual(subtract(10, 4), 6);
});

test('3-тест: көбейту', () => {
  assert.strictEqual(multiply(6, 7), 42);
});

test('4-тест: бөлу', () => {
  assert.strictEqual(divide(10, 2), 5);
});

test('5-тест: нөлге бөлу қате шығарады', () => {
  assert.throws(() => divide(1, 0), /Нөлге бөлуге/);
});
