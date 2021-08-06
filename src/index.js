console.log('Hello todo app');

const projectList = [];

class Project {
  constructor(name) {
    this.name = name;
    this.listOfTodos = [];
  }

  get toDoList() {
    return this.listOfTodos;
  }
}

const createProject = () => {
  const name = document.getElementById('name').value;
  const newProject = new Project(name);
  console.log(newProject);
  projectList.push(newProject);
  console.log(projectList);
  return newProject;
};

const projectCreateForm = document.getElementById('createProjectForm');
projectCreateForm.addEventListener('submit', (e) => {
  e.preventDefault();
  createProject();
});
