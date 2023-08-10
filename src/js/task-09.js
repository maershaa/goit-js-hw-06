function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
console.dir(getRandomHexColor);

// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

// Для генерации случайного цвета используй функцию getRandomHexColor.

const bodyEl = document.querySelector("body");
const currentColor = document.querySelector(".color");
const button = document.querySelector(".change-color");

const bodyColor = bodyEl;
console.log(bodyEl);

// Обработчик события клика на кнопке:
// button.addEventListener("click", () => { ... }); добавляет прослушиватель события клика на кнопке.
// Когда происходит клик на кнопке, код внутри этой функции выполнится.
// Внутри обработчика:
// const randomColor = getRandomHexColor(); вызывает функцию getRandomHexColor(), которая возвращает случайный цвет в формате HEX. Этот цвет сохраняется в переменную randomColor.
// bodyEl.style.backgroundColor = randomColor; устанавливает значение цвета фона (backgroundColor) элемента <body> равным сгенерированному случайному цвету (randomColor). Таким образом, при каждом клике цвет фона элемента <body> будет изменяться на новый случайный цвет.
// currentColor.textContent = randomColor; устанавливает textContent элемента с классом .color равным значению randomColor. Это значит, что текст внутри элемента с классом .color будет обновляться для отображения текущего случайного цвета.

button.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  currentColor.textContent = randomColor;
});

// После выполнения всего кода внутри обработчика, при каждом клике на кнопку "Change color", произойдут следующие действия:
// Сгенерируется случайный цвет.
// Цвет фона элемента <body> изменится на сгенерированный цвет.
// Значение сгенерированного цвета будет отображено в элементе с классом .color.
