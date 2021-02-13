import React from 'react';
import ProjectList from '../views/ProjectList';

const ProjectsContainer = React.memo(props => {
  const projects = [
    {
      id: 1,
      name: 'Ruvita',
    },
    {
      id: 2,
      name: 'Test',
    },
    {
      id: 3,
      name: 'Google',
    },
  ]
  return (
    <div>
      <ProjectList projects={projects} />
    </div>
  )
});

export default ProjectsContainer;