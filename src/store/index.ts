import { createStore } from 'redux';
import { todoReducer } from './reducers/todoReducer';
import { loadState } from '../utils';

const persistedState = loadState();
const store = createStore(todoReducer, persistedState);
export default store;
