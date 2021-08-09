class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

const todoForm = document.getElementById('createTodoForm');
todoForm.style.display = 'none';

function createToDo(project) {
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const dueDate = document.getElementById('dueDate').value;
  const priority = document.getElementById('priority').value;

  const addedTodo = new Todo(title, description, dueDate, priority);
  console.log(addedTodo);
  project.toDoList.push(addedTodo);
  todoForm.style.display = 'none';
  console.log(project);
  console.log(project.toDoList);
}

export { createToDo, todoForm };
