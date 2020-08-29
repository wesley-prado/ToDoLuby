import { ToDoTypes } from '../components/form/types';
export function organizeToIncomplete(
  todoList: ToDoTypes[],
  setTodoList: React.Dispatch<React.SetStateAction<ToDoTypes[]>>,
  setIsCompleted: React.Dispatch<React.SetStateAction<boolean>>,
): void {
  const tempArr = todoList;
  const arrOrganized = tempArr.sort((a: ToDoTypes, b: ToDoTypes) => {
    return a.done === b.done ? 0 : a.done ? 1 : -1;
  });
  setTodoList([...arrOrganized]);
  setIsCompleted(false);
}

export function organizeToCompleted(
  todoList: ToDoTypes[],
  setTodoList: React.Dispatch<React.SetStateAction<ToDoTypes[]>>,
  setIsCompleted: React.Dispatch<React.SetStateAction<boolean>>,
): void {
  const tempArr = todoList;
  const arrOrganized = tempArr.sort((a: ToDoTypes, b: ToDoTypes) => {
    return a.done === b.done ? 0 : a.done ? -1 : 1;
  });
  setTodoList([...arrOrganized]);
  setIsCompleted(true);
}
