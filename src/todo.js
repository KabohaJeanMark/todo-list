class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

const todoForm = document.getElementById('todo-form');

const projectTodos = document.getElementById('projectTodos');

function createTodoCard(todo) {
  const div = document.createElement('div');
  const todoItem = document.createElement('span');
  todoItem.textContent = todo.title;
  const todoDetailBtn = document.createElement('button');
  todoDetailBtn.classList.add('btn', 'btn-success', 'm-1', 'displayer');
  todoDetailBtn.textContent = 'details';
  div.appendChild(todoItem);
  div.appendChild(todoDetailBtn);
  return div;
}

function displayTodos(project) {
  projectTodos.textContent = '';
  project.toDoList.forEach((todo) => {
    const todoCard = createTodoCard(todo);
    projectTodos.appendChild(todoCard);
  });
}

function createToDo(project) {
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const dueDate = document.getElementById('dueDate').value;
  const priority = document.getElementById('priority').value;
  const addedTodo = new Todo(title, description, dueDate, priority);
  project.toDoList.push(addedTodo);
  displayTodos(project);
}

function newTodoForm(project) {
  const newForm = document.createElement('form');
  const titleInput = document.createElement('input');
  titleInput.setAttribute('type', 'text');
  titleInput.setAttribute('id', 'title');
  const descriptionInput = document.createElement('input');
  descriptionInput.setAttribute('type', 'text');
  descriptionInput.setAttribute('id', 'description');
  const dueDateInput = document.createElement('input');
  dueDateInput.setAttribute('type', 'date');
  dueDateInput.setAttribute('id', 'dueDate');
  const prioritySelect = document.createElement('select');
  prioritySelect.setAttribute('id', 'priority');
  const priorities = [
    'High',
    'Medium',
    'Low',
  ];
  const options = priorities.map((priority) => {
    const value = priority.toLowerCase();
    return `<option value="${value}">${priority}</option>`;
  });
  prioritySelect.innerHTML = options;

  const submitToDo = document.createElement('input');
  submitToDo.setAttribute('type', 'submit');
  submitToDo.classList.add('btn', 'btn-success', 'm-1');

  newForm.appendChild(titleInput);
  newForm.appendChild(descriptionInput);
  newForm.appendChild(dueDateInput);
  newForm.appendChild(prioritySelect);
  newForm.appendChild(submitToDo);

  todoForm.appendChild(newForm);

  newForm.addEventListener('submit', (e) => {
    e.preventDefault();
    createToDo(project);
    newForm.style.display = 'none';
  });
  return newForm;
}

export { newTodoForm, displayTodos };
