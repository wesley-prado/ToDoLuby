import { ToDoTypes } from '../../components/form/types';

type ToggleDone = {
  todo: ToDoTypes;
  index: number;
};

export type ToggleDoneAction = {
  type: 'TOGGLE_DONE';
  payload: ToggleDone;
};

export const toggleDone = (ToggleObj: ToggleDone): ToggleDoneAction => ({
  type: 'TOGGLE_DONE',
  payload: ToggleObj,
});
