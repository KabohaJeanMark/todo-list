import createProject from './project';

console.log('Hello todo app');

const projectCreateForm = document.getElementById('createProjectForm');
projectCreateForm.addEventListener('submit', (e) => {
  e.preventDefault();
  createProject();
});
