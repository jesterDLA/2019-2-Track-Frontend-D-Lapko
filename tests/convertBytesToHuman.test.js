/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== 1,
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === 5
 */

import convertBytesToHuman from '../convertBytesToHuman';

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman(-3)).toBe(false)
  expect(convertBytesToHuman(2.3)).toBe(false)
  expect(convertBytesToHuman("I want macbook(")).toBe(false)
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(15)).toBe("15 B")
  expect(convertBytesToHuman(1025)).toBe("1 KB")
  expect(convertBytesToHuman(26242363131)).toBe("24.44 GB")
  // ...
});

// другая группа проверок
