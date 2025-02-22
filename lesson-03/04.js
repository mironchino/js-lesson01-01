/* const depositAmount = 1000;
const yearRate = 15;
const depositTermInYears = 2;

function getDepositIncome(amount, rate, term) {
  let depositIncome = 0;
  let count = 0;
  while (count < term) {
    depositIncome = depositIncome + amount * (rate / 100);
    count++;
  }

  return depositIncome;
}

const depositIncome_1 = getDepositIncome(
  depositAmount,
  yearRate,
  depositTermInYears
);
console.log(depositIncome_1);
/* const depositIncome_2 = getDepositIncome(1500, 16, 3);
console.log(depositIncome_2);
const totalIncome = depositIncome_1 + depositIncome_2;
console.log(totalIncome);
 */

/* const message = `Сообщение дня: ${getWelcomeMessage("Аня")}`;
console.log(message);

function getWelcomeMessage(name) {
  return `Привет, ${name}!`;
}
 */
/* function addNumbers(a, b) {
  let result = a + b;
  return result;
}
const sum = addNumbers(100, 20);
console.log(sum); */
/* function greet(name) {
  const message = `Привет, ${name}!`;
}
 */

// 1. Функция умножения
/* // Напишите функцию multiply, которая принимает два числа и возвращает их произведение.
function multiply(num1, num2) {
  return num1 * num2;
} */

// 2. Функция деления
// Напишите функцию divide, которая принимает два числа и возвращает результат их деления.
// Учтите, что деление на 0 недопустимо.

/* function divide(num1, num2) {
  if (num2 === 0) {
    return null;
  } else {
    return num1 / num2;
  }
} */

/* // 3. Определение положительного числа
// Напишите функцию isPositive, которая принимает число и возвращает true, если оно положительное,
// и false в противном случае.

function isPositive (num) {
  if (num*1>0) {
    return true;
  } else {
    return false;
  }
} */

/* // 4. Нахождение меньшего из двух чисел
// Напишите функцию findSmallest, которая принимает два числа и возвращает наименьшее из них.

function findSmallest (num1, num2) {
  if (num1<num2) {
    return num1;
  } else {return num2}
  
} */

/* // 5. Проверка на кратность 5
// Напишите функцию isMultipleOfFive, которая принимает число и возвращает true, если оно кратно 5,
// и false в противном случае.
function isMultipleOfFive (num) {
  return num%5===0 ? true : false; 
}

// 6. Возведение в квадрат
// Напишите функцию square, которая принимает число и возвращает его квадрат.

function square (num) {
  return num**2;
} */

/* // 7. Определение совершеннолетия
// Напишите функцию isAdult, которая принимает возраст и возвращает true, если возраст 18 лет и больше,
// и false в противном случае.
function isAdult (age) {
  return age>=18
} */

/* // 8. Сумма элементов массива
// Напишите функцию sumArray, которая принимает массив чисел и возвращает их сумму.

function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log(sum);

  return sum;
}
sumArray([5, 6, 6, 21, 5345, 62456, 1]);
 */
/* // 9. Среднее значение массива
// Напишите функцию averageArray, которая принимает массив чисел и возвращает их среднее значение.

function averageArray(array) {
  let middleCount = 0;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    middleCount = sum / array.length; // количество элементов в массиве
  }

  return middleCount;
}

console.log(averageArray([1, 2, 3, 4, 5, 6, 7, 8])); */

// 10. Проверка наличия элемента в массиве
/* // Напишите функцию containsElement, которая принимает массив и элемент, а затем возвращает true,
// если элемент содержится в массиве, и false в противном случае.

function containsElement(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == element) {
      return true;
    }
  }
  return false;
}

console.log(containsElement(["Audi", "BMW", "Citroen", "Kia"], "Kia"));
 */
/* // 11. Нахождение наибольшего элемента массива
// Напишите функцию findMax, которая принимает массив чисел и возвращает наибольшее число в массиве.

function findMax(array) {
  let maxNumber = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maxNumber) {
      maxNumber = array[i];
    }
  }
  return maxNumber;
}
console.log(findMax([1, 2, 3, 4, 5])); */

/* // 12. Перевод градусов Цельсия в Фаренгейты
// Напишите функцию celsiusToFahrenheit, которая принимает температуру в градусах Цельсия
// и возвращает её эквивалент в градусах Фаренгейта по формуле:
// F = C * (9/5) + 32

function celsiusToFahrenheit(celsius) {
  return celsius * (9 / 5) + 32;
}
console.log(celsiusToFahrenheit(34)); */

/* // 13. Перевод градусов Фаренгейта в Цельсии
// Напишите функцию fahrenheitToCelsius, которая принимает температуру в градусах Фаренгейта
// и возвращает её эквивалент в градусах Цельсия по формуле:
// C = (F - 32) * (5/9)

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * (5 / 9);
}
console.log(fahrenheitToCelsius(40)); */

/* // 14. Функция повторения строки
// Напишите функцию repeatString, которая принимает строку и число n,
// а затем возвращает строку, повторённую n раз.

function repeatString(str, n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += str;
    if (i < n - 1) {
      result += " ;) ";
    }
  }
  result += " ;) ";
  return result;
}
console.log(repeatString("Privet", 3)); */

/* // 15. Определение високосного года
// Напишите функцию isLeapYear, которая принимает год и возвращает true, если он високосный,
// и false в противном случае.
// Год является високосным, если он делится на 4, но не делится на 100, кроме случаев,
// когда он также делится на 400.

function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      return year % 400 === 0;
    }
    return true;
  }
  return false;
}

console.log(isLeapYear(464));
console.log(isLeapYear(465));
 */
