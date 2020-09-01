import { ToDoTypes } from '../../components/form/types';
import { TodoAction } from '../actions/addTodo';
import { UserAction } from '../actions/addUser';
import { ToggleDoneAction } from '../actions/toggleDone';
import { loadState } from '../../utils';

export interface TodoState {
  todos: ToDoTypes[];
  username: string;
}
const initialState = {
  todos: [],
  username: 'Human Being',
};

export type Actions = TodoAction | UserAction | ToggleDoneAction;

export const todoReducer = (state: TodoState = initialState, action: Actions): TodoState => {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, action.payload] };
    case 'ADD_USER':
      return { todos: loadState()?.todos || [], username: action.payload };
    case 'TOGGLE_DONE':
      const i = action.payload.index;
      const tempTodos = [...state.todos];
      tempTodos.splice(i, 1, action.payload.todo);
      return { ...state, todos: tempTodos };

    default:
      return state;
  }
};
