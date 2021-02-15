export const ADD_PROJECT = 'ADD_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';

export const addProject = name => ({
  type: ADD_PROJECT,
  id: Date.now(),
  name
});

export const removeProject = id => ({
  type: REMOVE_PROJECT,
  id,
});
