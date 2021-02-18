export const ADD_PROJECT = 'ADD_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';
export const GET_PROJECT_BY_ID = 'GET_PROJECT_BY_ID';
export const ADD_ISSUE = 'ADD_ISSUE';
export const REMOVE_ISSUE = 'REMOVE_ISSUE';

export const addProject = name => ({
  type: ADD_PROJECT,
  id: Date.now(),
  name,
});

export const removeProject = id => ({
  type: REMOVE_PROJECT,
  id,
});

export const getProjectById = id => ({
  type: GET_PROJECT_BY_ID,
  id,
});

export const addIssue = (id, issue) => ({
  type: ADD_ISSUE,
  id,
  issue,
})

export const removeIssue = (id, issueId) => ({
  type: REMOVE_ISSUE,
  id,
  issueId,
})