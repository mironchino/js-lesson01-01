/*
Напишите функцию `updateGallery`, которая будет обновлять информацию о произведениях искусства в виртуальной галерее. Функция должна принимать три параметра:

- объект галереи
- название произведения (ключ)
- новое значение

Если произведение с таким названием уже есть в галерее, его значение должно быть обновлено. Если произведения нет, оно должно быть добавлено в объект галерею.

Пример использования функции:

const gallery = {
  'Mona Lisa': 'Leonardo da Vinci',
  'Starry Night': 'Vincent van Gogh',
  'The Scream': 'Edvard Munch'
}

updateGallery(gallery, 'Mona Lisa', 'Leonardo da Vinci, 1503-1506')
updateGallery(gallery, 'The Persistence of Memory', 'Salvador Dali')

console.log(gallery)

Ожидаемый вывод:
{
  'Mona Lisa': 'Leonardo da Vinci, 1503-1506',
  'Starry Night': 'Vincent van Gogh',
  'The Scream': 'Edvard Munch',
  'The Persistence of Memory': 'Salvador Dali'
}
*/

/* const gallery = {
  "Mona Lisa": "Leonardo da Vinci",
  "Starry Night": "Vincent van Gogh",
  "The Scream": "Edvard Munch",
}; */

/* function updateGallery(gallery, nameOfArt, newNameOfArt) {
  for (const key in gallery) {
    if (gallery[key] !== undefined && key === nameOfArt) {
      gallery[key] = newNameOfArt;

      break;
    }
  }

  gallery[nameOfArt] = newNameOfArt;
}
updateGallery(gallery, "Mona Lisa", "Leonardo da Vinci, 1503-1506");
updateGallery(gallery, "The Persistence of Memory", "Salvador Dali");

console.log(gallery); */

/* const numbers = [1, 2, 3, 4, 1, 5, 1];

function countOccurrences(array, number) {
  let current = 0;
  for (let i = 0; i < array.length; i++) {
    if (number === array[i]) {
      current++;
    }
  }
  return current;
}

console.log(countOccurrences(numbers, 1));
console.log(countOccurrences(numbers, 3)); */

/* const myArray = [1, 2, 3];
console.log(myArray);

const newNewArray = myArray.forEach((el) => console.log(el * 2));
console.log(myArray);
const newArray = myArray.map((el) => el * 3);
console.log(myArray, newArray, newNewArray); */

/* const inventory = {
  potion: 3,
  sword: 1,
  updateInventory(item, quantity) {
    if (this[item] !== undefined) {
      this[item] += quantity;
    } else {
      this[item] = quantity;
    }
  },
};

inventory.updateInventory("potion", 2);
inventory.updateInventory("shield", 1);

console.log(inventory);
 */

/* const votes = {
  Alice: 3,
  Bob: 5,
  Charlie: 5,
  countVotes() {
    let maxVotes = 0;
    let winner = "";
    for (const key in this) {
      if (typeof this[key] === "number" && this[key] > maxVotes) {
        maxVotes = this[key];
        winner = key;
      }
    }
    return winner;
  },
};

console.log(votes.countVotes(votes)); // "Bob" */

/* const users = {
  John: 25,
  Alice: 30,
  Bob: 18,
  Emily: 35,
  filterByAge(ageLimit) {
    let userFiltered = [];
    for (const key in this) {
      if (typeof this[key] === "number" && this[key] > ageLimit) {
        userFiltered.push(key);
      }
    }
    return userFiltered;
  },
};

console.log(users.filterByAge(21)); */

/* Реализуй функцию updateBookRatings, которая обновляет рейтинг книги в библиотеке.

Требования:
Функция принимает объект library, где ключ — название книги, 
а значение — ее рейтинг (число).
Второй параметр — book (строка) — название книги.
Третий параметр — newRating (число) — новый рейтинг книги.
Если книга есть в библиотеке, обновить ее рейтинг.
Если книги нет, добавить ее в библиотеку с указанным рейтингом. */

/* const library = {
  Golden: 9.0,
  "Brave New World": 8.5,
  updateBookRatings(book, newRating) {
    let bokFound = false;
    for (const key in this) {
      if (key === book) {
        this[key] = newRating;
        break;
      }
    }
    if (bokFound === false) {
      this[book] = newRating;
    }
  },
};

console.log(library.updateBookRatings("Golden", 9.5));
console.log(library.updateBookRatings("Fahrenheit 451", 8.8));

console.log(library); */

/* Реализуй функцию updatePrices, которая обновляет цены товаров в магазине.

Требования:
Функция принимает объект store, где ключ — название товара, а значение — его цена (число).
Второй параметр — percentage (число) — процент изменения цен (например, 10 означает +10% к цене).
Функция должна изменять цены товаров в переданном объекте store. */

/* const store = {
  apple: 100,
  banana: 50,
  orange: 80,
  updatePrices(item, percentage) {
    if (this[item] !== undefined) {
      this[item] += this[item] * (percentage / 100);
    } else {
      console.log(`Item ${item} is not found`);
    }
  },
};
store.updatePrices("apple", 50);
store.updatePrices("chili", 50);
store.updatePrices("perec", 50);
console.log(store); */

/* const cart = {
  apple: 2,
  banana: 3,
  updateCart(item, amount) {
    if (this[item] !== undefined) {
      this[item] += amount;
    } else {
      this[item] = amount;
    }
  },
};

cart.updateCart("apple", 1); // apple: 3
cart.updateCart("orange", 5); // orange: 5
cart.updateCart("strawberry", 5); // orange: 5
cart.updateCart(41245, 5); // orange: 5

console.log(cart); // { apple: 3, banana: 3, orange: 5 } */

/* const user = { apple: 2, banana: 3 };
function isEmpty(user) {
  for (const key in user) {
    return true;
  }
  return false;
}

console.log(isEmpty(user)); */
