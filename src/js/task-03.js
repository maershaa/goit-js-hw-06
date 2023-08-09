const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// Находим элемент списка по классу
const galleryListEl = document.querySelector(".gallery");

// Создаем массив элементов <img> из массива images с помощью метода map ( В этом массиве мы преобразовали каждый объект из массива images в строку с разметкой для элемента списка <li>, который содержит изображение <img>. Мы использовали шаблонные строки для вставки URL и альтернативного текста каждого изображения в разметку.)
const ImgEl = images.map(
  (image) =>
    `<li class="item-js"><img src="${image.url}" alt="${image.alt}" width="360" height="300" class="img-js"></li>`
);
// мы вставляем все элементы <li> с изображениями за одну операцию вставки в список <ul> с классом "gallery". Метод join("") используется для объединения массива строк в одну строку, чтобы вставить все элементы одновременно.
galleryListEl.insertAdjacentHTML("beforeend", ImgEl.join(""));
