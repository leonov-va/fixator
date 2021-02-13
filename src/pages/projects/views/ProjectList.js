import React from 'react';
import PropTypes from 'prop-types';
import ProjectCard from './ProjectCard';

const ProjectList = React.memo(({ projects }) => {
  return (
    <>
      {
        projects.map(({id, name}) => {
          return <ProjectCard key={id} id={id} name={name} />
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
};

export default ProjectList;