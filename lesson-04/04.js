/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/
/* 
function doubleEachCharacter(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result = result + str[i] + str[i];
  }
  return result;
}
console.log(doubleEachCharacter("Privet")); */

/* function greet(name) {
  const message = `Привет, ${name || "guest"}!`;
  return message;
}
console.log(greet("mks"));

const message = `Сообщение дня: ${getWelcomeMessage("Аня")}`;
console.log(message);

function getWelcomeMessage(name) {
  return `Привет, ${name}!`;
} */
/* 
const notes = ["do", "re", "mi", "fa", "sol", "la", "si"];
for (let i = 6; i >= 0; i--) {
  console.log(notes[i]);
}

const pets = ["dog", "cat", "parrot", "fish"];
pets.splice(pets.length - 1, 1);
console.log(pets);
 */

/* const dog = {
  name: "Fido",
  weight: 48,
  breed: "Mixed",
  loves: "walks",
};

function loseWeight(dog, amount) {
  return (dog.weight = dog.weight - amount);
}
console.log(loseWeight(dog, 10), dog.weight);

const superSecretFile = {
  level: "classified",
  opened: 0,
  password: 2,
  contents: "Dr. Evel's next meeting is in Detroit.",
};

function getSecret(file, secretPassword) {
  file.opened = file.opened + 1;
  if (secretPassword === file.password) {
    return file.contents;
  }
  return "Invalid password! No secret for you.";
}
console.log(
  getSecret(superSecretFile, 2),
  getSecret(superSecretFile, 3),
  superSecretFile.opened
);

function setSecret(file, secretPassword, secret) {
  if (secretPassword === file.password) {
    file.opened = 0;
    file.contents = secret;
  }
}
setSecret(superSecretFile, 2, "Dr. Evel's next meeting is in Minsk.");
console.log(superSecretFile.contents);

function setPassword(file, currentPassword, newPassword) {
  if (currentPassword === file.password) {
    file.password = newPassword;
  }
}

setPassword(superSecretFile, 2, 3);
alert(getSecret(superSecretFile, 3)); */
/* const chevy = {
  make: "Chevy",
  model: "Bel Air",
  year: 1957,
  color: "red",
  passengers: 2,
  convertible: false,
  mileage: 1021,
};
const cadi = {
  make: "GM",
  model: "Caddilac",
  year: 1950,
  color: "tan",
  passengers: 5,
  convertible: false,
  mileage: 12892,
};
const fiat = {
  make: "Fiat",
  model: "500",
  year: 1957,
  color: "Medium Blue",
  passengers: 2,
  convertible: false,
  mileage: 88000,
};

function prequal(car) {
  if (car.year < 1955 && car.mileage < 50000) {
    return true;
  }
  return false;
}

console.log(prequal(chevy), prequal(cadi), prequal(fiat)); */

// Метод для приветствия
/* const pet = {
  name: "Strider",
  happiness: 50,
  hunger: 50,
  sayHi() {
    console.log("Meow!");
  },
};

pet.sayHi(); // 'Meow!'
 */
