/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/
/* const arrayinput = [
  "pet",
  "pet",
  "dog",
  "dog",
  "fish",
  "fish",
  "cat",
  "carrot",
  "shark",
  "rabbit",
  "cars",
  "cars",
];

function includesElement(array, element) {
  for (let i = 0; i < array.length; i++)
    if (array[i] === element) {
      return true;
    }
  return false;
}

function findUniqueElements(array) {
  const arrayOutput = [];

  for (let i = 0; i < array.length; i++) {
    let currentElement = array[i];
    let isDuplicate = false;
    for (let j = 0; j < array.length; j++) {
      if (i !== j && array[j] === currentElement) {
        isDuplicate = true;
        break;
      }
    }
    if (
      isDuplicate !== true &&
      includesElement(arrayOutput, currentElement) !== true
    ) {
      arrayOutput.push(currentElement);
    }
  }
  return arrayOutput;
}

console.log(findUniqueElements(arrayinput)); */
