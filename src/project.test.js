import { Project, createProject } from './project';

test('create method creates a new object with proper name', () => {
  const projectName = 'test project';
  const newProject = createProject(projectName);
  expect(newProject.name).toBe(projectName);
});

test('creates a new object with wrong name', () => {
  const projectName = 'test project';
  const newProject = createProject('different name');
  expect(newProject.name === projectName).toBeFalsy();
});

test('constructor creates a new object', () => {
  const projectName = 'test project';
  const newProject = new Project(projectName);
  expect(typeof newProject).toEqual('object');
});

test('constructor creates a new object with array of todos', () => {
  const projectName = 'test project';
  const newProject = new Project(projectName);
  expect(typeof newProject.listOfTodos).toEqual('object');
});
