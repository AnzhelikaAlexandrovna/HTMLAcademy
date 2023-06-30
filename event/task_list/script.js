const listN = document.querySelector('.todo-list');    // N(Node) в переменной означает значение ОБЪЕКТА (Node)
const items = listN.children;
const emptyListMessageN = document.querySelector('.empty-tasks');
const ItemFormN = document.querySelector('.add-form');
const ItemTitleN = ItemFormN.querySelector('.add-form-input');
const taskTemplateN = document.querySelector('#task-template').content;
const ItemTemplateN = taskTemplateN.querySelector('.todo-list-item');

const toggleEmptyListMessage = function () {
  if (items.length === 0) {
    emptyListMessageN.classList.remove('hidden');
  } else {
    emptyListMessageN.classList.add('hidden');
    }
};

const addCheckHandler = function (item) {
  const checkbox = item.querySelector('.todo-list-input');
  checkbox.addEventListener('change', function () {
    item.remove();
    toggleEmptyListMessage();
  });
};

for (let i = 0; i < items.length; i++) {
  addCheckHandler(items[i]);
}

ItemFormN.addEventListener('submit', function (evt) {
  evt.preventDefault();

  const taskText = ItemTitleN.value;
  const taskNode = ItemTemplateN.cloneNode(true);
  const taskDescriptionNode = taskNode.querySelector('span');
  taskDescriptionNode.textContent = taskText;
  addCheckHandler(taskNode);

  listN.appendChild(taskNode);
  toggleEmptyListMessage();
  ItemTitleN.value = '';
});
