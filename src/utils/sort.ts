import { TodoState } from '../store/reducers/todoReducer';
import { ToDoTypes } from '../components/form/types';

export function organizeToIncomplete(todos: TodoState['todos']): ToDoTypes[] {
  return todos.sort((a, b) => {
    return a.done === b.done ? 0 : a.done ? -1 : 1;
  });
}

export function organizeToCompleted(todos: TodoState['todos']): ToDoTypes[] {
  return todos.sort((a, b) => {
    return a.done === b.done ? 0 : a.done ? 1 : -1;
  });
}
