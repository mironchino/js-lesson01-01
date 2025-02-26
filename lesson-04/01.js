/*
Напишите функцию `includesElement`, которая принимает массив и элемент, а затем возвращает булево значение, указывающее, содержится ли данный элемент в массиве. Для перебора элементов используйте цикл `for`.

Входные данные:
- `array`: Массив, в котором нужно проверить наличие элемента. Массив может содержать любые типы данных.
- `element`: Элемент, наличие которого нужно проверить в массиве.

Выходные данные:
- `true`: Если элемент найден в массиве.
- `false`: Если элемент отсутствует в массиве.

Пример использования:
includesElement([1, 2, 3], 2)  // должен вернуть `true`.
*/

let arrayCars = ["BMW", "Mazeratti", "Lada", "Hyundai", "Kia", "Jeep"];
let carName = "Audi";
let found;

function includesElement(array, carName) {
  found = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === carName) {
      found = true;
      console.log("We found the element " + carName + " for " + i);
      break;
    }
    if (found === false) {
      console.log("we did't found the element");
      break;
    }
  }
  return found;
}

const audi = includesElement(arrayCars, carName);

/* let array = [1, 2, 3, 4, 5, 6];
let element = 5;
let found = false;
for (let count = 0; count < array.length; count++) {
  if (array[count] === element) {
    found = true;
    console.log("We found the element " + count);
    break;
  } else {
    console.log("we didn't found the element");
  }
}
console.log(found); */

/* let arrayCars = ["BMW", "Audi", "Mazeratti", "Lada", "Hyundai", "Kia", "Jeep"];
let carName = "Audi";
let found = false;
function includesElement(arrayCars, carName) {
  for (let count = 0; count < arrayCars.length; count++) {
    if (arrayCars[count] === carName) {
      found = true;
      console.log("We found the element " + count);
      break;
    }
    if (found !== false) {
      console.log("we did't found the element");
    }
  }
}
includesElement(arrayCars, carName);
 */
