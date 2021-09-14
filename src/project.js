import { newTodoForm, displayTodosFunction } from './todo';

class Project {
  constructor(name) {
    this.name = name;
    this.listOfTodos = [];
  }

  get toDoList() {
    return this.listOfTodos;
  }
}

const projects = [];

const defaultProject = new Project('Default');

projects.push(defaultProject);

const allprojects = document.getElementById('all-projects');

const createProjectCard = (project) => {
  const div = document.createElement('div');
  div.classList.add('m-2', 'p-1');
  const projectName = document.createElement('span');
  projectName.textContent = project.name;
  projectName.addEventListener('click', () => {
    displayTodosFunction(project);
  });
  const addProjectTodo = document.createElement('button');
  addProjectTodo.classList.add('btn', 'btn-success', 'm-1');
  addProjectTodo.textContent = '+';
  addProjectTodo.addEventListener('click', () => {
    newTodoForm(project);
  });

  div.append(projectName, addProjectTodo);
  return div;
};

const displayAllProjects = () => {
  projects.forEach((project) => {
    const projectCard = createProjectCard(project);
    allprojects.appendChild(projectCard);
  });
};

const createProject = (name) => {
  const newProject = new Project(name);
  projects.push(newProject);
  allprojects.textContent = '';
  displayAllProjects();
  return newProject;
};

const localStorageOnLoad = () => {
  displayAllProjects();
};

document.addEventListener('DOMContentLoaded', localStorageOnLoad);

export {
  Project, createProject, projects, createProjectCard, displayAllProjects,
};