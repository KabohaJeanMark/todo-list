import { Todo } from './todo';

describe('Todo tests', () => {

  const newTodo = new Todo('exercise','swimming', '12-10-2021', 'Medium');

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
})



