/* Используйте цикл while для нахождения суммы всех нечётных чисел от 1 до 20.
  Результат вычислений сохраните в переменной sum.

  Вам понадобиться оператор остатка от деления %. Например, выражение 5 % 2 вернёт остаток 1.
*/

// your code
let sum = 0;
let numberArrive = 1;
while (numberArrive <= 20) {
  if (numberArrive % 2 === 1) {
    sum = sum + numberArrive;
  }
  numberArrive = numberArrive + 1;

  console.log("sum", sum, "n", numberArrive);
}
