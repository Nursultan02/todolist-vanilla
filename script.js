const todoInput = document.querySelector('.todo-list-input');
const todoItems = document.getElementById('todo-list-items');

let counter = 0;

todoInput.addEventListener('keydown', (e) => addItem(e));

const deleteItem = (itemToDelete) => {
  itemToDelete.parentNode.removeChild(itemToDelete);
};

const addItem = (e) => {
  if (e.key === 'Enter') {
    if (todoInput.value.trim() !== '') {
      let val = e.target.value;

      let li = document.createElement('li');
      let p = document.createElement('p');

      let button = document.createElement('button');
      button.innerText = 'delete';

      p.innerText = val;
      li.appendChild(p);
      li.appendChild(button);
      todoItems.appendChild(li);

      todoInput.value = '';

      button.id = counter;

      const deleteBtn = document.getElementById(counter);

      deleteBtn.addEventListener('click', (e) =>
        deleteItem(e.target.parentNode)
      );
      counter++;
    } else {
      alert('Nothing to add!');
    }
  }
};
