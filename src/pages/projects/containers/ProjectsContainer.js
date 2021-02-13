import React, { useState } from 'react';
import AddProject from '../views/AddProject';
import ProjectList from '../views/ProjectList';

const ProjectsContainer = React.memo(props => {
  const [projects, setProjects] = useState([
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
  ]);

  const handleAddProject = (name) => {
    setProjects(prevState => {
      return [
        ...prevState,
        {
          id: Date.now(),
          name,
        }
      ];
    });
  };

  const handleRemoveProject = (id) => {
    setProjects(prevState => prevState.filter(project => project.id !== id));
  }

  return (
    <div>
      <ProjectList projects={projects} handleRemoveProject={handleRemoveProject} />
      <AddProject handleAddProject={handleAddProject} />
    </div>
  )
});

export default ProjectsContainer;