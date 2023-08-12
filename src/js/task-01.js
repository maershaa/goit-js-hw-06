const categoriesList = document.getElementById("categories");

// Находим все элементы li.item внутри списка категорий
// const categoryItems = categoriesList.querySelectorAll("li.item");
const categoryItems = categoriesList.children;
console.log(categoryItems);

// Преобразовываем коллекцию в массив
const categoryItemsArray = Array.from(categoryItems);
// console.log(categoryItemsArray);

// Посчитаем и выведем в консоль количество категорий (элементов li.item)
const categoryCount = categoryItemsArray.length;
console.log(`Number of categories: ${categoryCount}`);

// Для каждого элемента li.item
categoryItemsArray.forEach((item) => {
  // Находим заголовок h2 внутри текущего элемента li.item
  // const title = item.querySelector("h2").textContent;
  const title = item.firstElementChild.textContent;
  // console.log(title);

  // Находим список ul внутри текущего элемента li.item (вложенные элементы)
  const ulEl = item.querySelector("ul");

  // Находим все элементы li внутри текущего элемента li.item (вложенные элементы)
  // const nestedItems = item.querySelectorAll("li");
  const nestedItems = ulEl.children;
  // console.log(nestedItems);

  // Преобразовываем коллекцию в массив
  const nestedItemsArray = Array.from(nestedItems);
  // console.log(nestedItemsArray);

  // Посчитаем количество вложенных элементов (количество <li> в категории)
  const nestedItemCount = nestedItemsArray.length;

  // Выведем в консоль текст заголовка и количество вложенных элементов в категории
  console.log(`Category: ${title}`);
  console.log(`Elements: ${nestedItemCount}`);
});
