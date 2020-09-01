export type UserAction = { type: 'ADD_USER'; payload: string };

export const addUser = (user: string): UserAction => ({
  type: 'ADD_USER',
  payload: user,
});
