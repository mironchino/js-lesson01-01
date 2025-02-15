/*
* Напишите код, который симулирует бросок двух шестигранных игральных кубиков и определяет, выпал ли выигрышный дубль.
* В переменные dice1 и dice2 должны присваиваться случайные целые числа от 1 до 6.
* Дубль считается выигрышным, если на обоих дайсах выпало одно и то же число, и это число больше 3.
* Полученное булево значение сохраните в переменной isWinningDouble

* Для успешного прохождения тестов не меняйте названия переменных!
*/

let dice1 = Math.floor(Math.random() * (6 - 1 + 1) + 1); // your code
let dice2 = Math.floor(Math.random() * (6 - 1 + 1) + 1); // your code
/* let isWinningDouble = false; // your code
let count = 0;

while (isWinningDouble !== true) {
  if (dice1 === dice2 && dice1 > 3) {
    isWinningDouble = true;
    count++;
    console.log("You Win");

    break;
  } else {
    isWinningDouble = false;
    count++;
  }
} */

let isWinningDouble = false; // Переменная, указывающая на выигрышный дубль
let count = 0;

while (!isWinningDouble) {
  let dice1 = Math.floor(Math.random() * 6) + 1; // Генерируем новое число от 1 до 6
  let dice2 = Math.floor(Math.random() * 6) + 1; // Генерируем новое число от 1 до 6
  count++; // Увеличиваем счетчик попыток

  console.log(`Попытка ${count}: dice1 = ${dice1}, dice2 = ${dice2}`);

  if (dice1 === dice2 && dice1 > 3) {
    isWinningDouble = true;
    console.log(`Выигрышный дубль! ${dice1}, ${dice2} за ${count} попыток.`);
  }
}

/* console.log("Первый бросок: " + dice1);
console.log("Второй бросок: " + dice2);
if (isWinningDouble) {
  console.log("Выигрышный дубль!");
} else {
  console.log("Не выигрышный дубль.");
}
 */
