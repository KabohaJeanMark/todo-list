import {Project, createProject } from './project';
console.log(Project);

test('the constructor creates a new object with proper name', () => {
  const projectName = 'test project';
  const newProject = createProject(projectName);
  expect(newProject.name).toBe(projectName);
});