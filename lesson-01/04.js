// ### 1. Используя цикл `while`, найдите сумму всех чисел от 1 до 100.
// **Метод**: Нет необходимости в методах.
/* let sum = 0;
let num = 1;
while (num <= 100) {
  sum += num;
  num++;
}
console.log(sum); */

// ### 2. Напишите цикл `while`, который будет выводить числа от 100 до 1.
// **Метод**: Нет необходимости в методах.

/* let sum = 0;
let num = 100;
while (num >= 1) {
  sum += num;
  num--;
}
console.log(sum); */

// ### 3. Используя `while`, найдите произведение всех чисел от 1 до 5.
// **Метод**: Нет необходимости в методах.
/* let sum = 1;
let num = 1;
while (num <= 5) {
  sum = sum * num;
  num++;
}
console.log(sum); */

// ### 4. Напишите цикл `while`, который находит сумму всех четных чисел от 1 до 50.
// **Метод**: Используй оператор остатка от деления `%` для нахождения четных чисел.

/* let sum = 0;
let num = 1;
while (num <= 50) {
  if (num % 2 === 0) {
    sum += num;
  }
  num++;
}
console.log(sum); */

// ### 5. Используя цикл `while`, найдите количество чисел от 1 до 50, которые делятся на 3.
// **Метод**: Используй оператор остатка от деления `%`.

/* let sum = 0;
let num = 1;
while (num <= 50) {
  if (num % 3 === 0) {
    sum += num;
  }
  num++;
}
console.log(sum); */

// ### 6. С помощью `while`, найдите наибольшее число, которое делится на 7 в пределах от 1 до 100.
// **Метод**: Используй `%` для проверки делимости на 7.
/* let sum = 0;
let num = 100;
while (num >= 0) {
  if (num % 7 === 0) {
    console.log(num);
    break;
  }
  num--;
}
console.log(num); */

// ### 7. Напишите цикл `while`, который находит сумму всех нечетных чисел от 1 до 100.
// **Метод**: Используй `%` для нахождения нечетных чисел.
/* let sum = 0;
let num = 1;
while (num <= 100) {
  if (num % 2 === 1) {
    sum += num;
  }
  num++;
}
console.log(sum); */

// ### 8. Используя цикл `while`, найдите факториал числа 6.
// **Метод**: Нет необходимости в дополнительных методах.
/* let factorial = 1;
let num = 6;
while (num > 0) {
  factorial = factorial * num;
  num--;
}
console.log(factorial); */

// ### 9. Напишите цикл `while`, который находит сумму цифр числа 6543.
// **Метод**: Используй `Math.floor()` для разделения числа на цифры.
/* let sum = 0;
let num = 6543;
while (num > 0) {
  sum += num % 100;
  console.log("sum", sum);

  num = Math.floor(num / 10);
  console.log("num", num);
} */

// ### 10. Используя `while`, найдите сумму всех чисел от 1 до 100, которые не делятся на 5.
// **Метод**: Используй `%` для исключения чисел, делящихся на 5.

/* let sum = 0;
let num = 1;
while (num <= 100) {
  if (num % 5 !== 0) {
    sum += num;
  }
  num++;
}
console.log(sum); */

// ### 11. Напишите цикл `while`, который вычисляет произведение всех четных чисел от 1 до 20.
// **Метод**: Используй `%` для проверки четности чисел.

/* let sum = 1;
let num = 1;
while (num <= 20) {
  if (num % 2 === 0) {
    sum = sum * num;
    console.log("sum", sum);
  }
  num++;
  console.log("num", num);
}
console.log(sum); */

// ### 12. Напишите цикл `while`, который находит количество чисел от 1 до 100, которые делятся на 2 и на 3 одновременно.
// **Метод**: Используй `%` для проверки делимости на 2 и 3.

/* let sum = 0;
let num = 1;
while (num <= 100) {
  if (num % 2 === 0 && num % 3 === 0) {
    sum++;
  }
  num++;
}
console.log(sum); */

// ### 13. Используя цикл `while`, найдите сумму всех чисел, которые меньше 100, но больше 50.
// **Метод**: Нет необходимости в методах.

