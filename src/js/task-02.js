const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все < li > за одну операцию в список ul#ingredients.

// Находим элемент списка по ID
const ingredientsListEl = document.querySelector("#ingredients");
console.dir(ingredientsListEl);

// Создаем массив элементов <li> из массива ingredients с помощью метода map
const liElements = ingredients.map((ingredient) => {
  // Создаем элемент <li>
  const listItem = document.createElement("li");
  // Устанавливаем текстовое содержимое элемента <li> равным текущему ингредиенту
  listItem.textContent = ingredient;

  // Добавляем класс "item" к элементу <li>
  listItem.classList.add("item");

  // Возвращаем созданный элемент <li>
  return listItem;
});

// Вставляем все элементы <li> за одну операцию в список ul#ingredients
ingredientsListEl.append(...liElements);
