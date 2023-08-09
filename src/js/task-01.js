const categoriesList = document.getElementById("categories");

// Находим все элементы li.item внутри списка категорий
const categoryItems = categoriesList.querySelectorAll("li.item");

// Посчитаем и выведем в консоль количество категорий (элементов li.item)
const categoryCount = categoryItems.length;
console.log(`Number of categories: ${categoryCount}`);

// Для каждого элемента li.item
categoryItems.forEach((item) => {
  // Находим заголовок h2 внутри текущего элемента li.item
  const title = item.querySelector("h2").textContent;

  // Находим все элементы li внутри текущего элемента li.item (вложенные элементы)
  const nestedItems = item.querySelectorAll("li");

  // Посчитаем количество вложенных элементов (количество <li> в категории)
  const nestedItemCount = nestedItems.length;

  // Выведем в консоль текст заголовка и количество вложенных элементов в категории
  console.log(`Category: ${title}`);
  console.log(`Elements: ${nestedItemCount}`);
});

// const categoriesItemsByClass = document.querySelectorAll(".item");
// console.dir(`Number of categories: ${categoriesItemsByClass.length}`);

// const titles = document.querySelectorAll("ul li h2");
// console.dir(titles);
// // Проверяем, что список содержит хотя бы 3 заголовка
// if (titles.length >= 3) {
//   // Присваиваем класс "js-animals-title" первому заголовку (индекс 0)
//   titles[0].classList.add("js-animals-title");
//   console.dir(titles[0].textContent);

//   // Присваиваем класс "js-products-title" 2 заголовку (индекс 1)
//   titles[1].classList.add("js-products-title");
//   console.dir(titles[1].textContent);

//   // Присваиваем класс "js-technologies-title" третьему заголовку (индекс 2)
//   titles[2].classList.add("js-technologies-title");
//   console.dir(titles[2].textContent);
// }
