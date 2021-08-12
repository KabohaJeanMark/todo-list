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

const defaultProject = new Project('Default');

function getProjectsFromLocalStorage() {
  let projects;
  const localStorageProjects = localStorage.getItem('projects');
  if (localStorageProjects === null) {
    projects = [];
    projects.push(defaultProject);
    localStorage.setItem('projects', JSON.stringify(projects));
    projects = JSON.parse(projects);
  } else {
    projects = JSON.parse(localStorageProjects);
  }
  return projects;
}

function addProjectToLocalStorage(newProject) {
  const projects = getProjectsFromLocalStorage();
  projects.push(newProject);

  localStorage.setItem('projects', JSON.stringify(projects));
}

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
  const projects = getProjectsFromLocalStorage();
  console.log(projects);
  projects.forEach((project) => {
    console.log(project);
    const projectCard = createProjectCard(project);
    allprojects.appendChild(projectCard);
  });
};

const createProject = () => {
  const name = document.getElementById('name').value;
  const newProject = new Project(name);
  // create function to add newProject to local storage
  addProjectToLocalStorage(newProject);
  // projectList.push(newProject);
  allprojects.textContent = '';
  displayAllProjects();
  return newProject;
};

function localStorageOnLoad() {
  displayAllProjects();
}

document.addEventListener('DOMContentLoaded', localStorageOnLoad);

export default createProject;