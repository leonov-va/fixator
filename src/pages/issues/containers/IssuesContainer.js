import PropTypes from "prop-types";
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import IssuesList from '../views/IssuesList';
import AddIssue from '../views/AddIssue';
import { addIssue, removeIssue } from "../../../actions";

const IssuesContainer = React.memo((props) => {
  const { projects, addIssue, removeIssue } = props;
  const [issues, setIssues] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    projects.map(project => {
      if (project.id === parseInt(id)) {
        setIssues(project.issues)
      }
    });
  }, [projects]);

  const handleAddIssue = (issue) => {
    addIssue(id, issue);
  };

  const handleRemoveIssue =  (issueId) => {
    removeIssue(id, issueId);
  };

  return (
    <>
      <Link to="/">Back to projects</Link>
      {
        !!issues.length && <IssuesList issues={issues} handleRemoveIssues={handleRemoveIssue}/>
      }
      <AddIssue handleAddIssue={handleAddIssue} />
    </>
  )
});

IssuesContainer.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      issues: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
        })
      )
    })
  )
}


export default connect(
  state => ({
    projects: state.projects
  }),
  dispatch => ({
    addIssue: bindActionCreators(addIssue, dispatch),
    removeIssue: bindActionCreators(removeIssue, dispatch),
  })
)(IssuesContainer)