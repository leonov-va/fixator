import { ADD_PROJECT, REMOVE_PROJECT } from './actions';

const initialState = {
  test:'string test)',
  projects: [
    { 
      id: 1,
      name: 'Ruvita',
      issues: [
        {
          id: 21,
          name: 'issues Ruvita',
        }
      ]
     },
    { 
      id: 2,
      name: 'Test',
      issues: [
        {
          id: 213,
          name: 'issues Test',
        }
      ]
     },
    { 
      id: 3,
      name: 'Google',
      issues: [
        {
          id: 123,
          name: 'issues Google',
        }
      ]
     }
  ],
};

const projectsReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case ADD_PROJECT:
      return {
        ...state,
        projects: [
          ...state.projects,
          {
            id: action.id,
            name: action.name,
          }
        ]
      };
    case REMOVE_PROJECT:
      console.log('###action.id: ', action.id);
      return {
        ...state,
        projects: state.projects.filter(project => project.id !== action.id),
      };
    default:
      return state;
  }  
}

export default projectsReducer;