/* let sum = 0;
let num = 100;
while (num > 50) {
  if (num < 100 && num > 50) {
    sum += num;
  }
  num--;
}
console.log(sum); */

// ### 14. Напишите цикл `while`, который вычисляет сумму всех чисел от 1 до 100, сумма цифр которых равна 9.
// **Метод**: Используй цикл для получения суммы цифр числа, и проверяй её с условием.
/* let sum = 0;
let num = 1;
while (num <= 100) {
  let tempSum = 0;
  let tempNum = num;
  while (tempNum > 0) {
    tempSum = tempNum % 10;
    console.log(tempSum, "tempSum");

    tempNum = Math.floor(tempNum / 10);
    console.log(tempNum, "tempNum");
  }
  if (tempSum === 9) {
    sum += num;
    console.log(sum, "sum");
  }
  num++;
} */

// ### 15. Напишите цикл `while`, который находит все числа от 1 до 100, которые заканчиваются на 5.
// **Метод**: Используй `%` для нахождения чисел, заканчивающихся на 5.

/* let num = 1;
while (num <= 100) {
  if (num % 10 === 5) {
    console.log(num);
  }
  num++;
} */

// ### 16. Используя цикл `while`, найдите наименьшее число, которое делится на 12 в пределах от 1 до 100.
// **Метод**: Используй `%` для нахождения чисел, делящихся на 12.
/* let num = 1;
while (num <= 100) {
  if (num % 12 === 0) {
    console.log(num);

    break;
  }
  num++;
} */

// ### 17. Напишите цикл `while`, который находит количество чисел от 1 до 100, которые не являются делителями числа 10.
// **Метод**: Используй `%` для проверки делимости на 10.

/* let sum = 0;
let num = 1;

while (num <= 100) {
  if (num % 10 !== 0) {
    sum++;
  }
  num++;
}
console.log(sum); */

// ### 18. Используя цикл `while`, найдите сумму всех чисел от 1 до 100, которые делятся на 4, но не на 2.
// **Метод**: Используй `%` для проверки делимости.
/* let sum = 0;
let num = 1;

while (num <= 100) {
  if (num % 4 === 0 && num % 2 !== 0) {
    sum += num;
    console.log(sum, "tempSum");
  }
  num++;
}
console.log(sum, "totalSum"); */

// ### 19. Напишите цикл `while`, который находит произведение чисел от 1 до 10, которые делятся на 2.
// **Метод**: Используй `%` для нахождения чисел, делящихся на 2.

/* let multi = 1;
let num = 1;
while (num <= 10) {
  if (num % 2 === 0) {
    multi = multi * num;
    console.log(multi, "Multi");
  }
  num++;
} */

// ### 20. Напишите цикл `while`, который считает количество чисел, делящихся на 5, но не на 3, от 1 до 50.
// **Метод**: Используй `%` для проверки делимости на 5 и 3.

/* let sum = 0;
let num = 1;
while (num <= 50) {
  if (num % 5 === 0 && num % 3 !== 0) {
    sum++;
    console.log(sum, "tempSum");
  }
  num++;
}
console.log(sum, "totalSum"); */

// ### 21. Используя цикл `while`, посчитайте, сколько чисел от 1 до 30 делятся на 3 без остатка.
// **Метод**: Используй `%`.

/* let sum = 0;
let num = 1;
while (num <= 30) {
  if (num % 3 === 0) {
    sum++;
  }
  num++;
}
console.log(sum);
 */
// ### 22. Используя `while`, найдите сумму всех чисел от 1 до 100, кратных 5 или 7.
// **Метод**: Используй `%` для нахождения чисел, делящихся на 5 или 7.

// ### 23. Напишите цикл `while`, который перебирает массив чисел и выводит только те, которые больше 10.
// **Метод**: Используй метод `.length` массива для определения его длины.

// ### 24. Используя цикл `while`, найдите все числа от 1 до 50, которые делятся на 2, 3 и 5 одновременно.
// **Метод**: Используй `%` для нахождения чисел, которые делятся на 2, 3 и 5.

// ### 25. Напишите цикл `while`, который находит все числа от 1 до 100, которые являются простыми.
// **Метод**: Для проверки простоты числа можно использовать цикл внутри основного цикла.

