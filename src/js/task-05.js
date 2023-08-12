// Задание 5
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

// Здесь создается переменная textInput, которая получает ссылку на элемент HTML с идентификатором "name-input". Это  поле ввода (input), куда пользователь может вводить текст.
const textInput = document.querySelector("#name-input");

// Аналогично создается переменная output, которая получает ссылку на элемент HTML с идентификатором "name-output". Это, span, куда будет выводиться результат.
const output = document.querySelector("#name-output");

console.log(textInput);
console.log(output);

textInput.addEventListener("input", (event) => {
  const trimmedValue = event.currentTarget.value.trim(); // Применяется метод trim() к этому значению, чтобы удалить лишние пробелы в начале и конце строки.

  if (trimmedValue === "") {
    // Если после применения trim() значение пустое, то в элементе output будет отображаться "Anonymous".
    output.textContent = "Anonymous";
  } else {
    // В противном случае, в элементе output будет отображаться полученное значение (уже без лишних пробелов).
    output.textContent = trimmedValue;
  }
});

// Итак, в результате, когда пользователь вводит текст в поле с идентификатором "name-input", этот текст мгновенно отображается в элементе с идентификатором "name-output". Весь процесс реализован с использованием JavaScript и событий, позволяя динамически обновлять содержимое страницы при взаимодействии пользователя.
