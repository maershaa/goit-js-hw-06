// Задание 6
// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

const textInput = document.querySelector("#validation-input");
const maxLength = Number(textInput.getAttribute("data-length"));

// Здесь вы добавляете обработчик события blur для textInput. Событие blur срабатывает, когда элемент теряет фокус. Внутри обработчика вы проверяете длину значения, введенного в инпут, и сравниваете его с ожидаемой максимальной длиной (maxLength). Если длина совпадает, то вы удаляете класс "invalid" и добавляете класс "valid" для изменения стиля рамки. В противном случае, если длина не соответствует ожидаемой, вы удаляете класс "valid" и добавляете класс "invalid".
textInput.addEventListener("blur", () => {
  if (textInput.value.length === maxLength) {
    console.log("Valid length");
    textInput.classList.remove("invalid");
    textInput.classList.add("valid");
  } else {
    console.log("Invalid length");
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
  }
});

console.log(maxLength);
console.log(textInput.value.length);

// при потере фокуса на инпуте, проверяется его длина введенного значения. Если длина соответствует ожидаемой максимальной длине, меняется стиль рамки на "valid", в противном случае - на "invalid".
