// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const textInput = document.querySelector("#font-size-control");
const outputText = document.querySelector("#text");

//  мы объявляем именованную функцию handleFontSizeChange. Эта функция будет вызываться каждый раз, когда происходит событие input на ползунке.
function handleFontSizeChange() {
  // Внутри функции handleFontSizeChange мы получаем текущее значение ползунка, добавляем к нему строку "px" и устанавливаем это значение как стиль fontSize элемента outputText. Это приводит к изменению размера шрифта текста в элементе в режиме реального времени при перетаскивании ползунка.
  const fontSize = textInput.value + "px"; // добавляем "px" к числовому значению
  outputText.style.fontSize = fontSize;
}

// Затем мы добавляем обработчик события input для textInput, который будет вызывать функцию handleFontSizeChange при изменении значения ползунка.
textInput.addEventListener("input", handleFontSizeChange);

console.log(textInput);
console.log(outputText);

// В конце кода мы вызываем функцию handleFontSizeChange вручную, чтобы установить начальное значение размера шрифта на основе текущего положения ползунка.
handleFontSizeChange();

// Этот код будет обновлять размер текста в элементе outputText в зависимости от значения ползунка в режиме реального времени при помощи обработчика события input.
