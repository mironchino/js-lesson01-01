/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив, содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/
/* let arrayNumbers = [1, 2, 3, 4, 5, 6];
let arrayCars = ["BMW", "Audi", "Mazeratti", "Lada", "Hyundai", "Kia"];

function includesElement(array, element) {
  for (let i = 0; i < array.length; i++)
    if (array[i] === element) {
      return true;
    }
  return false;
}

function findCommonElements(array1, array2) {
  const arrayOutput = [];
  for (let i = 0; i < array1.length; i++) {
    let currentElement = array1[i];
    let isDuplicate = false;
    for (let j = 0; j < array2.length; j++)
      if (array2[j] === currentElement) {
        isDuplicate = true;
        break;
      }
    if (
      isDuplicate !== false &&
      includesElement(arrayOutput, currentElement) !== true
    ) {
      arrayOutput.push(currentElement);
    }
  }

  return arrayOutput;
}

console.log(findCommonElements(arrayNumbers, arrayCars));
 */
