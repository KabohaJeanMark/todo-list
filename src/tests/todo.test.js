import { Todo, createTodoCard } from '../todo';
import { Project } from '../project';

describe('Todo tests', () => {
  const newTodo = new Todo('exercise', 'swimming', '12-10-2021', 'Medium');

  test('create constructor creates a todo', () => {
    expect(typeof newTodo).toEqual('object');
  });

  test('created todo has proper title', () => {
    expect(newTodo.title).toBe('exercise');
  });

  test('created todo has wrong title', () => {
    expect(newTodo.title === 'marching').toBeFalsy();
  });

  test('created todo has proper description', () => {
    expect(newTodo.description).toBe('swimming');
  });

  test('check if created todo has wrong description', () => {
    expect(newTodo.description === 'jogging').toBeFalsy();
  });

  test('created todo returns proper date', () => {
    expect(newTodo.dueDate).toBe('12-10-2021');
  });

  test('created todo returns expected priority', () => {
    expect(newTodo.priority).toBe('Medium');
  });

  test('TodoCard function', () => {
    const newProject = new Project('project for Todos');
    const div = document.createElement('div');
    const todoItem = document.createElement('span');
    todoItem.textContent = newTodo.title;
    const todoDetailBtn = document.createElement('button');
    todoDetailBtn.classList.add('btn', 'btn-success', 'm-1', 'displayer');
    todoDetailBtn.textContent = 'details';
    div.append(todoItem, todoDetailBtn);
    expect(createTodoCard(newTodo,newProject)).toMatchObject(div);
  });
});
