const todoInput = document.querySelector('.todo-list-input');
const todoItems = document.getElementById('todo-list-items');

todoInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
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
  }
});
