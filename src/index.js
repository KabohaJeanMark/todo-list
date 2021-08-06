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

const createProject = (name) => {
  const newProject = new Project(name);
  projectList.push(newProject);
  return newProject;
};
