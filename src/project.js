import { newTodoForm, displayTodos } from './todo';

class Project {
  constructor(name) {
    this.name = name;
    this.listOfTodos = [];
  }

  get toDoList() {
    return this.listOfTodos;
  }
}

const projectList = [];

const defaultProject = new Project('Default');
projectList.push(defaultProject);

const allprojects = document.getElementById('all-projects');

function createProjectCard(project) {
  const div = document.createElement('div');
  div.classList.add('m-2', 'p-1');
  const projectName = document.createElement('span');
  projectName.textContent = project.name;
  projectName.addEventListener('click', () => {
    displayTodos(project);
  });
  const addProjectTodo = document.createElement('button');
  addProjectTodo.classList.add('btn', 'btn-success', 'm-1');
  addProjectTodo.textContent = '+';
  addProjectTodo.addEventListener('click', () => {
    newTodoForm(project);
  });

  div.appendChild(projectName);
  div.appendChild(addProjectTodo);
  return div;
}

function displayAllProjects() {
  if (!projectList.length) {
    const p2 = document.createElement('p');
    p2.textContent = 'There are currently no books';
    allprojects.appendChild(p2);
  } else {
    projectList.forEach((project) => {
      const projectCard = createProjectCard(project);
      allprojects.appendChild(projectCard);
    });
  }
}

const createProject = () => {
  const name = document.getElementById('name').value;
  const newProject = new Project(name);
  projectList.push(newProject);
  allprojects.textContent = '';
  displayAllProjects();
  return newProject;
};

export default createProject;