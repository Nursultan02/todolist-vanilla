const todoInput = document.querySelector('.todo-list-input');
const todoItems = document.getElementById('todo-list-items');
const todoListButton = document.querySelector('.todo-list-button');

let counter = 0;

// adding element with ENTER
todoInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addItem();
  }
});

// adding element with plus button
todoListButton.addEventListener('click', () => addItem());

const deleteItem = (itemToDelete) => {
  itemToDelete.parentNode.removeChild(itemToDelete);
};

const addItem = () => {
  if (todoInput.value.trim() !== '') {
    let val = todoInput.value;

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

    deleteBtn.addEventListener('click', (e) => deleteItem(e.target.parentNode));
    counter++;
  } else {
    alert('Nothing to add!');
  }
};
