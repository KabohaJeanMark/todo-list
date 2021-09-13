import { Todo } from './todo';

test('create constructor creates a todo', () => {
  const newTodo = new Todo('exercise','swimming', '12-10-2021', 'Medium');
  expect(typeof newTodo).toEqual('object');
});

test('created todo has proper title', () => {
  const newTodo = new Todo('exercise','swimming', '12-10-2021', 'Medium');
  expect(newTodo.title).toBe('exercise');
});
