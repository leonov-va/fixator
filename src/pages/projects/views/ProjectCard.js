import React from 'react';
import PropTypes from 'prop-types';

const ProjectCard = React.memo(({ id, name }) => {
  return (
    <div>{ name }</div>
  )
});

ProjectCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default ProjectCard;