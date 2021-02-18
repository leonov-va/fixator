import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProjectCard = React.memo(({ id, name, handleRemoveProject }) => {
  const handleClick = () => {
    handleRemoveProject(id);
  };

  const rootStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '10px', 
    padding: '.5rem', 
    border: '1px solid #000000'
  };

  return (
    <div style={rootStyle}>
      <Link to={`/project/${id}`}>{ name }</Link>
      <button onClick={handleClick}>Удалить</button>
    </div>
  )
});

ProjectCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  handleRemoveProject: PropTypes.func.isRequired,
};

export default ProjectCard;