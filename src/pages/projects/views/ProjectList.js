import React from 'react';
import PropTypes from 'prop-types';
import ProjectCard from './ProjectCard';

const ProjectList = React.memo(({ projects, handleRemoveProject }) => {
  return (
    <>
      {
        !!projects.length && projects.map(({id, name}) => {
          return <ProjectCard 
            key={id} 
            id={id} 
            name={name} 
            handleRemoveProject={handleRemoveProject} 
          />
        })
      }
    </>
  )
});

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleRemoveProject: PropTypes.func.isRequired,
};

export default ProjectList;
