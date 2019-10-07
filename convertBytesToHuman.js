/*
 * Функция `convertBytesToHuman` должна принимать
 * аргумент `bytes` только числового типа.
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

export default function convertBytesToHuman(bytes) {
  var rec = Object.prototype.toString.call(arguments[0])
  .replace(/\[object |\]/g, '');
  if (rec != "Number") {
    return false;
  }
  if (!Number.isInteger(bytes)) {
    return false;
  }
  if (bytes < 0) {
    return false;
  }
  if (bytes < 1024) {
    return String(bytes) + " B"
  }
  if (bytes < 1048576) {
    return String(Math.round(bytes * 100 / 1024) / 100) + " KB"
  }
  if (bytes < 1073741824) {
    return String(Math.round(bytes * 100 / 1048576) / 100) + " MB"
  }
  return String(Math.round(bytes * 100 / 1073741824) / 100) + " GB"
}
