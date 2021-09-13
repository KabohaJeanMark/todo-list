import createProject from './project';

const name = document.getElementById('name').value;

const projectCreateForm = document.getElementById('createProjectForm');
projectCreateForm.addEventListener('submit', (e) => {
  e.preventDefault();
  createProject(name);
});
