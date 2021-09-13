import { Project, createProject } from './project';

describe('Project creation tests', () => {

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
