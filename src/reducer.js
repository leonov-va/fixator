import { 
  ADD_PROJECT, 
  REMOVE_PROJECT, 
  GET_PROJECT_BY_ID, 
  ADD_ISSUE,
  REMOVE_ISSUE
} from './actions';

const initialState = {
  projects: [
    { 
      id: 1,
      name: 'Ruvita',
      issues: [
        {
          id: 21,
          screen: 'https://cdn.pixabay.com/photo/2021/02/06/14/24/lavanttal-5988332__340.jpg',
          description: 'bug #1',
          isFixed: false,
          isChecked: false,
        },
        {
          id: 213,
          screen: 'https://cdn.pixabay.com/photo/2020/10/08/17/39/waves-5638587__340.jpg',
          description: 'bug #2',
          isFixed: false,
          isChecked: false,
        },
      ]
     },
    { 
      id: 2,
      name: 'Test',
      issues: [
        {
          id: 213,
          screen: 'https://cdn.pixabay.com/photo/2019/12/03/22/22/dog-4671215__340.jpg',
          description: 'bug #1',
          isFixed: false,
          isChecked: false,
        },
        {
          id: 21,
          screen: 'https://cdn.pixabay.com/photo/2020/08/10/09/29/mountains-5477320__340.jpg',
          description: 'bug #2',
          isFixed: false,
          isChecked: false,
        },
      ]
     },
    { 
      id: 3,
      name: 'Google',
      issues: [
        {
          id: 123,
          screen: 'https://cdn.pixabay.com/photo/2020/11/28/02/17/island-5783440__340.jpg',
          description: 'bug #1',
          isFixed: false,
          isChecked: false,
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
      return {
        ...state,
        projects: state.projects.filter(project => project.id !== action.id),
      };
    case GET_PROJECT_BY_ID:
      return state.projects.filter(project => project.id === action.id);
    case ADD_ISSUE: 
      return {
         projects: state.projects.map(project => {
           if (project.id === parseInt(action.id)) {
             return {
               ...project,
               issues: [
                 ...project.issues,
                 {
                   ...action.issue,
                   id: Date.now(),
                   isFixed: false,
                   isChecked: false,
                 }
               ]
             }
           }
           return project;
         })
      };
    case REMOVE_ISSUE:
      return {
        projects: state.projects.map(project => {
          if (project.id === parseInt(action.id)) {
            return {
              ...project,
              issues: project.issues.filter(issue => issue.id !== parseInt(action.issueId))
            };
          }
          return project;
        })
      }
    default:
      return state;
  }  
}

export default projectsReducer;