import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addProject, removeProject } from '../../../actions.js';

import AddProject from '../views/AddProject';
import ProjectList from '../views/ProjectList';

const ProjectsContainer = React.memo(({ projects, handleAddProject, handleRemoveProject }) => {
  const [projectsList, setProjectsList] = useState([]);

  useEffect(() => {
    setProjectsList(projects);
  }, [projects]);

  return (
    <>
      <ProjectList projects={projectsList} handleRemoveProject={(id) => handleRemoveProject(id)} />
      <AddProject handleAddProject={(name) => handleAddProject(name)}/>
    </>
  )
});

ProjectsContainer.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleAddProject: PropTypes.func.isRequired,
  handleRemoveProject: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    projects: state.projects,
  }),
  dispatch => ({
    handleAddProject: bindActionCreators(addProject, dispatch),
    handleRemoveProject: bindActionCreators(removeProject, dispatch),
  })
)(ProjectsContainer);