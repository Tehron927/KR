// ИСХОДНЫЕ ДАННЫЕ НЕ ТРОГАТЬ!*

let discount = prompt("Какая скидка?");

let totalSale = Number;

let total = Number;

let max = Object;

let min = Object;

let average = Number;

let arr = [
  {
    name: "Milk",

    price: 3.25,
  },

  {
    name: "Coffee",

    price: 1.5,
  },

  {
    name: "Ice Cream",

    price: 7.85,
  },

  {
    name: "Tomatos",

    price: 4.14,
  },

  {
    name: "Onion",

    price: 2.25,
  },
];

let arr_sale = [];

// 1. Сохранить самый дорогой товар в переменную`max`*

// 2. Сохранить самый дешевый товар в переменную`min`*

// 3. Сохранить общую цену без скидок в переменную`total`*

// 4. Сохранить общую цену со скидкой в переменную`totalSale`*

// 5. Сохранить элементы из массива arr с обновленной ценой (цена со скидкой) в переменную `arr_sale`*

// 6. Сохранить в переменной`average` среднюю цену всех продуктов без скидок*

// * Писать весь код в функции `setup()`*

// ТРИ ОЦЕНКИ. ЧИСТОТА КОДА, ЛОГИКА РАБОТЫ, УНИКАЛЬНОСТЬ КОДА*

const setup = () => {
    let discount = parseFloat(prompt("Какая скидка?")) || 0;
    let totalSale = 0;
    let total = 0;
    let max = arr[0];
    let min = arr[0];
    let average = 0;
    let arr_sale = [];
  
    for (let product of arr) {
      total += product.price;
      if (product.price > max.price) {
        max = product;
      }
      if (product.price < min.price) {
        min = product;
      }
    }
  
    for (let product of arr) {
      let discountedPrice = product.price * (1 - discount / 100);
      totalSale += discountedPrice;
      arr_sale.push({ ...product, price: discountedPrice });
    }
  
    average = total / arr.length;
  
    console.log("дорогой товар:", max);
    console.log("дешевый товар:", min);
    console.log("цена без скидки", total.toFixed(2));
    console.log("цена со скидкой", totalSale.toFixed(2));
    console.log("средняя цена без скидки:", average.toFixed(2));
    console.log("обновленные цены:", arr_sale);
  };
  
  setup();

  
  

