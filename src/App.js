import React from 'react';
import ProjectsContainer from './pages/projects';

const App = React.memo(props => {
  return (
    <div>
      <ProjectsContainer />
    </div>
  )
});

export default App;