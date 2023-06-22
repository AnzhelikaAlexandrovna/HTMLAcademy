const chat = document.querySelector('.chat-content');   // чат-контейнер

const template = document.querySelector('#message-template').content;
const newMessage = template.querySelector('.chat-message');  // шаблон сообщения

const newChatForm = document.querySelector('.chat-form');   // форма отправки
const newChatTitle = newChatForm.querySelector('.chat-form-input'); // ввод сообщения

newChatForm.addEventListener('submit', function (evt) {
  evt.preventDefault();       // отменяем отправку формы по умолчанию
  
  const newChatText = newChatTitle.value;             // выводим текст
  const message = newMessage.cloneNode(true);         // клонируем шаблон
  const messageDescription = message.querySelector('p'); // в шаблоне ищем р
  messageDescription.textContent = newChatText;    // присваиваем значение выведенного текста
  
  chat.appendChild(message);          // добавляем сообщение в конец чата 
  newChatTitle.value = '';          // очищаем поле 
  
  const buttonChat = message.querySelector('.chat-message-button'); // находим в шаблоне кнопку удаления сообщения
  
  buttonChat.addEventListener('click', function () {
     message.remove();      // при клике на кнопку удаляем сообщение
  });
});

/* Нужно запрограммировать мессенджер. Как должна работать программа:
—Шаблон сообщения находится в теге template с идентификатором message-template.
— В блоке сообщения (класс chat-message) должен быть текст сообщения, кнопка удаления и имя пользователя.
— Новое сообщение добавляется в конец контейнера с классом chat-content.
— Чтобы добавить новое сообщение, нужно ввести текст в поле ввода (элемент с классом chat-form-input) и нажать кнопку «Отправить» (отправляет данные из формы с классом chat-form).
- Чтобы удалить сообщение, нужно кликнуть по кнопке с крестиком (элемент с классом chat-message-button). Эта кнопка появляется при наведении на сообщение.*/