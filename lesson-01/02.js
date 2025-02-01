/* С помощью цикла while найдите факториал числа 10 и присвойте его переменной factorial

  Справка:
  Факториал числа 𝑛 (обозначается как 𝑛!)  — это произведение всех натуральных чисел от 1 до 𝑛 включительно.
  Например, факториал числа 3 это 1 * 2 * 3 (6).
*/

// your code
let factorial = 1;
let n = 10;
while (n > 0) {
  factorial = factorial * n;
  n = n - 1;
  console.log("fact", factorial, "n", n);
}
console.log(factorial, n);
