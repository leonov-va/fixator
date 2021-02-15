import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProjectCard = React.memo(({ id, name, handleRemoveProject }) => {
  const handleClick = () => {
    handleRemoveProject(id);
  };

  return (
    <>
      <Link to={`/project/${id}`}>{ name }</Link>
      <button onClick={handleClick}>Удалить</button>
    </>
  )
});

ProjectCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  handleRemoveProject: PropTypes.func.isRequired,
};

export default ProjectCard;