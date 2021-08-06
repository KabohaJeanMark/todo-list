console.log('Hello todo app');

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
  return newProject;
};