// ### 26. Напишите цикл `while`, который находит наибольшее четное число в пределах от 1 до 100.
// **Метод**: Используй `%` для нахождения четных чисел.

// ### 27. Напишите цикл `while`, который находит число, кратное 6 и максимальное в пределах от 1 до 100.
// **Метод**: Используй `%` для проверки делимости на 6.

// ### 28. Используя цикл `while`, найдите количество чисел от 1 до 100, которые больше 50, но меньше 80.
// **Метод**: Нет необходимости в методах.

// ### 29. Напишите цикл `while`, который находит все числа от 1 до 20, которые делятся на 4.
// **Метод**: Используй `%`.

// ### 30. Используя цикл `while`, найдите сумму всех чисел от 50 до 100, делящихся на 2.
// **Метод**: Используй `%`.

// ### 31. Напишите цикл `while`, который выводит все числа от 1 до 100, которые заканчиваются на 0.
// **Метод**: Используй `%` для нахождения чисел, заканчивающихся на 0.

// ### 32. Используя цикл `while`, найдите сумму всех чисел от 1 до 200, которые делятся на 3.
// **Метод**: Используй `%`.

// ### 33. Напишите цикл `while`, который находит сумму всех чисел от 1 до 100, которые не делятся на 3 и на 5.
// **Метод**: Используй `%`.

// ### 34. Напишите цикл `while`, который находит количество чисел от 1 до 100, сумма цифр которых равна 6.
// **Метод**: Используй `Math.floor()` и `%` для работы с цифрами числа.

// ### 35. Используя цикл `while`, найдите наибольшее число от 1 до 100, которое не делится на 2.
// **Метод**: Используй `%`.

// ### 36. Напишите цикл `while`, который находит произведение всех чисел от 1 до 5, которые больше 3.
// **Метод**: Используй условие и цикл.

// ### 37. Напишите цикл `while`, который суммирует все числа от 1 до 100, которые не содержат цифры 7.
// **Метод**: Используйте строковое представление числа для поиска цифры.

// ### 38. Используя цикл `while`, найдите все числа от 1 до 100, которые содержат хотя бы одну цифру 2.
// **Метод**: Используйте строковое представление числа для поиска цифры.

// ### 39. Напишите цикл `while`, который суммирует все числа от 1 до 100, у которых последняя цифра – 3.
// **Метод**: Используйте `%`.

// ### 40. Напишите цикл `while`, который находит все числа от 1 до 100, кратные 10.
// **Метод**: Используйте `%`.

// ### 41. Напишите цикл `while`, который находит количество чисел от 1 до 100, сумма цифр которых меньше 5.
// **Метод**: Используйте `Math.floor()` и `%`.

// ### 42. Напишите цикл `while`, который выводит все числа от 1 до 100, которые не делятся на 4 и на 5.
// **Метод**: Используйте `%`.

// ### 43. Используя цикл `while`, посчитайте, сколько чисел от 1 до 100, которые равны сумме своих цифр.
// **Метод**: Используйте `Math.floor()` и `%`.

// ### 44. Напишите цикл `while`, который выводит все

//  числа от 1 до 50, которые не делятся на 2.
// **Метод**: Используйте `%`.

// ### 45. Напишите цикл `while`, который суммирует все числа от 1 до 100, у которых последняя цифра не 9.
// **Метод**: Используйте `%`.

// ### 46. Напишите цикл `while`, который находит произведение всех чисел от 1 до 10, кратных 4.
// **Метод**: Используйте `%`.

// ### 47. Используя цикл `while`, найдите сумму всех чисел от 1 до 50, которые не кратны 2 или 3.
// **Метод**: Используйте `%`.

// ### 48. Напишите цикл `while`, который находит сумму всех чисел от 1 до 100, не содержащих цифры 8.
// **Метод**: Используйте строковое представление числа.

// ### 49. Напишите цикл `while`, который находит все числа от 1 до 100, которые являются квадратами целых чисел.
// **Метод**: Используйте `Math.sqrt()`.

// ### 50. Напишите цикл `while`, который вычисляет факториал числа 7.
// **Метод**: Нет дополнительных методов.
