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

// const getProjectsFromLocalStorage = () => {
//   let projects;
//   const localStorageProjects = localStorage.getItem('projects');
//   if (localStorageProjects === null) {
//     projects = [];
//     projects.push(defaultProject);
//     localStorage.setItem('projects', JSON.stringify(projects));
//     projects = JSON.parse(projects);
//   } else {
//     projects = JSON.parse(localStorageProjects);
//   }
//   return projects;
// };

// const addProjectToLocalStorage = (newProject) => {
//   const projects = getProjectsFromLocalStorage();
//   projects.push(newProject);

//   localStorage.setItem('projects', JSON.stringify(projects));
// };

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
  // const projects = getProjectsFromLocalStorage();
  projects.forEach((project) => {
    const projectCard = createProjectCard(project);
    allprojects.appendChild(projectCard);
  });
};

const createProject = (name) => {
  const newProject = new Project(name);
  projects.push(newProject);
  // addProjectToLocalStorage(newProject);
  allprojects.textContent = '';
  displayAllProjects();
  return newProject;
};

const localStorageOnLoad = () => {
  displayAllProjects();
};

document.addEventListener('DOMContentLoaded', localStorageOnLoad);

export { Project, createProject };