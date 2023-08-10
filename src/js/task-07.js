// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const textInput = document.querySelector("#font-size-control");
const outputText = document.querySelector("#text");

// Здесь вы добавляете обработчик события input для textInput. Событие input срабатывает при изменении значения элемента input, включая ползунок range. Внутри обработчика вы используете textInput.value, чтобы получить текущее значение ползунка, и добавляете "px" к числовому значению, чтобы получить значение в пикселях. Затем вы устанавливаете это значение в качестве значения свойства fontSize элемента outputText.
textInput.addEventListener("input", (event) => {
  const fontSize = textInput.value + "px"; // добавляем "px" к числовому значению
  outputText.style.fontSize = fontSize;
});

console.log(textInput);
console.log(outputText);

// Этот код будет обновлять размер текста в элементе outputText в зависимости от значения ползунка в режиме реального времени при помощи обработчика события input.
