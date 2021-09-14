import {
  Project, createProject, projects, createProjectCard, displayAllProjects,
} from '../project';

describe('Project tests for creation and the constructor', () => {
  const projectName = 'test project';
  const newProject = new Project(projectName);

  test('create method creates a new object with proper name', () => {
    const myProject = createProject(projectName);
    expect(myProject.name).toBe(projectName);
  });

  test('creates a new object with wrong name', () => {
    expect(newProject.name === 'different name').toBeFalsy();
  });

  test('constructor creates a new object', () => {
    expect(typeof newProject).toEqual('object');
  });

  test('constructor creates a new object with array of todos', () => {
    expect(typeof newProject.listOfTodos).toEqual('object');
  });
});

describe('More unit tests for the different project methods', () => {
  const newProject = createProject('Added project');
  const allProjects = document.getElementById('all-projects');

  test('displayAllProjects shows the Default project', () => {
    displayAllProjects();
    expect(allProjects.innerHTML).toContain('Default');
  });

  test('displayAllProjects shows the project added to the projects array', () => {
    displayAllProjects();
    expect(allProjects.innerHTML).toContain('Added project');
  });

  test('projectCard method', () => {
    const div = document.createElement('div');
    div.classList.add('m-2', 'p-1');
    const projectName = document.createElement('span');
    projectName.textContent = newProject.name;
    const addProjectTodo = document.createElement('button');
    addProjectTodo.classList.add('btn', 'btn-success', 'm-1');
    addProjectTodo.textContent = '+';
    div.append(projectName, addProjectTodo);
    expect(createProjectCard(newProject)).toMatchObject(div);
  });

  test('new project is added to projects array already containing a default object and displayed', () => {
    expect(projects.length).toBe(3);
  });
});
