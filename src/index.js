import createProject from './project';

console.log('Hello todo app');

const projectCreateForm = document.getElementById('createProjectForm');
projectCreateForm.addEventListener('submit', (e) => {
  e.preventDefault();
  createProject();
});

const todoForm = document.getElementById('createTodoForm');
todoForm.style.display = 'none';

const defaultTodoBtn = document.getElementById('defaultTodo');
defaultTodoBtn.addEventListener('click', () => {
  todoForm.style.display = 'block';
});