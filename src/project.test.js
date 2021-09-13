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
