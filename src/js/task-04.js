// Создание переменной counterValueEl. Этот элемент будет использоваться для обновления отображаемого значения счетчика.
const counterValueEl = document.querySelector("#value");

// Объявление переменной counterValue и присвоение начального значения:
let counterValue = 0;

// Выбираете кнопки для увеличения и уменьшения счетчика:
const decrementBtn = document.querySelector('button[data-action="decrement"]');

const incrementBtn = document.querySelector('button[data-action="increment"]');

// Добавление обработчика события для кнопки уменьшения:
decrementBtn.addEventListener("click", (event) => {
  counterValue -= 1;
  counterValueEl.textContent = counterValue;
});

// Добавление обработчика события для кнопки увеличения:
incrementBtn.addEventListener("click", (event) => {
  counterValue += 1;
  counterValueEl.textContent = counterValue;
});
