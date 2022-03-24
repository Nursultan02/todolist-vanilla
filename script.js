const todoInput = document.querySelector('.todo-list-input');
const todoItems = document.getElementById('todo-list-items');
const todoListButton = document.querySelector('.todo-list-button');
const clearBtn = document.querySelector('.clear-btn');

let counter = 0;

// adding element with ENTER
todoInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addItem();
  }
});

// adding element with plus button
todoListButton.addEventListener('click', () => addItem());

clearBtn.addEventListener('click', () => clearTodo());

const clearTodo = () => {
  todoItems.innerHTML = '';
};

const deleteItem = (itemToDelete) => {
  itemToDelete.parentNode.removeChild(itemToDelete);
};

const addStyleToCompletedItem = (e) => {
  item = e.target.parentNode.parentNode;
  item.classList.add('completed');
  item.firstChild.style.color = 'green';
  e.target.parentNode.removeChild(e.target);
};

const addItem = () => {
  if (todoInput.value.trim() !== '') {
    let val = todoInput.value;

    let li = document.createElement('li');
    let p = document.createElement('p');
    let deleteButton = document.createElement('button');
    let completedButton = document.createElement('button');
    let buttonWrapper = document.createElement('div');

    deleteButton.innerText = 'Delete';
    p.innerText = val;
    completedButton.innerText = 'Completed';

    buttonWrapper.appendChild(completedButton);
    buttonWrapper.appendChild(deleteButton);

    li.appendChild(p);
    li.appendChild(buttonWrapper);

    todoItems.appendChild(li);

    deleteButton.id = counter;
    deleteButton.className = 'btn deleteBtn';
    completedButton.className = 'btn completed-btn';

    const deleteBtn = document.getElementById(counter);

    deleteBtn.addEventListener('click', (e) =>
      deleteItem(e.target.parentNode.parentNode)
    );

    completedButton.addEventListener('click', (e) =>
      addStyleToCompletedItem(e)
    );

    todoInput.value = '';
    counter++;
  } else {
    alert('Nothing to add!');
  }
};
