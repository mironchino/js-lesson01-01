/*
Напишите свою версию метода `filter`.
Ваша задача — создать функцию `filter`, которая принимает два параметра:

- `array` (массив, над которым выполняется операция),
- `callback` (функция, которая вызывается для каждого элемента массива).

Функция `callback` должна принимать два параметра:

- `element` (текущий элемент массива)
- `index` (индекс текущего элемента)

Функция `filter` должна возвращать новый массив, содержащий только те элементы `array`, для которых `callback` возвращает `true`.
*/

/* Пример использования:
const numbers = [1, 2, 3, 4, 5]

const oddNumbers = filter(numbers, (element, index) => {
  return element % 2 !== 0
});

console.log(oddNumbers) // Должен вывести: [1, 3, 5]
*/

const newArrayComponents = [
  "button",
  "button",
  "button",
  "Input",
  "bmw",
  1,
  null,
  undefined,
  ,
  true,
  false,
  {},
];

const filter = (array, callback) => {
  const filteredArray = [];

  for (let i = 0; i < array.length; i++) {
    if (i in array === false) {
      continue;
    }

    const element = array[i];
    const index = i;

    if (callback(element, index)) {
      filteredArray.push(element);
    }
  }

  return filteredArray;
};

const fillfiilf = filter(newArrayComponents, (el, idx) => {
  return typeof el === "string";
});

console.log(fillfiilf);
