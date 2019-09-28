/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== 1,
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === 5
 */

import convertBytesToHuman from "../convertBytesToHuman.js"

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman(-123)).toBe(false)
  expect(convertBytesToHuman(1.3)).toBe(false)
  expect(convertBytesToHuman("I want macbook(")).toBe(false)
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(1025)).toBe("1 KB")
  expect(convertBytesToHuman(1524363)).toBe("1.45 MB")
  expect(convertBytesToHuman(15)).toBe("15 B")
});

// другая группа проверок
