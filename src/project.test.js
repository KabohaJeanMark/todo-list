import Project from './project';

test('the constructor creates a new object with proper name', () => {
  const projectName = 'test project';
  const newProject = new Project(projectName);
  expect(newProject.name).toBe(projectName);
});