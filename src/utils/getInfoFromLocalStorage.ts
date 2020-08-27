import { ToDoTypes } from '../components/form/types';

export function getUsernameFromLocalStorage(): string {
  return localStorage.getItem('username') || 'Human Being';
}

export function getDataFromLocalStorage(username: string): ToDoTypes[] {
  const result = JSON.parse(localStorage.getItem(`todo-list#${username}`) || '[]');
  console.log(result);
  return result;
}
