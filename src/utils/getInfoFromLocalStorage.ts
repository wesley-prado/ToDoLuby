import { TodoState } from '../store/reducers/todoReducer';

export function getUsernameFromLocalStorage(): string {
  return localStorage.getItem('username') || 'Human Being';
}

export const saveUsername = (username: string): void => {
  localStorage.setItem('username', username);
};

export const loadState = (): TodoState | undefined => {
  try {
    const username = getUsernameFromLocalStorage();
    const serializedState = localStorage.getItem(`todo-list#${username}`);
    if (!serializedState) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

export const saveState = (state: TodoState): void => {
  try {
    const username = getUsernameFromLocalStorage();
    const serializedState = JSON.stringify(state);
    localStorage.setItem(`todo-list#${username}`, serializedState);
  } catch (error) {}
};
