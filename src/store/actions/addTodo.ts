import { ToDoTypes } from '../../components/form/types';

export type TodoAction = { type: 'ADD_TODO'; payload: ToDoTypes };

export const addTodo = (todo: string, description: string, done: boolean): TodoAction => ({
  type: 'ADD_TODO',
  payload: { todo, description, done },
});
