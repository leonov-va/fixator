import React from 'react';
import { Link } from 'react-router-dom';

const Project = React.memo(() => {
  return (
    <>
      <Link to="/">Back to projects</Link>
      <h1>Project NAME</h1>
    </>
  )
});

export default Project;