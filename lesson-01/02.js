// /* С помощью цикла while найдите факториал числа 10 и присвойте его переменной factorial

//   Справка:
//   Факториал числа 𝑛 (обозначается как 𝑛!)  — это произведение всех натуральных чисел от 1 до 𝑛 включительно.
//   Например, факториал числа 3 это 1 * 2 * 3 (6).
// */

// // your code
let factorial = 1; // задаем первое значение факториала единица, потому что факториал это умножение и на ноль не умножается
let n = 10; // задаем диапазон цифр для переумножения до 10
while (n > 0) {
  // пока диапозон не достигнет 10 будет выполнятся цикл условия
  factorial = factorial * n; // переменная факториал будет умножатся в каждый цикл
  n = n - 1; // диапозон цифр будет уменьшаться на 1 каждый цикл, пока не достигнет 0
  console.log("fact", factorial, "n", n);
}
console.log(factorial, n);
