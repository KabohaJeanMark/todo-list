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
console.log(defaultProject);
projectList.push(defaultProject);

const allprojects = document.getElementById('all-projects');

function createProjectCard(project) {
  const div = document.createElement('div');
  div.classList.add('m-2', 'p-1');
  const projectName = document.createElement('span');
  projectName.textContent = project.name;
  const addProjectTodo = document.createElement('button');
  addProjectTodo.classList.add('btn', 'btn-success', 'm-1');
  addProjectTodo.textContent = '+';
  // addProjectTodo.addEventListener('click', () => {
  //   addToDo(project);
  // });
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
  console.log(newProject);
  projectList.push(newProject);
  console.log(projectList);
  allprojects.textContent = '';
  displayAllProjects();
  return newProject;
};

export default createProject;