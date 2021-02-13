import React from 'react';
import PropTypes from 'prop-types';

const ProjectCard = React.memo(({ id, name, handleRemoveProject }) => {
  const handleClick = () => {
    handleRemoveProject(id);
  };

  return (
    <>
      <div>{ name }</div>
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